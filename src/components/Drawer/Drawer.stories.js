import React, { useRef, useState } from 'react';
import {
    Typography,
    Drawer,
    FutureHouseApp,
    PERMANENT_DRAWER_WIDTH,
    Button,
    Box
} from '../index.js';

export default {
    title: 'Future House/Drawer',
    component: Drawer,
    argTypes: {}
};

const TemporaryTemplate = (args) => {
    const drawerRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <FutureHouseApp>
            {/* 1vw buffer for word breaks */}
            {!isOpen && (
                <Button onClick={() => setIsOpen(true)}>
                    open
                </Button>
            )}
            {isOpen && (
                <Button onClick={() => setIsOpen(false)}>
                    close
                </Button>
            )}
            <Box>
                <Typography typeWriter>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra cursus augue, nec porttitor urna luctus sit amet. Maecenas eget feugiat felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus dui nisi, auctor et ante sit amet, euismod commodo nibh. Nullam porttitor eu nisi id lacinia. In hac habitasse platea dictumst. Curabitur et est velit. Nunc pulvinar lacus ut lacinia cursus. Nullam fringilla nisi a elit aliquet, vitae aliquet mauris mollis. Fusce eget tempor eros. Nunc est neque, pretium ac mollis eu, vestibulum id nulla.
                    Vestibulum porta diam sed laoreet lobortis. Quisque fringilla magna neque, semper tristique nisi ultrices vel. Integer lobortis eros sit amet lectus mattis, at aliquet massa scelerisque. Integer eget eros quis justo convallis vestibulum in id ex. Morbi commodo lacus in ipsum consectetur faucibus ut suscipit purus. Sed pretium tellus et diam pellentesque rutrum. Integer sed metus a felis sagittis condimentum. Nulla elementum pulvinar velit, et molestie dui sollicitudin nec. Sed dictum dolor in ipsum porta, aliquam vestibulum felis luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae arcu commodo, varius nisl a, ullamcorper metus. Sed vitae commodo nunc. Nullam quis eros in mi luctus cursus sit amet at nunc. Vivamus sem mauris, elementum a massa vitae, efficitur dapibus nibh.
                </Typography>
                <Drawer onClose={() => setIsOpen(false)} isOpen={isOpen} setIsOpen={setIsOpen} {...args} permanent={false} ref={drawerRef} />
            </Box>
        </FutureHouseApp>
    );
};

export const TemporaryDrawer = TemporaryTemplate.bind({});
TemporaryDrawer.args = {
    title: 'some title',
    children: <Typography>This is a custom drawer built with Future House UI components.</Typography>,
};
TemporaryDrawer.parameters = {
    argTypes: {
        placement: {
            control: { type: 'select', options: ['top', 'right', 'bottom', 'left'] },
            defaultValue: 'right',
        },
    }
};

const FixedTemplate = (args) => {
    const drawerRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <FutureHouseApp>
            {/* 1vw buffer for word breaks */}
            <Box w={isOpen ? `calc(100vw - ${PERMANENT_DRAWER_WIDTH} - 1vw)` : '100vw'}>
                <Typography typeWriter>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra cursus augue, nec porttitor urna luctus sit amet. Maecenas eget feugiat felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus dui nisi, auctor et ante sit amet, euismod commodo nibh. Nullam porttitor eu nisi id lacinia. In hac habitasse platea dictumst. Curabitur et est velit. Nunc pulvinar lacus ut lacinia cursus. Nullam fringilla nisi a elit aliquet, vitae aliquet mauris mollis. Fusce eget tempor eros. Nunc est neque, pretium ac mollis eu, vestibulum id nulla.
                    Vestibulum porta diam sed laoreet lobortis. Quisque fringilla magna neque, semper tristique nisi ultrices vel. Integer lobortis eros sit amet lectus mattis, at aliquet massa scelerisque. Integer eget eros quis justo convallis vestibulum in id ex. Morbi commodo lacus in ipsum consectetur faucibus ut suscipit purus. Sed pretium tellus et diam pellentesque rutrum. Integer sed metus a felis sagittis condimentum. Nulla elementum pulvinar velit, et molestie dui sollicitudin nec. Sed dictum dolor in ipsum porta, aliquam vestibulum felis luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae arcu commodo, varius nisl a, ullamcorper metus. Sed vitae commodo nunc. Nullam quis eros in mi luctus cursus sit amet at nunc. Vivamus sem mauris, elementum a massa vitae, efficitur dapibus nibh.
                </Typography>
                <Drawer isOpen={isOpen} setIsOpen={setIsOpen} {...args} permanent ref={drawerRef} />
            </Box>
        </FutureHouseApp>
    );
};

export const FixedDrawer = FixedTemplate.bind({});
FixedDrawer.args = {
    children: <Typography>This drawer is always open, and cannot be closed. It cannot be repositioned.</Typography>
}
FixedDrawer.parameters = {
    controls: {
        disable: true
    }
};
