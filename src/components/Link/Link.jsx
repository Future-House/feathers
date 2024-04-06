import React, { forwardRef } from 'react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { ArrowForwardIcon } from '../../icons';
import PropTypes from 'prop-types';
import { spacingXxs } from '../../theme/tokens/designTokens';

const Link = forwardRef(({ href, children, includeSupportingIcon, ...rest }, ref) => {
    return (
        <ChakraLink href={href} {...rest} ref={ref}>
            {children}
            {includeSupportingIcon && (
                <ArrowForwardIcon style={{ transform: "rotate(-45deg)" }} sx={{ marginLeft: spacingXxs}} />
            )}
        </ChakraLink>
    );
});

Link.displayName = 'Link';
Link.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    includeSupportingIcon: PropTypes.bool
};
export default Link;