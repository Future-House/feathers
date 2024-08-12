import React, { useState, forwardRef, useRef, useEffect } from 'react';
import {
    Input,
    Box,
    List,
    ListItem,
    useDisclosure,
    useOutsideClick,
    useColorMode,
    Typography,
} from '../index';
import PropTypes from 'prop-types';
import { FixedSizeList as VirtualizedList } from 'react-window';

const Typeahead = forwardRef(({
    options = [],
    onSelect = () => { },
    placeholder = 'Type here...',
    VirtualizedListProps,
    VirtualizedListItemProps,
    InputProps,
    ContainerBoxProps,
    TypographyProps,
    maxVisibleOptions = options.length > 5 ? 5 : options.length,
    defaultIndex
}, ref) => {
    const [query, setQuery] = useState('');
    const [filteredOptions, setFilteredOptions] = useState(options);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode } = useColorMode();

    const isMounted = useRef(false);

    let fallbackRef = ref;
    const internalRef = useRef();
    if (!ref) {
        fallbackRef = internalRef;
    }

    useEffect(() => {
        if (typeof defaultIndex === 'number' && options[defaultIndex] && !isMounted.current) {
            setQuery(options[defaultIndex]);
            isMounted.current = true;
        }
    }, [defaultIndex, options, onSelect]);

    useEffect(() => {
        if (query) {
            const filtered = options.filter((option) =>
                option.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredOptions(filtered);
        } else {
            setFilteredOptions(options);
        }
    }, [query, options]);

    const handleChange = (event) => {
        const newQuery = event.target.value;
        setQuery(newQuery);
        if (newQuery) {
            const filtered = options.filter((option) =>
                option.toLowerCase().includes(newQuery.toLowerCase())
            );
            setFilteredOptions(filtered);
        } else {
            setFilteredOptions(options);
        }
        onOpen();
    };

    const handleSelect = (option) => {
        setQuery(option);
        setFilteredOptions([]);
        onSelect(option);
        onClose();
    };

    const handleFocus = () => {
        if (query) {
            const filtered = options.filter((option) =>
                option.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredOptions(filtered);
        } else {
            setFilteredOptions(options);
        }
        onOpen();
    };

    const handleBlur = (event) => {
        if (!fallbackRef.current.contains(event.relatedTarget)) {
            onClose();
        }
    };

    useOutsideClick({
        ref: fallbackRef,
        handler: () => {
            onClose();
        },
    });

    const renderRow = ({ index, style }) => (
        <Box
            as="button"
            key={index}
            onClick={() => handleSelect(filteredOptions[index])}
            style={{ ...style, textAlign: 'left', paddingLeft: '1rem' }}
            _hover={{ bg: colorMode === 'light' ? 'gray.100' : 'gray.600', cursor: 'pointer' }}
            {...VirtualizedListItemProps}
        >
            {filteredOptions[index]}
        </Box>
    );

    return (
        <Box position="relative" ref={fallbackRef} {...ContainerBoxProps}>
            <Input
                placeholder={placeholder}
                value={query}
                onChange={handleChange}
                onFocus={handleFocus}
                {...InputProps}
            />
            {isOpen && (
                <Box
                    position="absolute"
                    top="100%"
                    left="0"
                    right="0"
                    bg={colorMode === 'light' ? 'white' : 'gray.700'}
                    borderWidth="1px"
                    borderRadius="md"
                    boxShadow="md"
                    zIndex="1"
                    overflowY="auto"
                    onBlur={handleBlur}
                    {...ContainerBoxProps}
                >
                    {filteredOptions.length > 0 ? (
                        <VirtualizedList
                            height={maxVisibleOptions * 35}
                            itemCount={filteredOptions.length}
                            itemSize={35}
                            {...VirtualizedListProps}
                        >
                            {renderRow}
                        </VirtualizedList>
                    ) : (
                        <Box padding="2">
                            <Typography color={colorMode === 'light' ? 'gray.500' : 'gray.300'} {...TypographyProps}>
                                No results found
                            </Typography>
                        </Box>
                    )}
                </Box>
            )}
        </Box>
    );
});

Typeahead.displayName = "Typeahead";
Typeahead.propTypes = {
    options: PropTypes.array,
    onSelect: PropTypes.func,
    placeholder: PropTypes.string,
    InputProps: PropTypes.object,
    VirtualizedListProps: PropTypes.object,
    ContainerBoxProps: PropTypes.object,
    TypographyProps: PropTypes.object,
    VirtualizedListItemProps: PropTypes.object,
    maxVisibleOptions: PropTypes.number,
    defaultIndex: PropTypes.number
};

export default Typeahead;