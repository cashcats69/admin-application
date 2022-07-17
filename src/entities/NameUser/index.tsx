import { INameUser } from "../../shared/config";
import { NameContainer, NameP } from "./styles";
export const NameUser: React.FC<INameUser> = ({ firstName, lastName }) => {
  return (
    <NameContainer>
      <NameP>{firstName + " " + lastName}</NameP>
    </NameContainer>
  );
};
