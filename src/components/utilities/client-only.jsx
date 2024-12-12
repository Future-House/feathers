import { ClientOnly as ChakraClientOnly } from "@chakra-ui/react"
import { forwardRef } from "react"

const ClientOnly = forwardRef((props, ref) => {
    return <ChakraClientOnly ref={ref} {...props} />
})

ClientOnly.displayName = "ClientOnly"
export { ClientOnly }