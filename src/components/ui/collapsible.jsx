import { Collapsible as ChakraCollapsible } from "@chakra-ui/react"
import { forwardRef } from "react"

const Collapsible = forwardRef((props, ref) => {
    return <ChakraCollapsible ref={ref} {...props} />
})

Collapsible.displayName = "Collapsible"
export { Collapsible }