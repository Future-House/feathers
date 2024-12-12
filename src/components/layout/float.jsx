import { Float as ChakraFloat } from "@chakra-ui/react"
import { forwardRef } from "react"

const Float = forwardRef((props, ref) => {
    return <ChakraFloat ref={ref} {...props} />
})

Float.displayName = "Float"
export { Float }