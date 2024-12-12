import { VisuallyHidden as ChakraVisuallyHidden } from "@chakra-ui/react"
import { forwardRef } from "react"

const VisuallyHidden = forwardRef((props, ref) => {
    return <ChakraVisuallyHidden ref={ref} {...props} />
})

VisuallyHidden.displayName = "VisuallyHidden"
export { VisuallyHidden }