import React from 'react';
import Footer from "./Footer.jsx";
import FutureHouseApp from "../../theme/FutureHouseApp.jsx";
import Typography from '../Typography/Typography.jsx';

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
    ],
    disclaimers: [
        <Typography as="p" variant="label1" sx={{ color: '#f2f2f2', marginLeft: '1rem' }} key="disclaimer-1">
            You can share answers via a URL, but your name/email is never visible. We store questions according to our privacy policy.
        </Typography>,
        <Typography as="p" variant="label1" sx={{ color: '#f2f2f2', marginLeft: '1rem' }} key="disclaimer-2">
            Information may be wrong, verify before use.
        </Typography>
    ]
};