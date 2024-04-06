import React, { useState } from 'react';
import tcReceptor from '../../../mocks/tc-receptor.mp4';
import { FutureHouseApp, Drawer, VideoPlayer } from '../index.js';

export default {
    title: 'Future House/VideoPlayer',
    component: VideoPlayer
};

const Template = (args) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <FutureHouseApp>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <VideoPlayer {...args} src={tcReceptor} />
            </Drawer>
        </FutureHouseApp>
    )
}

export const Default = Template.bind({});
