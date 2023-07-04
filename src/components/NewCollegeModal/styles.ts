import * as LabelRadix from '@radix-ui/react-label';

import { styled } from "../../styles";

export const Container = styled('form', {
});

export const Label = styled(LabelRadix.Root, {
  fontWeight: 600,
  padding: '0 0 0.2rem',
});

export const Input = styled('input', {
  width: '100%',
  border: 0,
  borderRadius: "6px",
  color: '$gray700',
  padding: "1rem",

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