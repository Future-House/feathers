// src/components/Terminal.js

import React, { useState, useEffect, useRef } from 'react';
import { Box, Input, Text, useColorModeValue, HStack, Icon, Flex, VStack } from '@chakra-ui/react';
import { FaCircle } from 'react-icons/fa';
import { spacingXxxs } from '../../theme';

function Terminal() {
    const [input, setInput] = useState('');
    const [lines, setLines] = useState(["Last login: " + new Date().toLocaleString() + " on ttys000"]);
    const prompt = `aviary-DEV@~ $ `;
    const containerRef = useRef(null);

    const bg = useColorModeValue('gray.200', 'gray.800');
    const color = useColorModeValue('gray.500', 'white');
    const inputBg = useColorModeValue('gray.200', 'gray.800');

    const handleInputChange = (e) => setInput(e.target.value);
    const handleInputKeyPress = (e) => {
        if (e.key === 'Enter' && input.trim() !== '') {
            setLines(prevLines => [`${prompt}${input}`, ...prevLines]);
            setInput('');
            e.preventDefault();
        }
    };

    useEffect(() => {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }, []);

    return (
        <Box bg={bg} color={color} height="300px" overflowY="auto" borderRadius="10px" border="1px solid" borderColor="gray.700">
            <Flex position="sticky" p={4} top="0" zIndex="sticky" bg={bg} alignItems="center" justifyContent="flex-start" mb="0" w="full">
                <HStack spacing={2}>
                    <Icon as={FaCircle} color="red.500" boxSize={3} />
                    <Icon as={FaCircle} color="yellow.400" boxSize={3} />
                    <Icon as={FaCircle} color="green.500" boxSize={3} />
                </HStack>
            </Flex>
            <VStack spacing={4} align="stretch" overflowY="auto" ref={containerRef} flexDirection="column-reverse" px={4} pb={2}>
                {lines.map((line, index) => (
                    <Text key={index} as="span" fontFamily="monospace" fontSize="sm">
                        {line}
                    </Text>
                ))}
            </VStack>
            <Flex align="center" p={4} sx={{ alignItems: 'stretch' }}>
                <Text as="span" fontFamily="monospace" fontSize="sm" sx={{ whiteSpace: 'nowrap', marginRight: spacingXxxs }}>{prompt}</Text>
                <Input
                    variant="unstyled"
                    placeholder="Type here..."
                    value={input}
                    onChange={handleInputChange}
                    onKeyPress={handleInputKeyPress}
                    borderColor="transparent"
                    bg={inputBg}
                    _placeholder={{ color: 'gray.500' }}
                    focusBorderColor="transparent"
                    fontSize="sm"
                    flex="1"
                />
            </Flex>
        </Box>
    );
}

export default Terminal;
