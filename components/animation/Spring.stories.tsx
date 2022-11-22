import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Snow from './Snow';
export default {
  title: 'Example/Snow',
  component: Snow,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Snow>;

const Template: ComponentStory<typeof Snow> = () => <Snow />;

export const Primary = Template.bind({});
