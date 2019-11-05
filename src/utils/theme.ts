const colors = {
  primary: '#05d8a7',
  secondary: '#1e3f5a',
  text: '#222'
};

const layout = {};

const transitions = {
  fast: '0.15s ease-in-out'
};

const spacing = {
  xsmall: 4,
  small: 8,
  medium: 16,
  large: 32,
  xlarge: 42
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
    size: 3
  },
  subtitle: {
    family: '"Open sans", sans-serif',
    weight: 600,
    size: 2
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
