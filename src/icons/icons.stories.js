import React from 'react';
import * as AllIcons from '../icons';
import { FutureHouseApp, Box, Text, VStack, Grid, GridItem } from '../components';

export default {
    title: 'Future House/Icons',
    component: Box,
};

export const Icons = () => {
    return (
        <FutureHouseApp>
            <Grid templateColumns="repeat(auto-fill, minmax(120px, 1fr))" gap={6}>
                {Object.entries(AllIcons).map(([iconName, IconComponent]) => (
                    <GridItem key={iconName} w="100%" p={3} borderWidth="1px" borderRadius="md" textAlign="center">
                        <VStack spacing={2}>
                            <Box boxSize="24px" as={IconComponent} />
                            <Text fontSize="xs">{iconName}</Text>
                        </VStack>
                    </GridItem>
                ))}
            </Grid>
        </FutureHouseApp>
    );
};
