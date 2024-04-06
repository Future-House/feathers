import React from 'react';
import {
    Button,
    FutureHouseApp
} from '../index.js'

export default {
    title: 'Future House/Button',
    component: Button,
    argTypes: {
        variant: {
            control: 'radio',
            options: ['actionable', null],
            description: 'Changes the button variant',
        },
        action: {
            control: 'radio',
            options: ['internal', 'external'],
            description: 'Sets the button action type',
        },
        children: {
            control: 'text',
            description: 'Button label',
        },
    }
};

const Template = (args) =>
    <FutureHouseApp>
        <Button {...args} />
    </FutureHouseApp>;

export const ButtonVariants = Template.bind({});
ButtonVariants.args = {
    children: 'External Action',
    variant: 'actionable',
    action: 'external',
};