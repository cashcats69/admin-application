import vkIcon from "../../icons/vk.svg";
import redditIcon from "../../icons/reddit.svg";
import telegaIcon from "../../icons/telega.svg";
import { FooterDiv, RightsReserved, SocIcons } from "./styles";
export const Footer: React.FC = () => {
	return (
		<FooterDiv>
			<RightsReserved>iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</RightsReserved>
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
	);
};
