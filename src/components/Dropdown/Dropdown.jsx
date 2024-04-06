import React, { forwardRef, useState } from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Box
} from '@chakra-ui/react';
import { ChevronDownIcon } from '../../icons';
import PropTypes from 'prop-types';
import Button from '../Button/Button.jsx';

/**
 * Dropdown component that renders a selectable menu using Chakra UI components. 
 * Allows passing additional props to the Box component.
 * @param {object[]} options - Array of option objects for the dropdown.
 * @param {Function} callback - Function to be called when an option is selected.
 * @param {string} [defaultLabel] - The label of the default selected option. If not provided, defaults to the label of the first option.
 * @returns {React.ReactElement} - A React Element
 */
const Dropdown = forwardRef(({
    options,
    callback,
    defaultLabel,
    ...rest // only doing this for box, there might be use cases for MenuProps later, or to split DropDown and DropdownItem into separate components for flexibility
}, ref) => {

    const [internalLabel, setInternalLabel] = useState(options[0].label);

    const hanldeInternalChange = (option) => {
        setInternalLabel(option.label);
    }

    if (!defaultLabel) {
        defaultLabel = internalLabel;
    }

    if (!callback) {
        callback = hanldeInternalChange;
    }

    return (
        <Box sx={{ margin: '1rem' }} {...rest} ref={ref}>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} sx={{ borderRadius: 0 }}>
                    {defaultLabel}
                </MenuButton>
                {/* manually changing this one because other menu lists do not require sharp corners */}
                <MenuList sx={{ borderRadius: 0 }}>
                    {options.map((option, index) => (
                        <MenuItem key={`${option.value}-${index}`} onClick={() => callback(option)}>
                            {option.label}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </Box>
    );
});

Dropdown.displayName = 'Dropdown';
Dropdown.propTypes = {
    options: PropTypes.array.isRequired,
    callback: PropTypes.func.isRequired,
    defaultLabel: PropTypes.string
};
export default Dropdown;