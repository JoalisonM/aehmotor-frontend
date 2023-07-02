import * as LabelRadix from '@radix-ui/react-label';

import { styled } from "../../styles";

export const RegisterContainer = styled('div', {
  width: '100%',
  minHeight: '100vh',
  backgroundColor: '$blue300',

  display: 'flex',
  justifyContent: 'flex-end',
});

export const RegisterContent = styled('div', {
  backgroundColor: '$gray100',
  borderRadius: '100px 0 0 100px',
  maxWidth: '56.25rem',

  display: 'flex',
  alignItems: 'center',
  gap: '5rem',

  img: {
    marginLeft: '-300px',
  },

  '@media(min-width: 1600px)': {
    minWidth: '75rem',
  }
});

export const FormContainer = styled('form', {
  width: '900px',
  padding: '4rem',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  'input + span': {
    marginBottom: '1rem',
  },

  button: {
    marginBottom: '2rem'
  },

  small: {
    color: '$gray500',

    a: {
      color: '$blue500',
      marginLeft: '0.3rem',
    },
  },

  '@media (min-width: 1600px)': {
    width: '40rem',
  }
});

export const FormHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',

  h2: {
    lineHeight: 1,
    marginBottom: '1.5rem',
  },

  h1: {
    fontWeight: 600,
    lineHeight: 1,
    marginBottom: '1.5rem',
    color: '$blue400',
  },
});

export const Label = styled(LabelRadix.Root, {
  fontWeight: 600,
  padding: '0 0 0.2rem',
});

export const Input = styled('input', {
  border: 0,
  borderRadius: '14px',
  height: '50px',
  fontSize: '$sm',
  color: '$gray400',
  padding: '0.6rem',

  '&::placeholder': {
    fontSize: '0.75rem',
    color: '$gray400',
  },
});

export const Button = styled('button', {
  height: '50px',
  border: 0,
  cursor: 'pointer',
  fontWeight: 700,
  borderRadius: '0.75rem',
  color: '$gray100',
  marginTop: '2rem',
  backgroundColor: '$blue500',

  '&:disabled': {
    opacity: '0.6',
    cursor: 'not-allowed',
  },
});

export const Fieldset = styled("fieldset", {
  border: 0,
  display: "flex",
  flexDirection: "column",

  '&+fieldset': {
    'marginTop': '1rem',
  },

  variants: {
    cols: {
      true: {
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns: '1fr 1fr',

        div: {
          display: 'flex',
          flexDirection: 'column',
        },
      },
    },
  },
});

export const MessageError = styled('span', {
  color: '$red300',
  fontSize: '0.75rem',
});