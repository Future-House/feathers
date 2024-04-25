// src/stories/Terminal.stories.js

import React from 'react';
import Terminal from './Terminal.jsx';
import { FutureHouseApp, Box } from '../index';

export default {
    title: 'Future House/Terminal (beta)',
    component: Terminal,
    decorators: [
        (Story) => (
            <FutureHouseApp>
                <Box maxW="container.md" p={5}>
                    <Story />
                </Box>
            </FutureHouseApp>
        )
    ]
};

const Template = (args) => <Terminal {...args} />;

export const Default = Template.bind({});
Default.args = {};