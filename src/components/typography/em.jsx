import { Em as ChakraEm } from "@chakra-ui/react"
import { forwardRef } from "react"

const Em = forwardRef((props, ref) => {
    return <ChakraEm ref={ref} {...props} />
})

Em.displayName = "Em"
export { Em }