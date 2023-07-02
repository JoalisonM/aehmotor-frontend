import { createStitches } from "@stitches/react";

export const {
  css,
  theme,
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#FFF',

      gray100: '#EFF1F3',
      gray200: '#FEFEFE',
      gray300: '#C4C4CC',
      gray400: '#8D8D99',
      gray500: '#7C7C8A',
      gray600: '#323238',
      gray700: '#29292E',
      gray800: '#282824',
      gray900: '#121214',

      blue100: '#A1B7D0',
      blue300: '#596DB9',
      blue400: '#698DF6',
      blue500: '#3F61F1',
      blue900: '#0D1E31',

      red300: '#F75A68',
      red500: '#AB222E',
      red700: '#7A1921',
    },

    fontSizes: {
      sm: '0.875rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      xxl: '2rem',
    },

    shadows: {
      shadowFocus: '0 0 0 2px #596DB9',
    },
  },

  media: {
    sm: '(man-width: 480px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 1024px)',
  }
});