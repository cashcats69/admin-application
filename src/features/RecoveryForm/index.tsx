/* eslint-disable no-useless-escape */
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { RecoveryButton } from "../../shared/ui/RecoveryButton";
import Arrow from "../../shared/icons/Arrow.svg";
import {
	$popChecker,
	loginForm,
	loginFx,
} from "../../pages/Recovery/model/form";
import { useStore } from "effector-react";
import { useForm } from "effector-forms";
import {
	AuthInputForm,
	ButtonCancel,
	Container,
	Div,
	Img,
	Indicators,
	Info,
	Input,
	InputLabel,
	SpanToolTip,
	StyledH2,
} from "./styles";
import infoLogo from "../../shared/icons/Info.svg";

export const RecoveryForm: React.FC = () => {
	const popChecker = useStore($popChecker);
	const { fields, submit } = useForm(loginForm);
	const pending = useStore(loginFx.pending);
	const [styling, setStyling] = useState("#585CC6");
	useEffect(() => {
		if (fields.email.isValid) {
			setStyling("#585CC6");
		} else {
			setStyling("#EB5757");
		}
	}, [popChecker, fields.email.isValid]);

	const onSubmit = async (e: React.FormEvent) => {
		if (fields.email.value !== "") {
			submit();
		}
		e.preventDefault();
	};
	return (
		<AuthInputForm onSubmit={onSubmit}>
			<Container>
				<NavLink to="/">
					<Img src={Arrow}></Img>
				</NavLink>
				<StyledH2>Изменение пароля</StyledH2>
			</Container>
			<Div>
				<InputLabel>Логин</InputLabel>
				<Input
					colorProp={fields.email.value !== "" ? styling : "#E0E0E0"}
					placeholder={`Введите логин`}
					value={fields.email.value}
					type="text"
					disabled={pending}
					onChange={(e) => fields.email.onChange(e.target.value)}
				/>
				<Indicators>
					<Info src={infoLogo} title="info" infoValue={!fields.email.isValid} />
					<SpanToolTip>Почта должна соответствовать требованиям</SpanToolTip>
				</Indicators>
			</Div>
			<Container>
				<RecoveryButton buttonDisabled={pending} />
				<NavLink to="/auth">
					<ButtonCancel>Отмена</ButtonCancel>
				</NavLink>
			</Container>
		</AuthInputForm>
	);
};
