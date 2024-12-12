import { Group as ChakraGroup } from "@chakra-ui/react"
import { forwardRef } from "react"

const Group = forwardRef((props, ref) => {
    return <ChakraGroup ref={ref} {...props} />
})

Group.displayName = "Group"
export { Group }