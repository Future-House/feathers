import { 
    Stack as ChakraStack,
    HStack as ChakraHStack,
    VStack as ChakraVStack 
} from "@chakra-ui/react"
import { forwardRef } from "react"

const Stack = forwardRef((props, ref) => {
    return <ChakraStack ref={ref} {...props} />
})

Stack.displayName = "Stack"

const HStack = forwardRef((props, ref) => {
    return <ChakraHStack ref={ref} {...props} />
})

HStack.displayName = "HStack"

const VStack = forwardRef((props, ref) => {
    return <ChakraVStack ref={ref} {...props} />
})

VStack.displayName = "VStack"

export { Stack, HStack, VStack }