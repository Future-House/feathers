import { Editable as ChakraEditable } from "@chakra-ui/react"
import { forwardRef } from "react"

const Editable = forwardRef((props, ref) => {
    return <ChakraEditable ref={ref} {...props} />
})

Editable.displayName = "Editable"
export { Editable }