import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Time from './Time';
/** @jsxImportSource @emotion/react */

export default {
  title: 'Example/Time',
  component: Time,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Time>;

const Template: ComponentStory<typeof Time> = (args) => <Time {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  date: '2022-03-33',
  readTime: '3',
};
