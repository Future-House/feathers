import { List as ChakraList } from "@chakra-ui/react"
import { forwardRef } from "react"

const List = forwardRef((props, ref) => {
    return <ChakraList ref={ref} {...props} />
})

List.displayName = "List"
export { List }