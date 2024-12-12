import { FormatNumber as ChakraFormatNumber } from "@chakra-ui/react"
import { forwardRef } from "react"

const FormatNumber = forwardRef((props, ref) => {
    return <ChakraFormatNumber ref={ref} {...props} />
})

FormatNumber.displayName = "FormatNumber"
export { FormatNumber }