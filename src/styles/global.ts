import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  ':focus': {
    outline: 0,
    boxShadow: '$shadowFocus',
  },

  '@lg': {
    html: {
      fontSize: '93.75%',
    },
  },
  '@md': {
    html: {
      fontSize: '$sm',
    },
  },

  body: {
    backgroundColor: '$gray100',
    color: '$blue900',
    fontSize: '1rem',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Poppins',
    fontWeight: 400,
  },

  a: {
    textDecoration: 'none',
  }
});