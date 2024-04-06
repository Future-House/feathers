import React, { useState } from 'react';
import { FutureHouseApp, Button, Dropdown } from '../index';

export default {
    title: 'Future House/Dropdown',
    component: Dropdown,
    argTypes: {
        defaultLabel: 'Some defaultLabel'
    },
};

const Template = (args) => {
    const [selected, setSelected] = useState();

    const handleChange = (option) => {
        setSelected(option)
    }

    return (
        <FutureHouseApp>
            <Dropdown
                {...args}
                callback={handleChange}
                defaultLabel={selected?.label ?? args.defaultLabel}
            />
            <Button mg={4} onClick={() => setSelected()}>
                reset
            </Button>
        </FutureHouseApp>
    );
}

export const BasicDropdown = Template.bind({});
BasicDropdown.args = {
    options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
    ],
    defaultLabel: 'No Selected Value'
};
