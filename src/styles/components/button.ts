import { styled } from "..";

export const Button = styled('button', {
  height: '50px',
  width: '100%',
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
  }
});