import { styled } from "../../styles";

export const LandingContainer = styled('main', {
  width: '100vw',
  height: 'calc(100vh - 5rem)',
});

export const LandingContent = styled('div', {
  maxWidth: '70rem',
  margin: '0 auto',
  padding: '0 2rem',
  height: 'calc(100vh - 5rem)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1rem',

  h1: {
    fontSize: '$xxl',
    display: 'flex',
    flexDirection: 'column',
  },

  p: {
    marginTop: '0.75rem',
    fontWeight: 500,
    color: '$blue100'
  },

  button: {
    marginTop: '2.5rem',
    borderRadius: 999,
    padding: '1rem',
    color: '$blue500',
    fontWeight: 600,
    fontSize: '1rem',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: '3px solid $blue500',
    transition: 'color 0.2s, background-color 0.2s',

    '&:hover': {
      color: '$gray100',
      backgroundColor: '$blue500',
    },

    '@md': {
      padding: '0.7rem',
    },
  },

  img: {
    opacity: 1,
    width: '600px',
    height: '400px',
  },

  '@lg': {
    img: {
      width: '500px',
      height: '333.33px',
    },
  },

  '@md': {
    h1: {
      fontSize: '$xl',
    },

    p: {
      fontSize: '$sm',
    },

    img: {
      width: '400px',
      height: '266.67px',
    },
  },

  '@sm': {
    img: {
      opacity: 0,
    }
  },
});