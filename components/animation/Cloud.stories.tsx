import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Cloud from './Cloud';
export default {
  title: 'Example/Cloud',
  component: Cloud,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Cloud>;

const Template: ComponentStory<typeof Cloud> = () => <Cloud />;

export const Primary = Template.bind({});
