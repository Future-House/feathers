import { Container as ChakraContainer } from "@chakra-ui/react"
import { forwardRef } from "react"

const Container = forwardRef((props, ref) => {
    return <ChakraContainer ref={ref} {...props} />
})

Container.displayName = "Container"
export { Container }