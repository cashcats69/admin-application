import { IBriefUser } from "../../shared/config";
import { BriefContainer, BriefP } from "./styles";

export const BriefUser: React.FC<IBriefUser> = ({ smallAboutMe }) => {
  
  const splicedSmall = smallAboutMe?.slice(0, 44);

  return (
    <BriefContainer>
      <BriefP>{splicedSmall}</BriefP>
    </BriefContainer>
  );
};
