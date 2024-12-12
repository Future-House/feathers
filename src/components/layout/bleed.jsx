import { Bleed as ChakraBleed } from "@chakra-ui/react"
import { forwardRef } from "react"

const Bleed = forwardRef((props, ref) => {
    return <ChakraBleed ref={ref} {...props} />
})

Bleed.displayName = "Bleed"
export { Bleed }