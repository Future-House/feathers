import { Kbd as ChakraKbd } from "@chakra-ui/react"
import { forwardRef } from "react"

const Kbd = forwardRef((props, ref) => {
    return <ChakraKbd ref={ref} {...props} />
})

Kbd.displayName = "Kbd"
export { Kbd }