import React from 'react';
import { Link, FutureHouseApp } from '../index.js';

export default {
    title: 'Future House/Link',
    component: Link,
};

const Template = (args) =>
    <FutureHouseApp>
        <Link {...args} />
    </FutureHouseApp>;

export const LinkDemo = Template.bind({});
LinkDemo.args = {
    href: 'https://reactjs.org/',
    children: 'React',
    isExternal: true,
};
