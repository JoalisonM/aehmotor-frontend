import { styled } from "../../styles";

export const InputContainer = styled("div", {
  width: '100%',
  position: 'relative',

  input: {
    width: '100%',
    border: 0,
    borderRadius: "6px",
    color: "$gray700",
    padding: "1rem",

    "&::placeholder": {
      color: "$gray500",
    }
  },

  button: {
    border: 0,
    position: 'absolute',
    top: '15px',
    right: '10px',
    backgroundColor: 'transparent',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    svg: {
      color: '$gray500',
    }
  }
});