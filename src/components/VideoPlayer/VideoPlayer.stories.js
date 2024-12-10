import React from 'react';
import tcReceptor from '../../../mocks/tc-receptor.mp4';
import { FutureHouseApp, VideoPlayer } from '../index.js';

export default {
    title: 'Future House/VideoPlayer',
    component: VideoPlayer
};

const Template = (args) => {

    return (
        <FutureHouseApp>
            <VideoPlayer {...args} src={tcReceptor} />
        </FutureHouseApp>
    )
}

export const Default = Template.bind({});
