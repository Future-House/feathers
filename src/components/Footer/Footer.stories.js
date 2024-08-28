import React from 'react';
import Footer from "./Footer.jsx";
import FutureHouseApp from "../../theme/FutureHouseApp.jsx";

export default {
    title: 'Future House/Footer',
    component: Footer,
    argTypes: {
        enableScrollToTop: { control: 'boolean' },
        showCareerOpportunities: { control: 'boolean' },
    },
};

const Template = (args) => (
    <FutureHouseApp>
        <Footer {...args} />
    </FutureHouseApp>
);

export const Default = Template.bind({});
Default.args = {
    enableScrollToTop: true,
    showCareerOpportunities: true,
};