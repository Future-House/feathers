import { Portal as ChakraPortal } from "@chakra-ui/react"
import { forwardRef } from "react"

const Portal = forwardRef((props, ref) => {
    return <ChakraPortal ref={ref} {...props} />
})

Portal.displayName = "Portal"
export { Portal }