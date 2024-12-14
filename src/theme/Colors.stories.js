/* eslint-disable react/prop-types */
import React from 'react';
import { Box, SimpleGrid, Text, VStack, useTheme } from '../components';
import ThemeToggleButton from '../theme/ThemeToggleButton';
import FutureHouseApp from './FutureHouseApp';

const getColorFamilies = (theme) => {
    const families = {};
    if (theme?.colors) {
        Object.entries(theme.colors).forEach(([family, shades]) => {
            if (typeof shades === 'object' && !family.includes('alpha')) {
                families[family] = Object.entries(shades)
                    .filter(([shade]) => !isNaN(shade))
                    .map(([shade, value]) => ({ shade, value }))
                    .sort((a, b) => Number(a.shade) - Number(b.shade));
            }
        });
        return families;
    }
};

const getSpecialNote = (familyName, shade) => {
    if (familyName === 'gray') {
        if (shade === '800') return '(DarkMode primary color)';
    }
    return null;
};

const ColorFamily = ({ familyName, shades }) => (
    <Box p={6} borderWidth="1px" borderRadius="lg">
        <Text fontSize="xl" fontWeight="bold" mb={4} textTransform="capitalize">
            {familyName}
        </Text>
        <SimpleGrid columns={[2, 3, 4]} spacing={4}>
            {shades.map(({ shade, value }) => (
                <VStack key={shade} align="stretch" spacing={2}>
                    <Box
                        h="48px"
                        bg={value}
                        borderRadius="md"
                        boxShadow="sm"
                        position="relative"
                        cursor="pointer"
                        onClick={() => navigator.clipboard.writeText(value)}
                        mr={4}
                        transition="transform 0.2s"
                        _hover={{ transform: "scale(1.05)" }}
                    />
                    <VStack spacing={0} align="stretch">
                        <Text fontSize="sm" fontWeight="medium">
                            {familyName}-{shade}
                        </Text>
                        <Text fontSize="xs" color="gray.500">
                            {value}
                            {getSpecialNote(familyName, shade) && (
                                <Text as="span" color="red.500" display="inline">
                                    {" "}{getSpecialNote(familyName, shade)}
                                </Text>
                            )}
                        </Text>
                    </VStack>
                </VStack>
            ))}
        </SimpleGrid>
    </Box>
);

const ColorFamilies = () => {
    const theme = useTheme();
    const families = getColorFamilies(theme);

    return (
        families && (
            <VStack spacing={8} align="stretch" p={6}>
                {Object.entries(families).map(([familyName, shades]) => (
                    <ColorFamily
                        key={familyName}
                        familyName={familyName}
                        shades={shades}
                    />
                ))}
            </VStack>
        )
    );
};

export default {
    title: 'Future House/Color Families',
    component: ColorFamilies,
    parameters: {
        layout: 'fullscreen',
    },
};

export const Default = {
    render: () => <FutureHouseApp>
        <ThemeToggleButton />
        <ColorFamilies />
    </FutureHouseApp>
};