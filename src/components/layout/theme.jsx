import { Theme as ChakraTheme } from "@chakra-ui/react"
import { forwardRef } from "react"

const Theme = forwardRef((props, ref) => {
    return <ChakraTheme ref={ref} {...props} />
})

Theme.displayName = "Theme"
export { Theme }