import { MembersContainer, MembersDesc, MembersHeaderP, MembersDescInfo, MembersHeaderPDif } from "./styles";

export const MembersHeader: React.FC = () => {
  return (
    <MembersContainer>
      <MembersDesc>
        <MembersHeaderP>ИФ УЧЕНИКА</MembersHeaderP>
      </MembersDesc>
      <MembersDescInfo>
        <MembersHeaderPDif>КРАТКАЯ ИНФОРМАЦИЯ</MembersHeaderPDif>
      </MembersDescInfo>
      <MembersDesc>
        <MembersHeaderP>СТАТУС</MembersHeaderP>
      </MembersDesc>
    </MembersContainer>
  );
};
