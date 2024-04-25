import React, { useState, useRef } from 'react';
import { Box, Input, Text, useColorModeValue, HStack, Icon, Flex } from '@chakra-ui/react';
import { FaCircle } from 'react-icons/fa';
import { spacingXxxs } from '../../theme';

function Terminal() {
    const [input, setInput] = useState('');
    const [lines, setLines] = useState(["Last login: " + new Date().toLocaleString() + " on ttys000"]);
    const prompt = `aviary-DEV@~ $ `;
    const inputRef = useRef(null);
    const outputRef = useRef(null);

    const bg = useColorModeValue('gray.200', 'gray.800');
    const color = useColorModeValue('gray.500', 'white');
    const inputBg = useColorModeValue('gray.200', 'gray.800');

    const handleInputChange = (e) => setInput(e.target.value);
    const handleInputKeyPress = (e) => {
        if (e.key === 'Enter' && input.trim() !== '') {
            setLines([`${prompt}${input}`, ...lines]);
            setInput('');
            e.preventDefault();
        }
    };

    return (
        <Box bg={bg} color={color} height="300px" overflow="hidden" borderRadius="10px" border="1px solid" borderColor="gray.700">
            <Flex direction="column" height="100%">
                <Flex position="sticky" top="0" zIndex="sticky" bg={bg} alignItems="center" p={4} justifyContent="flex-start">
                    <HStack spacing={2}>
                        <Icon as={FaCircle} color="red.500" boxSize={3} />
                        <Icon as={FaCircle} color="yellow.400" boxSize={3} />
                        <Icon as={FaCircle} color="green.500" boxSize={3} />
                    </HStack>
                </Flex>
                <Flex flex="1" flexDirection="column-reverse" overflowY="auto" px={4} pt={2} ref={outputRef}>
                    {lines.map((line, index) => (
                        <Text key={index} as="span" fontFamily="Space Mono" fontSize="sm">
                            {line}
                        </Text>
                    ))}
                </Flex>
                <Flex align="center" p={4}>
                    <Text as="span" fontFamily="Space Mono" fontSize="sm" sx={{ whiteSpace: 'nowrap', marginRight: spacingXxxs }}>{prompt}</Text>
                    <Input
                        ref={inputRef}
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
            </Flex>
        </Box>
    );
}

export default Terminal;
