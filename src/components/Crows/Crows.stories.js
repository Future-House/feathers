import Crows from './Crows.jsx';
import { Box, FutureHouseApp } from '../index';

export default {
    title: 'Future House/Crows',
    component: Crows,
    argTypes: {
        automatic: { control: 'boolean' },
        renderNumber: { control: { type: 'number', min: 1, max: 10, step: 1 } },
    },
};

const Template = (args) => (
    <FutureHouseApp>
        <Box sx={{ position: 'relative', height: '70vh', width: '70vw' }}>
            <Crows {...args} />
        </Box>
    </FutureHouseApp>
);

export const Default = Template.bind({});
Default.args = {
    automatic: false,
    renderNumber: 1,
};