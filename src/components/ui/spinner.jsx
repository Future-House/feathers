import { Spinner as ChakraSpinner } from "@chakra-ui/react"
import { forwardRef } from "react"

const Spinner = forwardRef((props, ref) => {
    return <ChakraSpinner ref={ref} {...props} />
})

Spinner.displayName = "Spinner"
export { Spinner }