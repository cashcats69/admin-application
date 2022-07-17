import noPhoto from "../../shared/icons/noPhoto.svg";
import { TUserMainCard } from "../../shared/config";
import { BodyContainer, BodyP, Container, DateContainer, HeaderContainer, HeaderDate, ProfileContainer, ProfileImg, ProfileName, ReviewContainer } from "./styles";

export const MainCard: React.FC<TUserMainCard> = ({
  authorName,
  authorImage,
  createdAt,
  text,
}) => {
  return (
    <Container>
      <ReviewContainer>
        <HeaderContainer>
          <ProfileContainer>
            <ProfileImg
              src={
                authorImage
                  ? "https://academtest.ilink.dev/images/" + authorImage
                  : noPhoto
              }
            ></ProfileImg>
            <ProfileName>{authorName}</ProfileName>
          </ProfileContainer>
          <DateContainer>
            <HeaderDate>
              {createdAt !== null
                ? new Date(createdAt).toLocaleDateString()
                : ""}
            </HeaderDate>
          </DateContainer>
        </HeaderContainer>
        <BodyContainer>
          <BodyP>{text}</BodyP>
        </BodyContainer>
      </ReviewContainer>
    </Container>
  );
};
