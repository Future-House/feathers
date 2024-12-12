import { Tabs as ChakraTabs } from "@chakra-ui/react"
import { forwardRef } from "react"

const Tabs = forwardRef((props, ref) => {
    return <ChakraTabs ref={ref} {...props} />
})

Tabs.displayName = "Tabs"
export { Tabs }