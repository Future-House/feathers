import React, { forwardRef, useState } from 'react';
import { Box, Input, VStack, Text, useColorModeValue } from '@chakra-ui/react';

const Terminal = forwardRef((props, ref) => {
    const [input, setInput] = useState('');
    const [lines, setLines] = useState([]);

    const bg = useColorModeValue('gray.200', 'gray.700');
    const color = useColorModeValue('black', 'white');
    const borderColor = useColorModeValue('gray.300', 'gray.500');

    const handleInputChange = (e) => setInput(e.target.value);
    const handleInputKeyPress = (e) => {
        if (e.key === 'Enter' && input.trim() !== '') {
            setLines(prevLines => [...prevLines, input]);
            setInput('');
        }
    };

    return (
        <Box bg={bg} color={color} p={4} minHeight="300px" border="1px solid" borderColor={borderColor} rounded="md" ref={ref}>
            <VStack spacing={4} align="stretch">
                {lines.map((line, index) => (
                    <Text key={index} as="span" fontFamily="monospace">
                        {`${index + 1}. ${line}`}
                    </Text>
                ))}
            </VStack>
            <Input
                variant="flushed"
                placeholder="Type here..."
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyPress}
                mt={4}
                borderColor={borderColor}
                _placeholder={{ color: useColorModeValue('gray.500', 'gray.500') }}
                focusBorderColor={useColorModeValue('blue.500', 'blue.300')}
            />
        </Box>
    );
});

Terminal.displayName = 'Terminal';

export default Terminal;
