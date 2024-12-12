import { Icon as ChakraIcon } from "@chakra-ui/react"
import { forwardRef } from "react"

const Icon = forwardRef((props, ref) => {
    return <ChakraIcon ref={ref} {...props} />
})

Icon.displayName = "Icon"
export { Icon }