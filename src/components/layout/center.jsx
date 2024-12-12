import { forwardRef } from "react"
import {
    AbsoluteCenter as ChakraAbsoluteCenter,
    Center as ChakraCenter,
    Circle as ChakraCircle,
    Square as ChakraSquare
} from "@chakra-ui/react"

const AbsoluteCenter = forwardRef((props, ref) => (
    <ChakraAbsoluteCenter ref={ref} {...props} />
))
AbsoluteCenter.displayName = 'AbsoluteCenter'

const Center = forwardRef((props, ref) => (
    <ChakraCenter ref={ref} {...props} />
))
Center.displayName = 'Center'

const Circle = forwardRef((props, ref) => (
    <ChakraCircle ref={ref} {...props} />
))
Circle.displayName = 'Circle'

const Square = forwardRef((props, ref) => (
    <ChakraSquare ref={ref} {...props} />
))
Square.displayName = 'Square'

export { AbsoluteCenter, Center, Circle, Square }