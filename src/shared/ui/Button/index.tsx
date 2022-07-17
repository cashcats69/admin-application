import { IButtonSubmit } from "../../config";
import { ButtonSignIn } from "./styles";
export const ButtonSubmit: React.FC<IButtonSubmit> = ({
  buttonType,
  buttonDisabled,
  buttonText,
}) => {
  return (
    <ButtonSignIn type={buttonType} disabled={buttonDisabled}>
      {buttonText}
    </ButtonSignIn>
  );
};
