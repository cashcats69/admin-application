/* eslint-disable no-useless-escape */
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthInputForm } from "../../shared/ui/AuthForm/styles";
import { ButtonSubmit } from "../../shared/ui/Button";
import ShowLogo from "../../shared/icons/Show.svg";
import HideLogo from "../../shared/icons/Hide.svg";
import infoLogo from "../../shared/icons/Info.svg";
import { useForm } from "effector-forms";
import { useStore } from "effector-react";
import { $errChecker, loginForm, loginFx } from "../../pages/Auth/model/form";
import {
	StyledH2,
	Div,
	InputLabel,
	Input,
	Indicators,
	Info,
	SpanToolTip,
	InputPass,
	Eye,
} from "./styles";
const activeStyle = {
	color: "#585CC6",
	margin: "16px",
	fontFamily: "Gilroy",
	fontSize: "16px",
	fontWeight: "500",
	lineHeight: "16px",
	letterSpacing: "0em",
	textDecoration: "none",
};
export const AuthForm: React.FC = () => {
	const errChecker = useStore($errChecker);
	const [value, setValue] = useState<boolean>(true);
	const { fields, submit } = useForm(loginForm);
	const pending = useStore(loginFx.pending);
	const [styling, setStyling] = useState("#585CC6");
	const [passStyling, setPassStyling] = useState("#585CC6");
	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if(fields.email.value !== '' && fields.password.value !== ''){
			submit();
		}
	};
	useEffect(() => {
		if (fields.email.isValid) {
			if (errChecker.check) {
				setStyling("#585CC6");
			} else {
				setStyling("#EB5757");
			}
		} else {
			setStyling("#EB5757");
		}
		if (fields.password.isValid) {
			if (errChecker.check) {
				setPassStyling("#585CC6");
			} else {
				setPassStyling("#EB5757");
			}
		} else {
			setPassStyling("#EB5757");
		}
	}, [errChecker, fields.email.isValid, fields.password.isValid]);
	return (
		<AuthInputForm onSubmit={onSubmit}>
			<StyledH2>Войти</StyledH2>
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
			<Div>
				<InputLabel>Пароль</InputLabel>
				<InputPass
					colorProp={fields.password.value !== "" ? passStyling : "#E0E0E0"}
					placeholder="Введите пароль"
					type={value ? "password" : "text"}
					value={fields.password.value}
					disabled={pending}
					onChange={(e) => fields.password.onChange(e.target.value)}
				/>
				<Indicators>
					<Info
						infoValue={!fields.password.isValid}
						src={infoLogo}
						title="info"
					/>
					<SpanToolTip>
						Пароль должен содержать латиницу и прописные буквы
					</SpanToolTip>
					<Eye
						src={value ? ShowLogo : HideLogo}
						onClick={() => setValue(!value)}
					></Eye>
				</Indicators>
			</Div>
			<ButtonSubmit
				buttonType="submit"
				buttonDisabled={pending}
				buttonText="Войти"
			/>
			<NavLink style={activeStyle} to="recovery">
				Забыли пароль?
			</NavLink>
		</AuthInputForm>
	);
};
