import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Mist from './Mist';
export default {
  title: 'Example/Mist',
  component: Mist,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Mist>;

const Template: ComponentStory<typeof Mist> = () => <Mist />;

export const Primary = Template.bind({});
