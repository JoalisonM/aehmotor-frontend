import { styled } from "../../styles";

export const HeaderContainer = styled('header', {
  height: '5rem',
});

export const HeaderContent = styled('div', {
  maxWidth: '70rem',
  height: '5rem',
  margin: '0 auto',
  padding: '0 2rem',
  // fontWeight: 500,

  display: 'flex',
  alignItems: 'center',

  nav: {
    display: 'flex',
    gap: '2rem',

    height: '5rem',
    marginLeft: '5rem',

    a: {
      padding: '0 0.5rem',
      height: '5rem',
      lineHeight: '5rem',
      color: '$blue900',

      transition: 'color 0.2s',

      '&:hover': {
        color: '$blue500',
      },

      '&.active': {
        color: '$blue500',
        fontWeight: 700,
      },
    },
  },

  span: {
    marginLeft: 'auto',
    display: 'flex',
    gap: '0.5rem',
  },
});

export const Button = styled("button", {
  height: '2.5rem',
  borderRadius: '20px',
  fontWeight: '600',
  padding: '0 2rem',
  border: 0,
  cursor: 'pointer',
  color: '$gray100',
  backgroundColor: '$blue500',
  transition: 'filter 0.2s',

  '&:hover': {
    filter: 'brightness(0.9)',
  },

  variants: {
    outlined: {
      true: {
        color: '$blue400',
        padding: '0 1rem',
        backgroundColor: 'transparent',
        border: '2px solid $blue400',
        transition: 'color 0.2s, background-color 0.2s',

        '&:hover': {
          color: '$gray100',
          backgroundColor: '$blue400',
        },
      },
    },
  },
});