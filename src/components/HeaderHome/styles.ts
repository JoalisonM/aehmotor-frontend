import { styled } from "../../styles";
import * as Menubar from '@radix-ui/react-menubar';

export const HeaderContainer = styled('header', {
  height: '5rem',
  background: '$blue300',
  fontFamily: 'Roboto',
});

export const HeaderContent = styled('div', {
  maxWidth: '70rem',
  height: '5rem',
  margin: '0 auto',
  padding: '0 2rem',

  display: 'flex',
  alignItems: 'center',
});

export const HeaderMenu = styled('div', {
  display: 'flex',
  marginLeft: 'auto',
  alignItems: 'center',
  gap: '1rem',
});

export const Title = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',

  span: {
    color: '$gray100',
    fontSize: '$sm',
    fontWeight: 700,
  },
  small: {
    fontSize: '0.75rem',
    fontWeight: 500,
    color: '$gray300',
  },
});

export const MenubarTrigger = styled(Menubar.Trigger, {
  all: 'unset',
  background: 'transparent',
  border: 0,
  cursor: 'pointer',
  outline: 'none',
  userSelect: 'none',

  gap: '0.5rem',
  display: 'flex',
  alignItems: 'center',

  svg: {
    color: '$gray100',
  },
});

export const MenubarContent = styled(Menubar.Content, {
  background: '$blue300',
  padding: '0.6rem 1rem',
  borderRadius: '6px',
});

export const MenubarItem = styled(Menubar.Item, {
  all: 'unset',
  fontSize: '$sm',
  lineHeight: 1,
  color: '$gray100',
  borderRadius: 4,
  padding: '0.4rem 2rem 0.4rem 0.4rem',
  position: 'relative',
  userSelect: 'none',

  display: 'flex',
  gap: '0.4rem',
  alignItems: 'center',

  '&[data-highlighted]': {
    background: '$gray100',
    color: '$blue400',
  },
});