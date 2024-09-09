import React, { useState, forwardRef, useRef, useEffect, useCallback } from 'react';
import { Input, Box, useDisclosure, useOutsideClick, useColorMode } from '@chakra-ui/react';
import Typography from '../Typography/Typography.jsx';
import PropTypes from 'prop-types';
import { FixedSizeList as VirtualizedList } from 'react-window';

const Typeahead = forwardRef(({
    options = [],
    value,
    onChange,
    onSelect = () => { },
    placeholder = 'Type here...',
    VirtualizedListProps,
    VirtualizedListItemProps,
    InputProps,
    ContainerBoxProps,
    TypographyProps,
    maxVisibleOptions = options.length > 5 ? 5 : options.length,
    defaultIndex,
    noResultsText = 'No results found'
}, ref) => {
    const [internalQuery, setInternalQuery] = useState('');
    const query = value !== undefined ? value : internalQuery;

    const [filteredOptions, setFilteredOptions] = useState(options);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode } = useColorMode();

    const isMounted = useRef(false);
    const isControlled = useRef(value !== undefined);

    let fallbackRef = ref;
    const internalRef = useRef();
    if (!ref) {
        fallbackRef = internalRef;
    }

    useEffect(() => {
        if (process.env.NODE_ENV !== 'development') return;
        const currentlyControlled = value !== undefined;

        if (isControlled.current !== currentlyControlled) {
            console.warn(`
                Typeahead component is changing from ${isControlled.current ? 'controlled' : 'uncontrolled'} to 
                ${currentlyControlled ? 'controlled' : 'uncontrolled'}. This is not recommended. Decide whether 
                you want the component to be controlled or uncontrolled.`
            );
        }

        isControlled.current = currentlyControlled;
    }, [value]);

    useEffect(() => {
        if (typeof defaultIndex === 'number' && options[defaultIndex] && !isMounted.current) {
            const defaultQuery = options[defaultIndex];
            if (value === undefined) setInternalQuery(defaultQuery);
            onChange?.(defaultQuery);
            isMounted.current = true;
        }
    }, [defaultIndex, options, onSelect, value, onChange]);

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
        if (value === undefined) setInternalQuery(newQuery);
        onChange?.(newQuery);
        onOpen();
    };

    const handleSelect = useCallback((option) => {
        if (value === undefined) setInternalQuery(option);
        onChange?.(option);
        onSelect(option);
        setFilteredOptions([]);
        onClose();
    }, [onClose, onSelect, onChange, value]);

    const handleKeyDown = useCallback((event) => {
        if (event.key === 'Enter' && filteredOptions.length > 0) {
            handleSelect(filteredOptions[0]);
        }
    }, [filteredOptions, handleSelect]);

    const handleFocus = () => {
        onOpen();
    };

    const handleBlur = (event) => {
        if (!fallbackRef.current.contains(event.relatedTarget)) {
            onClose();
        }
    };

    useOutsideClick({
        ref: fallbackRef,
        handler: onClose,
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
                onKeyDown={handleKeyDown}
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
                                {noResultsText}
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
    value: PropTypes.string,
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    placeholder: PropTypes.string,
    InputProps: PropTypes.object,
    VirtualizedListProps: PropTypes.object,
    ContainerBoxProps: PropTypes.object,
    TypographyProps: PropTypes.object,
    VirtualizedListItemProps: PropTypes.object,
    maxVisibleOptions: PropTypes.number,
    defaultIndex: PropTypes.number,
    noResultsText: PropTypes.string
};

export default Typeahead;
