import React, { useState } from 'react';
import { FutureHouseApp, Button, Dropdown, DropdownItem } from '../index';

export default {
    title: 'Future House/Dropdown',
    component: Dropdown
};

const Template = (args) => {
    const [selected, setSelected] = useState(args.label);

    const handleChange = (option) => {
        setSelected(option)
    }

    return (
        <FutureHouseApp>
            <Dropdown label={selected}>
                {args.options.map((item, index) => (
                    <DropdownItem key={`${item}-${index}`} onClick={() => handleChange(item)}>
                        {item}
                    </DropdownItem>
                ))}
            </Dropdown>
            <Button mg={4} onClick={() => setSelected()}>
                reset
            </Button>
        </FutureHouseApp>
    );
}

export const BasicDropdown = Template.bind({});
BasicDropdown.args = {
    options: [
        'Option 1',
        'Option 2',
        'Option 3'
    ],
    label: 'No Selected Value'
};
