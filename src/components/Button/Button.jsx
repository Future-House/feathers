import React, { forwardRef } from "react";
import PropTypes from 'prop-types';
import { Button as ChakraButton } from "@chakra-ui/react";
import { ArrowForwardIcon } from '../../icons';

const Button = forwardRef(({ children, action, ...rest }, ref) => {
    let supportingIcon;
    if (action === 'internal') {
        supportingIcon = <ArrowForwardIcon />;
    } else if (action === 'external') {
        supportingIcon = <ArrowForwardIcon style={{ transform: "rotate(-45deg)" }} />;
    }

    return (
        <ChakraButton ref={ref} {...rest}>
            {children}
            {supportingIcon}
        </ChakraButton>
    );
});

Button.displayName = 'Button';
Button.propTypes = {
    children: PropTypes.node.isRequired,
    action: PropTypes.string,
};

export default Button;