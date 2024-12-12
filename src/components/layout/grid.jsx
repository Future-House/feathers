import {
    Grid as ChakraGrid,
    GridItem as ChakraGridItem
} from "@chakra-ui/react"
import { forwardRef } from "react"

const Grid = forwardRef((props, ref) => {
    return <ChakraGrid ref={ref} {...props} />
})

Grid.displayName = "Grid"

const GridItem = forwardRef((props, ref) => {
    return <ChakraGridItem ref={ref} {...props} />
})

GridItem.displayName = "GridItem"

export { Grid, GridItem }