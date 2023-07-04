import { useState } from "react";
import { RefCallBack } from "react-hook-form";
import { Eye, EyeSlash } from "phosphor-react";

import { InputContainer } from "./styles";

interface InputPasswordProps {
  value: string;
  ref: RefCallBack;
  onChangeValue: (value: any) => void;
}

export const InputPassword = (props: InputPasswordProps) => {
  const {
    ref,
    value,
    onChangeValue,
  } = props;
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <InputContainer>
      <input
        ref={ref}
        id="password"
        value={value}
        placeholder="Senha"
        type={passwordShown ? "text" : "password"}
        onChange={(event) => onChangeValue(event.target.value)}
      />
      <button
        type="button"
        onClick={togglePassword}
      >
        {!passwordShown ? <EyeSlash size={18} /> : <Eye size={18} />}
      </button>
    </InputContainer>
  );
};