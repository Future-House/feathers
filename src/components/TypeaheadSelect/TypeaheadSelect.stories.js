import React from 'react';
import Typeahead from './TypeaheadSelect.jsx';
import { FutureHouseApp } from '../index';

const FHWrapper = (storyFn) => (
    <FutureHouseApp>{storyFn()}</FutureHouseApp>
);

export default {
    title: 'Future House/Typeahead',
    component: Typeahead,
    decorators: [FHWrapper],
};

const Template = (args) => <Typeahead {...args} />;

export const Default = Template.bind({});
Default.args = {
    options: ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape'],
    placeholder: 'Type here...',
    onSelect: (selectedOption) => console.log('Selected:', selectedOption),
};

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
    options: ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape'],
    placeholder: 'Search fruits...',
    onSelect: (selectedOption) => console.log('Selected:', selectedOption),
};

export const NoOptions = Template.bind({});
NoOptions.args = {
    options: [],
    placeholder: 'Type here...',
    onSelect: (selectedOption) => console.log('Selected:', selectedOption),
};

export const ManyOpts = Template.bind({});
ManyOpts.args = {
    options: ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape', 'Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape', 'Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape', 'Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape', 'Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape', 'Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape', 'Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape', 'Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape', 'Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape'],
    placeholder: 'Type here...',
    onSelect: (selectedOption) => console.log('Selected:', selectedOption),
};

export const IndexDefault = Template.bind({});
IndexDefault.args = {
    options: ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape'],
    placeholder: 'Type here...',
    onSelect: (selectedOption) => console.log('Selected:', selectedOption),
    defaultIndex: 2
};
