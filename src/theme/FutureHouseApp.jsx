import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import PropTypes from 'prop-types';
import { remBase, red, blue, gray, black, white } from "./tokens/designTokens";
import "../assets/index.css";

const defaultTheme = extendTheme({
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
                transition: 'all 0.5s ease'
            },
            'caption': {
                fontFamily: "Noto Sans, sans-serif"
            },
            'a': {
                fontFamily: "Noto Sans, sans-serif"
            },
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
                borderBottom: `solid 1px ${theme.colors.red[500]}`,
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
                    border: `solid 1px ${theme.colors.red[600]}`
                },
                _active: {
                    border: `solid 1px ${theme.colors.red[700]}`
                }
            })
        },
        Menu: {
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
 * @param {object} [props.theme] - Optional custom theme to override the default theme.
 * @returns {React.ReactElement} A theme wrapped component
 */
export default function FutureHouseApp({ children, theme = defaultTheme, ...props }) {
    const mergedTheme = theme === defaultTheme ? theme : extendTheme(defaultTheme, theme);

    return (
        <ChakraProvider theme={mergedTheme} {...props}>
            {children}
        </ChakraProvider>
    );
}

FutureHouseApp.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.object
};