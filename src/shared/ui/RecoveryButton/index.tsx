import { IRecoveryButton } from "../../config";
import { RecoveryB } from "./styles";
export const RecoveryButton: React.FC<IRecoveryButton> = ({
  buttonDisabled,
}) => {
  return <RecoveryB type="submit" disabled={buttonDisabled}>Отправить код</RecoveryB>;
};
