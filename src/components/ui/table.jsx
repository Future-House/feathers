import { Table as ChakraTable } from "@chakra-ui/react"
import { forwardRef } from "react"

const Table = forwardRef((props, ref) => {
    return <ChakraTable ref={ref} {...props} />
})

Table.displayName = "Table"
export { Table }