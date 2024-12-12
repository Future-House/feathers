import { Provider } from "../ui/provider";
import { system } from "./theme";
import { ColorModeProvider } from "@/components/ui/color-mode";
import PropTypes from 'prop-types';
import "@/assets/index.css";

function FutureHouseApp({ children }) {
    return (
        <Provider value={system}>
            <ColorModeProvider defaultTheme="dark">
                {children}
            </ColorModeProvider>
        </Provider>
    );
}

FutureHouseApp.propTypes = {
    children: PropTypes.node.isRequired
};

export { FutureHouseApp }