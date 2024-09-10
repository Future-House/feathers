import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import PropTypes from 'prop-types';
import { remBase, red, blue, gray, black, white } from "./tokens/designTokens";
import "../assets/index.css";

const theme = extendTheme({
    colors: {
        white,
        black,
        gray,
        red,
        blue
    },
    styles: {
        global: (props) => ({
            'html': {
                fontSize: `${remBase}px`
            },
            'html, body': {
                fontFamily: "Noto Sans, sans-serif",
            },
            'caption': {
                fontFamily: "Noto Sans, sans-serif"
            },
            'a': {
                fontFamily: "Noto Sans, sans-serif"
            },
            // 'body': {
            //     color: props.colorMode === 'dark' ? 'white' : 'black',
            //     bg: props.colorMode === 'dark' ? 'black' : 'white',
            // },
        }),
        fonts: {
            heading: "Noto Sans, sans-serif",
            body: "Noto Sans, sans-serif",
            caption: "Space Mono, sans-serif"
        }
    },
    components: {
        Link: {
            baseStyle: ({ theme }) => ({
                // this color is what the figma wanted, however, I opted to not do this.
                // color: props.colorMode === 'dark' ? props.theme.colors.white : props.theme.colors.black,
                borderBottom: `solid 1px ${theme.colors.red.base}`,
                _hover: {
                    textDecoration: 'none'
                },
                _focus: {
                    boxShadow: 'none',
                },
            })
        },
        Button: {
            baseStyle: ({ colorMode, theme }) => ({
                borderRadius: 0,
                border: colorMode === 'dark' ? `solid 1px ${theme.colors.gray[700]}` : `solid 1px ${theme.colors.gray[200]}`,
                bg: colorMode === 'dark' ? 'gray.800' : 'white',
                color: colorMode === 'dark' ? 'white' : 'black',
                _hover: {
                    border: `solid 1px ${theme.colors.red.hover}`
                },
                _active: {
                    border: `solid 1px ${theme.colors.red.active}`
                }
            })
        },
        Menu: {
            // this is difference than the base theme extensions:
            // https://github.com/chakra-ui/chakra-ui/discussions/5326
            baseStyle: ({ theme }) => ({
                list: {
                    _dark: {
                        '--menu-bg': theme.colors.gray[800],
                    },
                    _light: {
                        '--menu-bg': theme.colors.white
                    }
                },
                item: {
                    _light: {
                        '--menu-bg': theme.colors.white,
                        color: 'black',
                        _hover: {
                            '--menu-bg': theme.colors.gray[200]
                        },
                        _focus: {
                            '--menu-bg': theme.colors.gray[200]
                        }
                    },
                    _dark: {
                        '--menu-bg': theme.colors.gray[800],
                        color: 'white',
                        _hover: {
                            '--menu-bg': theme.colors.gray[700]
                        },
                        _focus: {
                            '--menu-bg': theme.colors.gray[700]
                        }
                    }
                },
            }),
        },
    },
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    }
});

/**
 * Provides a Chakra UI theme context for its children, applying a custom theme.
 * @param {object} props - The props object.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the theme provider.
 * @returns {React.ReactElement} A theme wrapped component
 */
export default function FutureHouseApp({ children }) {
    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    );
}

FutureHouseApp.propTypes = {
    children: PropTypes.node.isRequired
};