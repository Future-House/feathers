import { Highlight as ChakraHighlight } from "@chakra-ui/react"
import { forwardRef } from "react"

const Highlight = forwardRef((props, ref) => {
    return <ChakraHighlight ref={ref} {...props} />
})

Highlight.displayName = "Highlight"
export { Highlight }