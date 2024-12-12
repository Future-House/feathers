import { Separator as ChakraSeparator } from "@chakra-ui/react"
import { forwardRef } from "react"

const Separator = forwardRef((props, ref) => {
    return <ChakraSeparator ref={ref} {...props} />
})

Separator.displayName = "Separator"
export { Separator }