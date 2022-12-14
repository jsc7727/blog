// import { withMuiTheme } from './with-mui-theme.decorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#000000',
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// export const globalTypes = {
//   theme: {
//     name: 'Theme',
//     title: 'Theme',
//     description: 'Theme for your components',
//     defaultValue: 'light',
//     toolbar: {
//       icon: 'paintbrush',
//       dynamicTitle: true,
//       items: [
//         { value: 'light', left: '☀️', title: 'Light mode' },
//         { value: 'dark', left: '🌙', title: 'Dark mode' },
//       ],
//     },
//   },
// };

// export const decorators = [withMuiTheme];
