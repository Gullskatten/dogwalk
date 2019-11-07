const colors = {
  primary: '#05d8a7',
  secondary: '#1e3f5a',
  text: '#333'
};

const layout = {
  sidebarWidth: 230
};

const transitions = {
  fast: '0.15s ease-in-out'
};

const spacing = {
  xsmall: 0.25,
  small: 0.5,
  medium: 1,
  large: 2,
  xlarge: 2.5
};

const screenSizes = {
  mobile: 600,
  ipad: 900,
  desktop: 1100
};

const fonts = {
  branding: {
    family: '"Bree Serif", serif',
    weight: 700,
    size: 3
  },
  title: {
    family: '"Open sans", sans-serif',
    weight: 700,
    size: 2
  },
  subtitle: {
    family: '"Open sans", sans-serif',
    weight: 600,
    size: 1.65
  },
  body: {
    family: '"Open sans", sans-serif',
    weight: 400,
    size: 1
  },
  button: {
    family: '"Open sans", sans-serif',
    weight: 600,
    size: 1
  }
};

const theme = {
  spacing,
  colors,
  layout,
  fonts,
  screenSizes,
  transitions
};

type Theme = typeof theme;
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export default theme;
