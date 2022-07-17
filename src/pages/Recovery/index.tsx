
import redditIcon from "../../shared/icons/reddit.svg";
import telegaIcon from "../../shared/icons/telega.svg";
import vkIcon from "../../shared/icons/vk.svg";
import logo from "../../shared/icons/ilinkLogoWhite.svg";
import { RecoveryForm } from "../../features/RecoveryForm";
import { ErrorSend } from "../../processes/ErrorCode";
import { useStore } from "effector-react";
import { $popChecker } from "./model/form";
import { HeaderContainer, ImgLogo, PopupInv, FooterDiv, RightsReserved, SocIcons } from "./styles";
import { AuthContainer } from "../../shared/ui/AuthForm/styles";
export const RecoveryPage: React.FC = () => {
const check = useStore($popChecker)
  return (
    <AuthContainer>
      <HeaderContainer>
        <ImgLogo src={logo} />
      </HeaderContainer>
      <RecoveryForm/>
      {!check.check ? (
        <ErrorSend/>
      ) : (
        <PopupInv></PopupInv>
      )}
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
    </AuthContainer>
  );
};
