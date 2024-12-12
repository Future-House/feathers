import { AspectRatio as ChakraAspectRatio } from "@chakra-ui/react"
import { forwardRef } from "react"

const AspectRatio = forwardRef((props, ref) => {
    return <ChakraAspectRatio ref={ref} {...props} />
})

AspectRatio.displayName = "AspectRatio"
export { AspectRatio }