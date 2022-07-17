import popNot from "../../shared/icons/declinedSend.svg";
import popOk from "../../shared/icons/acceptedSend.svg";
import success from "../../shared/icons/successEditReview.svg";
import fail from "../../shared/icons/failEditReview.svg";
import accept from "../../shared/icons/userAccept.svg";
import reject from "../../shared/icons/userReject.svg";
import { TAlarmReview } from "../../shared/config";
import { Img } from "./styles";
export const AlarmReview: React.FC<TAlarmReview> = ({
  typePop,
  theme,
  setCheck,
}) => {
  if (theme === "edit" || theme === "send") {
    return (
      <Img
        src={typePop ? popOk : popNot}
        onClick={() => {
          setCheck(true);
        }}
      />
    );
  } else if (theme === "profile") {
    return (
      <Img
        src={typePop ? accept : reject}
        onClick={() => {
          setCheck(true);
        }}
      />
    );
  } else {
    return (
      <Img
        src={typePop ? success : fail}
        onClick={() => {
          setCheck(true);
        }}
      />
    );
  }
};
