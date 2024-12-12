import { IconButton as ChakraIconButton } from "@chakra-ui/react"
import { forwardRef } from "react"

const IconButton = forwardRef((props, ref) => {
    return <ChakraIconButton ref={ref} {...props} />
})

IconButton.displayName = "IconButton"
export { IconButton }