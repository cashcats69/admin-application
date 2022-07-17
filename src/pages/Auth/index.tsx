import { AuthContainer } from "../../shared/ui/AuthForm/styles";
import { AuthForm } from "../../features/Form";
import vkIcon from "../../shared/icons/vk.svg";
import redditIcon from "../../shared/icons/reddit.svg";
import telegaIcon from "../../shared/icons/telega.svg";
import logo from "../../shared/icons/ilinkLogoWhite.svg";
import { ErrorPopup } from "../../processes/ErrorPopup";
import { useNavigate } from "react-router-dom";
import { useStore } from "effector-react";
import { $AuthUser, $NavTrigger } from "../../store/AuthStore";
import { useEffect } from "react";
import { HeaderContainer, ImgLogo, FooterContainer, FooterDiv, RightsReserved, SocIcons } from "./styles";
export const AuthPage: React.FC = () => {
	const navTrigger = useStore($NavTrigger);
	const authUser = useStore($AuthUser);
	const navigate = useNavigate();
	useEffect(() => {
		if(navTrigger === true && authUser === true){
			navigate('main')
		}
	},[navTrigger,authUser])
	return (
		<AuthContainer>
			<HeaderContainer>
				<ImgLogo src={logo} />
			</HeaderContainer>
			<AuthForm />
			<FooterContainer>
				<ErrorPopup/>
				<FooterDiv>
					<RightsReserved>
						iLINK ACADEMY. ALL RIGHTS RESERVED. 2022
					</RightsReserved>
					<SocIcons>
						<a href="https://vk.com/inbeatofhappiness">
							<img src={vkIcon} alt="Vk" />
						</a>
						<a href="https://www.reddit.com/">
							<img src={redditIcon} alt="Reddit" />
						</a>
						<a href="https://t.me/Ilusaaxd">
							<img src={telegaIcon} alt="Telegram" />
						</a>
					</SocIcons>
				</FooterDiv>
			</FooterContainer>
		</AuthContainer>
	);
};
