import React, { forwardRef, useEffect } from 'react';
import {
    Drawer as ChakraDrawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Box,
    useTheme,
    useMediaQuery,
    useColorMode
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import Button from '../Button/Button.jsx';
import { spacingXl, spacingXs } from '../../theme/tokens/designTokens';

export const PERMANENT_DRAWER_WIDTH = '25vw';

const Drawer = forwardRef(({
    title,
    children,
    placement = "right",
    permanent = true,
    isOpen,
    onClose,
    hasHeader = false,
    setIsOpen,
    ...rest
}, ref) => {
    const theme = useTheme();
    const { colorMode } = useColorMode();
    const [isWidthGreaterThanMd] = useMediaQuery('(min-width: 48em)');

    useEffect(() => {
        if (permanent && isWidthGreaterThanMd) {
            setIsOpen(true)
        }
    }, [isWidthGreaterThanMd, permanent, setIsOpen]);

    return (
        permanent && isWidthGreaterThanMd ? (
            <Box
                position="fixed"
                top={hasHeader ? spacingXl : 0}
                right={0}
                w="25vw"
                h="100vh"
                bg={colorMode === 'dark' ? theme.colors.gray[700] : theme.colors.gray[300]}
                // boxShadow="md"
                p={spacingXs}
                zIndex="overlay"
                ref={ref}
            >
                {children}
            </Box>
        ) : (
            <>
                {/* rethink this later.. how should mobile view handle a permanent drawer at small viewports?? */}
                {!isOpen && permanent && (
                    <Button onClick={() => setIsOpen(true)}>
                        Open
                    </Button>
                )}
                <ChakraDrawer isOpen={isOpen} placement={placement} onClose={onClose} {...rest}>
                    <DrawerOverlay />
                    <DrawerContent ref={ref}>
                        <DrawerHeader>{title}</DrawerHeader>
                        <DrawerBody>
                            {children}
                        </DrawerBody>
                        <DrawerFooter>
                            <Button variant="outline" mr={3} onClick={onClose}>
                                Close
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </ChakraDrawer>
            </>
        )
    );
});

Drawer.displayName = 'Drawer';
Drawer.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    permanent: PropTypes.bool,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    hasHeader: PropTypes.bool,
    setIsOpen: PropTypes.func
};
Drawer.defaultProps = {
    placement: 'right',
    permanent: true,
    isOpen: false,
    hasHeader: false
};
export default Drawer;
