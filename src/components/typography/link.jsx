import {
    Link as ChakraLink,
    LinkOverlay as ChakraLinkOverlay,
    LinkBox as ChakraLinkBox,
} from "@chakra-ui/react"
import { forwardRef } from "react"

const Link = forwardRef((props, ref) => {
    return <ChakraLink ref={ref} {...props} />
});

Link.displayName = "Link";

const LinkOverlay = forwardRef((props, ref) => {
    return <ChakraLinkOverlay ref={ref} {...props} />
});

LinkOverlay.displayName = "LinkOverlay";

const LinkBox = forwardRef((props, ref) => {
    return <ChakraLinkBox ref={ref} {...props} />
});

LinkBox.displayName = "LinkBox";

export { Link, LinkOverlay, LinkBox };