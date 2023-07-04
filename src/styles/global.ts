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
  },

  '.react-modal-overlay': {
    background: 'rgba(0, 0, 0, 0.5)',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'fixed',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '.react-modal-content': {
    minWidth: "30rem",
    background: '$gray100',
    position: 'relative',
    padding: '2.5rem 3rem',
    borderRadius: '6px',
  },
});