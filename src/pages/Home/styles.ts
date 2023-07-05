import * as LabelRadix from '@radix-ui/react-label';

import { styled } from "../../styles";

export const HomeContainer = styled('main', {
  height: 'calc(100vh-5rem)',
  maxWidth: '70rem',
  margin: '0 auto',
  padding: '4rem 2rem',
  fontFamily: 'Roboto',

  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  justifyContent: 'space-between',

  h1: {
    color: '$blue900',
    fontSize: '$xxl',
    marginBottom: '2rem',
  },
});

export const CardContainer = styled('form', {
  maxWidth: '70rem',

  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '3rem',
});

export const Card = styled('div', {
  width: '20rem',
  padding: '1.5rem',
  borderRadius: 6,
  backgroundColor: '$gray200',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  h2: {
    fontSize: '$md',
    color: '$blue900',
  },

  div: {
    fontSize: '$sm',
    fontWeight: 700,
    color: '$blue400',
    marginBottom: '1rem',

    display: 'flex',
    justifyContent: 'space-between',
  },

  fieldset: {
    all: 'unset',
    border: 0,
    display: "flex",
    flexDirection: "column",

    '&+fieldset': {
      'marginTop': '1rem',
    },
  },
});

export const Label = styled(LabelRadix.Root, {
  fontWeight: 700,
  padding: '0 0 0.2rem',
});

export const Input = styled('input', {
  height: '40px',
  fontSize: '$sm',
  color: '$gray400',
  padding: '0.2rem 0.6rem',
  borderRadius: 8,
  border: '1px solid $gray300',

  '&::placeholder': {
    fontSize: '0.75rem',
    color: '$gray400',
  },
});

export const Button = styled('button', {
  border: 0,
  height: '2.5rem',
  borderRadius: 100,
  marginTop: '2rem',
  cursor: 'pointer',
  color: '$gray100',
  fontWeight: 700,

  variants: {
    variant: {
      default: {
        backgroundColor: '$red700',
        cursor: 'not-allowed',
      },
      blue: {
        background: '$blue500',
        transition: 'filter 0.2s',

        '&:hover': {
          filter: 'brightness(0.9)',
        },
      },
      red: {
        background: '$red500',
        transition: 'background 0.2s',

        '&:hover': {
          background: '$red700',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  }
});