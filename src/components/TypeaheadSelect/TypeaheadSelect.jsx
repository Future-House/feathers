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

const Typeahead = forwardRef(({ 
    options = [],
    onSelect = () => { },
    placeholder = 'Type here...',
    ListProps,
    ListItemProps,
    InputProps,
    ContainerBoxProps,
    TypographyProps
}, ref) => {
    const [query, setQuery] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode } = useColorMode();

    let fallbackRef = ref;
    const internalRef = useRef();
    if (!ref) {
        fallbackRef = internalRef;
    }

    useEffect(() => {
        if (query) {
            const filtered = options.filter((option) =>
                option.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredOptions(filtered);
        } else {
            setFilteredOptions([]);
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
            onOpen();
        } else {
            setFilteredOptions([]);
            onClose();
        }
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

    useOutsideClick({
        ref: fallbackRef,
        handler: () => {
            onClose();
        },
    });

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
                    {...ContainerBoxProps}
                >
                    <List spacing={1} {...ListProps}>
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option, index) => (
                                <ListItem
                                    key={index}
                                    padding="2"
                                    _hover={{ bg: colorMode === 'light' ? 'gray.100' : 'gray.600', cursor: 'pointer' }}
                                    onClick={() => handleSelect(option)}
                                    {...ListItemProps}
                                >
                                    {option}
                                </ListItem>
                            ))
                        ) : (
                            <ListItem padding="2" {...ListItemProps}>
                                <Typography color={colorMode === 'light' ? 'gray.500' : 'gray.300'} {...TypographyProps}>No results found</Typography>
                            </ListItem>
                        )}
                    </List>
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
    ListProps: PropTypes.object,
    ContainerBoxProps: PropTypes.object,
    TypographyProps: PropTypes.object,
    ListItemProps: PropTypes.object
};

export default Typeahead;
