import { useEvent, useStore } from "effector-react";
import { useEffect } from "react";
import { TErrorPopup } from "../../shared/config";
import { $errChecker, errEvent, resetEvent } from "../../pages/Auth/model/form";
import { Popup, PopupP, PopupPhoto } from "./styles";
export const ErrorPopup: React.FC = () => {
  const errChecker = useStore($errChecker);
  const resetEventFn = useEvent(resetEvent)
  useEffect(() => {
    if(errChecker.check === false){
      setTimeout(() => resetEventFn(),5000)
    }
  },[errChecker])
  return !errChecker.check ? (
    <Popup>
      <PopupP>{errChecker.errText}</PopupP>
    </Popup>
  ) : (
    <></>
  );
};
export const ErrorPopupPhoto: React.FC<TErrorPopup> = ({ check, text }) => {
  return !check ? (
    <PopupPhoto>
      <PopupP>{text}</PopupP>
    </PopupPhoto>
  ) : (
    <></>
  );
};
