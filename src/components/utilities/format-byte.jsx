import { FormatByte as ChakraFormatByte } from "@chakra-ui/react"
import { forwardRef } from "react"

const FormatByte = forwardRef((props, ref) => {
    return <ChakraFormatByte ref={ref} {...props} />
})

FormatByte.displayName = "FormatByte"
export { FormatByte }