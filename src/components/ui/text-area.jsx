import { Textarea as ChakraTextarea } from "@chakra-ui/react"
import { forwardRef } from "react"

const Textarea = forwardRef((props, ref) => {
    return <ChakraTextarea ref={ref} {...props} />
})

Textarea.displayName = "Textarea"
export { Textarea }