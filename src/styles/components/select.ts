import { styled } from "..";

export const Select = styled('select', {
  fontSize: '$sm',
  height: '40px',
  padding: '0.2rem 0.6rem',
  borderRadius: 8,
  color: "$gray400",
  background:'$white',
  border: '1px solid $gray300',
});

export const Option = styled("option", {
  padding: '1rem !important',
  backgroundColor: '$gray100 !important',
});