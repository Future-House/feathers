import { Show as ChakraShow } from "@chakra-ui/react"
import { forwardRef } from "react"

const Show = forwardRef((props, ref) => {
    return <ChakraShow ref={ref} {...props} />
})

Show.displayName = "Show"
export { Show }