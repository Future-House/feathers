import React, { forwardRef } from 'react';
import { MenuItem } from '@chakra-ui/react';
import PropTypes from 'prop-types';


const DropdownItem = forwardRef(({
    children,
    ...rest
}, ref) => {

    return (
        <MenuItem {...rest} ref={ref}>
            {children}
        </MenuItem>
    )
});

DropdownItem.displayName = 'DropdownItem';
DropdownItem.propTypes = {
    children: PropTypes.node
};

export default DropdownItem;