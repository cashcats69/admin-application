import { useEvent, useStore } from "effector-react";
import { useEffect } from "react";
import { $popChecker, resetEvent } from "../../pages/Recovery/model/form";
import popNot from "../../shared/icons/popNOT.svg";
import popOk from "../../shared/icons/popupOK.svg";
import { Img } from "./styles";
export const ErrorSend: React.FC = () => {
	const check = useStore($popChecker);
	const resetEventFn = useEvent(resetEvent);
	useEffect(() => {
		setTimeout(() => resetEventFn(), 3000);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<Img
			src={check.typePop ? popOk : popNot}
			onClick={() => {
				resetEventFn();
			}}
		/>
	);
};
