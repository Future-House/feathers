import { ColorSwatch as ChakraColorSwatch } from "@chakra-ui/react"
import { forwardRef } from "react"

const ColorSwatch = forwardRef((props, ref) => {
    return <ChakraColorSwatch ref={ref} {...props} />
})

ColorSwatch.displayName = "ColorSwatch"
export { ColorSwatch }