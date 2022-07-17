import { IStatusUser } from "../../shared/config";
import { ExpelledContainer, ExpelledP, StudyingContainer, StudyingP, FinishedContainer, FinishedP } from "./styles";
import { memo } from "react";
export const StatusUser: React.FC<IStatusUser> = memo(({ academyStatus }) => {
  switch (academyStatus) {
    case "expelled":
      return (
        <ExpelledContainer>
          <ExpelledP>Отчислен</ExpelledP>
        </ExpelledContainer>
      );
    case "studies":
      return (
        <StudyingContainer>
          <StudyingP>Обучается</StudyingP>
        </StudyingContainer>
      );
    case "finished":
      return (
        <FinishedContainer>
          <FinishedP>Закончил</FinishedP>
        </FinishedContainer>
      );
  }
}
);
