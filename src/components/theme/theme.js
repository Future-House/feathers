import { createSystem, defaultConfig, defineConfig, mergeConfigs } from "@chakra-ui/react";

const customTheme = defineConfig({
    theme: {
        tokens: {
            fonts: {
                heading: { value: "Noto Sans, sans-serif" },
                body: { value: "Noto Sans, sans-serif" },
                caption: { value: "Space Mono, sans-serif" }
            },
            colors: {
                background: {
                    dark: { value: "#27272a" }
                }
            }
        },
        styles: {
            global: {
                body: {
                    _dark: {
                        bg: '{colors.background.dark}'
                    }
                }
            }
        }
    },
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    }
});

const config = mergeConfigs(defaultConfig, customTheme);
export const system = createSystem(config);