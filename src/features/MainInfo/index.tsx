import { TMainInfo } from "../../shared/config";
import female from "../../shared/icons/genderFemale.svg";
import male from "../../shared/icons/genderMale.svg";
import pet from "../../shared/icons/pet.svg";
import { Container, ImgUser, TextUserContainer, FirstNameContainer, FirstName, DateUser, ParametersContainer, CityContainer, CourseText, StandardText, GenderContainer, GenderImg, AgeContainer, AboutContainer, CourseSpan, PetContainer, PetImg } from "./styles";
export const MainInfo: React.FC<TMainInfo> = ({
  aboutMe,
  birthDate,
  cityOfResidence,
  firstName,
  gender,
  hasPet,
  lastName,
  profileImage,
}) => {
  return (
    <Container>
      <ImgUser src={profileImage} />
      <TextUserContainer>
        <FirstNameContainer>
          <FirstName>{firstName + " " + lastName}</FirstName>
          <DateUser>{birthDate}</DateUser>
        </FirstNameContainer>
        <ParametersContainer>
          <CityContainer>
            <CourseText>Город:</CourseText>
            <StandardText>{cityOfResidence}</StandardText>
          </CityContainer>
          <GenderContainer>
            <CourseText>Пол:</CourseText>
            <StandardText>{gender}</StandardText>
            <GenderImg src={gender === "Мужчина" ? male : female} />
          </GenderContainer>
          <AgeContainer>
            <CourseText>Возраст:</CourseText>
            <StandardText>{birthDate}</StandardText>
          </AgeContainer>
        </ParametersContainer>
        <AboutContainer>
          <StandardText>
            <CourseSpan>О себе: </CourseSpan>
            {aboutMe}
          </StandardText>
        </AboutContainer>
        <PetContainer>
          <PetImg src={pet} />
          <CourseText>Домашнее животное:</CourseText>
          <StandardText>{hasPet}</StandardText>
        </PetContainer>
      </TextUserContainer>
    </Container>
  );
};
