const colors = {};
const layout = {};

const spacing = {
  small: 8,
  medium: 16,
  large: 32
};

const screenSizes = {
  mobile: 600,
  ipad: 900,
  desktop: 1100
};

const fonts = {
  title: {
    family: '"Lato", sans-serif',
    weight: 700,
    size: 3
  },
  subtitle: {
    family: '"Lato", sans-serif',
    weight: 600,
    size: 2
  },
  body: {
    family: '"Lato", sans-serif',
    weight: 400,
    size: 1
  }
};

const theme = {
  spacing,
  colors,
  layout,
  fonts,
  screenSizes
};

type Theme = typeof theme;
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export default theme;
