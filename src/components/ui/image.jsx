import { Image as ChakraImage } from "@chakra-ui/react"
import { forwardRef } from "react"

const Image = forwardRef((props, ref) => {
    return <ChakraImage ref={ref} {...props} />
})

Image.displayName = "Image"
export { Image }