import { Input as ChakraInput } from "@chakra-ui/react"
import { forwardRef } from "react"

const Input = forwardRef((props, ref) => {
    return <ChakraInput ref={ref} {...props} />
})

Input.displayName = "Input"
export { Input }