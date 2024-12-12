import { EnvironmentProvider as ChakraEnvironmentProvider } from "@chakra-ui/react"
import { forwardRef } from "react"

const EnvironmentProvider = forwardRef((props, ref) => {
    return <ChakraEnvironmentProvider ref={ref} {...props} />
})

EnvironmentProvider.displayName = "EnvironmentProvider"
export { EnvironmentProvider }