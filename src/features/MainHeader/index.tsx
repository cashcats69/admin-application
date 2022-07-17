import { useStore } from "effector-react";
import { useState, useEffect } from "react";
import { $userStore, getData } from "../../store/AboutStore";
import noPhoto from "../../shared/icons/noPhoto.svg";
import panel from "../../shared/icons/panel.svg";
import ilink from "../../shared/icons/ilinkLogo.svg";
import { useNavigate } from "react-router-dom";
import { Container, LogoContainer, LogoImg, Panel, PanelImg, PanelText, UserContainer, UserImg, UserLastText, UserText } from "./styles";

export const MainHeader: React.FC = () => {
  const toPanel = useNavigate();
  const userStore = useStore($userStore);
  const [firstName, setFirstname] = useState<string | null>(null);
  const [lastName, setLastname] = useState<string | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    setFirstname(userStore.firstName);
    setLastname(userStore.lastName);
    setPhoto(userStore.profileImage);
  }, [userStore]);
  return (
    <Container>
      <UserContainer>
        <UserImg
          src={photo ? "https://academtest.ilink.dev/images/" + photo : noPhoto}
        />
        <UserText>{firstName ? firstName : ""}</UserText>
        <UserLastText>{lastName ? lastName : ""}</UserLastText>
      </UserContainer>
      <LogoContainer>
        <LogoImg src={ilink} />
      </LogoContainer>
      <Panel onClick={() => toPanel("/admin/members")}>
        <PanelText>Панель управления</PanelText>
        <PanelImg src={panel} />
      </Panel>
    </Container>
  );
};
