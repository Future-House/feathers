import { Mark as ChakraMark } from "@chakra-ui/react"
import { forwardRef } from "react"

const Mark = forwardRef((props, ref) => {
    return <ChakraMark ref={ref} {...props} />
})

Mark.displayName = "Mark"
export { Mark }