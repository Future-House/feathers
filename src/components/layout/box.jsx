import { Box as ChakraBox } from "@chakra-ui/react"
import { forwardRef } from "react"

const Box = forwardRef((props, ref) => {
    return <ChakraBox ref={ref} {...props} />
})

Box.displayName = "Box"
export { Box }