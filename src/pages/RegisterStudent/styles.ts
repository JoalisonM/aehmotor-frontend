import * as Toast from "@radix-ui/react-toast";
import * as LabelRadix from '@radix-ui/react-label';

import { styled, keyframes } from "../../styles";

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

const VIEWPORT_PADDING = 25;

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
});

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
});

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
});

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: 15,
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: 15,
  alignItems: 'center',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
});

export const ToastTitle = styled(Toast.Title, {
  gridArea: 'title',
  marginBottom: 5,
  color: "$red500",
  fontSize: 15,
});