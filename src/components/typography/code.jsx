import { Code as ChakraCode } from "@chakra-ui/react"
import { forwardRef } from "react"

const Code = forwardRef((props, ref) => {
    return <ChakraCode ref={ref} {...props} />
})

Code.displayName = "Code"
export { Code }