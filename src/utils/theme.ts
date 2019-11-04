const spacing = {};
const colors = {};
const layout = {};
const fonts = {};

const theme = {
  spacing,
  colors,
  layout,
  fonts
};

type Theme = typeof theme;
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export default theme;
