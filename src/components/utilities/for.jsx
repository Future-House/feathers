import { For as ChakraFor } from "@chakra-ui/react"
import { forwardRef } from "react"

const For = forwardRef((props, ref) => {
    return <ChakraFor ref={ref} {...props} />
})

For.displayName = "For"
export { For }