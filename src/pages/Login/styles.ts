import * as Toast from "@radix-ui/react-toast";
import * as LabelRadix from '@radix-ui/react-label';

import { styled, keyframes } from "../../styles";

export const LoginContainer = styled('main', {
  maxWidth: '70rem',
  height: '100vh',
  margin: '0 auto',
  padding: '0 2rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const LoginContent = styled('div', {
  width: '100%',
  display: 'grid',
  gap: '6rem',
  gridTemplateColumns: '1fr 24rem',
  justifyContent: 'space-between',

  button: {
    marginBottom: '2.5rem',
  },

  small: {
    color: '$gray500',

    a: {
      color: '$blue500',
      marginLeft: '0.3rem',
    },
  },

  '@sm': {

  },
});

export const SectionContent = styled('section', {
  h1: {
    fontSize: '$xxl',
    color: '$blue400',

    display: 'flex',
    flexDirection: 'column',
  },

  p: {
    color: '$blue100',
    marginTop: '0.75rem',
    fontWeight: 600,

    span: {
      color: '$blue500',
      fontWeight: 700,
    }
  },

  '@sm': {
    display: 'none',
  },
});

export const ImgContent = styled('div', {
  width: '100%',
  marginTop: '3.5rem',

  display: 'flex',
  justifyContent: 'center',
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
  color: '$gray600',
  padding: '0.6rem',
  backgroundColor: '$gray200',

  '&::placeholder': {
    fontSize: '0.75rem',
    color: '$gray400',
  },
});

export const Fieldset = styled("fieldset", {
  border: 0,
  display: 'flex',
  flexDirection: 'column',

  '&+fieldset': {
    'marginTop': '1rem',
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