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
        config: {
            initialColorMode: 'dark',
            useSystemColorMode: false,
        },
        global: (props) => ({
            'html': {
                fontSize: `${remBase}px`
            },
            'html, body': {
                fontFamily: "'Space Grotesk', sans-serif",
            },
            'caption': {
                fontFamily: "Space Mono, sans-serif"
            },
            'a': {
                fontFamily: "Space Mono, sans-serif",
                fontStyle: 'italic'
            },
            // 'body': {
            //     color: props.colorMode === 'dark' ? 'white' : 'black',
            //     bg: props.colorMode === 'dark' ? 'black' : 'white',
            // },
        }),
        fonts: {
            heading: "'Space Grotesk', sans-serif",
            body: "'Space Grotesk', sans-serif",
            caption: "Space Mono, sans-serif"
        }
    },
    components: {
        Link: {
            baseStyle: ({ theme }) => ({
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
        }
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