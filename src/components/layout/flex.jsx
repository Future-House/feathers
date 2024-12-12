import { Flex as ChakraFlex } from "@chakra-ui/react"
import { forwardRef } from "react"

const Flex = forwardRef((props, ref) => {
    return <ChakraFlex ref={ref} {...props} />
})

Flex.displayName = "Flex"
export { Flex }