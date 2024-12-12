import { Fieldset as ChakraFieldset } from "@chakra-ui/react"
import { forwardRef } from "react"

const Fieldset = forwardRef((props, ref) => {
    return <ChakraFieldset ref={ref} {...props} />
})

Fieldset.displayName = "Fieldset"
export { Fieldset }