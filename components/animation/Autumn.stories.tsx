import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Autumn from './Autumn';
export default {
  title: 'Example/Autumn',
  component: Autumn,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Autumn>;

const Template: ComponentStory<typeof Autumn> = () => <Autumn />;

export const Primary = Template.bind({});
