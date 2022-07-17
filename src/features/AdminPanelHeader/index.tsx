import { useStore } from "effector-react";
import { $userStore, getData } from "../../store/AboutStore";
import noPhoto from "../../shared/icons/noPhoto.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	HeaderContainer,
	FlexContainer,
	Container,
	HeaderImg,
	HeaderContainerP,
	ContainerMiddle,
	HeaderMiddle,
	ContainerCol,
	StyledH3,
	StyledAC,
} from "./styles";

export const AdminHeader: React.FC = () => {
	const toMain = useNavigate();
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
		<HeaderContainer>
			<FlexContainer>
				<Container>
					<HeaderImg
						src={
							photo ? "https://academtest.ilink.dev/images/" + photo : noPhoto
						}
					/>
					<HeaderContainerP>
						{firstName ? firstName : ""} {lastName ? lastName : ""}
					</HeaderContainerP>
				</Container>
				<ContainerMiddle>
					<HeaderMiddle>Панель управления</HeaderMiddle>
				</ContainerMiddle>
			</FlexContainer>
			<ContainerCol onClick={() => toMain("/main")}>
				<StyledH3>ilink</StyledH3>
				<StyledAC>ACADEMY</StyledAC>
			</ContainerCol>
		</HeaderContainer>
	);
};
