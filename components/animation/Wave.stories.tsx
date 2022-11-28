import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Wave from './Wave';
export default {
  title: 'Example/Wave',
  component: Wave,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Wave>;

const Template: ComponentStory<typeof Wave> = () => <Wave />;

export const Primary = Template.bind({});
