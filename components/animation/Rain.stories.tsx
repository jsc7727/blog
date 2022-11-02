import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RainComp } from './Rain';
export default {
  title: 'Example/RainComp',
  component: RainComp,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof RainComp>;

const Template: ComponentStory<typeof RainComp> = () => <RainComp />;

export const Primary = Template.bind({});
