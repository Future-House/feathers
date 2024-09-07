import React from 'react';
import Footer from "./Footer.jsx";
import FutureHouseApp from "../../theme/FutureHouseApp.jsx";

export default {
    title: 'Future House/Footer',
    component: Footer,
};

const Template = (args) => (
        <FutureHouseApp>
            <Footer {...args} />
        </FutureHouseApp>
);

export const Default = Template.bind({});
Default.args = {
    links: [
        {
            title: 'Custom',
            links: [
                { label: 'CustomLink 1', href: '#' },
                { label: 'CustomAction 1', onClick: () => console.log('CustomAction 1') },
            ],
        },
    ]
};