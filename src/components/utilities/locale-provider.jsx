import {
    LocaleProvider as ChakraLocaleProvider,
    useLocaleContext,
} from "@chakra-ui/react"
import { forwardRef } from "react"

const LocaleProvider = forwardRef((props, ref) => {
    return <ChakraLocaleProvider ref={ref} {...props} />
})

LocaleProvider.displayName = "LocaleProvider"


export { LocaleProvider, useLocaleContext }