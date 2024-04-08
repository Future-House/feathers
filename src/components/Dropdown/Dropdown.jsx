import React, { forwardRef } from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    Box
} from '@chakra-ui/react';
import { ChevronDownIcon } from '../../icons';
import PropTypes from 'prop-types';
import Button from '../Button/Button.jsx';

/**
 * Dropdown component that renders a selectable menu using Chakra UI components.  Expects children of DropdownItem.
 * Allows passing additional props to the Box component.
 * @param {string} label - The selected item's label to be shown
 * @param {React.ReactNode} children - The passed in children components
 * @returns {React.ReactElement} - A React Element
 */
const Dropdown = forwardRef(({
    label,
    children,
    ...rest // only doing this for box, there might be use cases for MenuProps later, or to split DropDown and DropdownItem into separate components for flexibility
}, ref) => {


    return (
        <Box sx={{ margin: '1rem' }} {...rest} ref={ref}>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} sx={{ borderRadius: 0 }}>
                    {label}
                </MenuButton>
                {/* manually changing this one because other menu lists do not require sharp corners */}
                <MenuList sx={{ borderRadius: 0 }}>
                    {children}
                </MenuList>
            </Menu>
        </Box>
    );
});

Dropdown.displayName = 'Dropdown';
Dropdown.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};
export default Dropdown;