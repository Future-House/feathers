import { Card as ChakraCard } from "@chakra-ui/react"
import { forwardRef } from "react"

const Card = forwardRef((props, ref) => {
    return <ChakraCard ref={ref} {...props} />
})

Card.displayName = "Card"
export { Card }