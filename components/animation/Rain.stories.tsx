import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RainComp } from './Rain';
import { createTheme } from '@mui/material/styles';
const lightTheme = createTheme({
  palette: {
    primary: { main: '#121212' },
    secondary: { main: '#ffffff' },
    customRainColor: {
      main: 'rgb(0,0,0,0.25)',
    },
    mode: 'light',
  },
  typography: {
    fontFamily: 'Pretendard',
  },
});
export default {
  title: 'Example/RainComp',
  component: RainComp,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof RainComp>;
const Template: ComponentStory<typeof RainComp> = () => <RainComp theme={lightTheme} />;

export const Primary = Template.bind({});
