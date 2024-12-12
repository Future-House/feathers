import { SimpleGrid as ChakraSimpleGrid } from "@chakra-ui/react"
import { forwardRef } from "react"

const SimpleGrid = forwardRef((props, ref) => {
    return <ChakraSimpleGrid ref={ref} {...props} />
})

SimpleGrid.displayName = "SimpleGrid"
export { SimpleGrid }