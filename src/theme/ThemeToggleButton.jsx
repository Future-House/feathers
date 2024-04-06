import React from 'react';
import { useColorMode, IconButton, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '../icons/index';

/**
 * A button component for toggling the color mode (theme) in a Future House UI application. 
 * @returns {React.ReactElement} A React element representing the toggle theme button, including its icon and color scheme settings.
 */
export default function ThemeToggleButton() {
    const { toggleColorMode } = useColorMode();
    const icon = useColorModeValue(<MoonIcon />, <SunIcon />);

    return (
        <IconButton
            aria-label="Toggle theme"
            icon={icon}
            onClick={toggleColorMode}
            colorScheme={useColorModeValue('purple', 'orange')}
            isRound={true}
        />
    );
}
