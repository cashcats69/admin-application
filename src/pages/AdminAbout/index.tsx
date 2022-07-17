import { useStore } from "effector-react";
import { useEffect, useState } from "react";
import { AdminHeader } from "../../features/AdminPanelHeader";
import { PaginatedMenu } from "../../features/PaginatedMenu";
import { AlarmReview } from "../../processes/AlarmReview";
import { ErrorPopupPhoto } from "../../processes/ErrorPopup";
import { LoaderGlobal } from "../../processes/Loader";
import { AboutDate, AboutInput } from "../../shared/ui/AboutInput";
import {
  AboutSelect,
  GenderSelect,
  PetsSelect,
} from "../../shared/ui/AboutSelect";
import { AboutTextArea } from "../../shared/ui/AboutTextArea";
import { ButtonEdit, ButtonFinish } from "../../shared/ui/ButtonEdit";
import { Footer } from "../../shared/ui/Footer";
import { PhotoInput } from "../../shared/ui/PhotoInput";
import { $userStore, getData, saveData } from "../../store/AboutStore";
import { checkAuth } from "../../store/AuthStore";
import { $LoaderStore, setStateEv } from "../../store/LoaderStore";
import { validateFields } from "../../validation";
import { BodyContainer, StyledMenu, AboutList, StyledUsers, PhotoContainer, TopInputsContainer, MiddleInputsContainer, TextAreasContainer, Container } from "./styles";


export const AdminAbout: React.FC = () => {
  useEffect(() => {
    setStateEv();
    getData().then(() => setStateEv());
  }, []);
  const userData = useStore($userStore);
  const loaderStore = useStore($LoaderStore);
  const [firstName, setFirstname] = useState<string | null>("");
  const [lastName, setLastname] = useState<string | null>("");
  const [date, setDate] = useState<string | null>("");
  const [city, setCity] = useState<string | null>("");
  const [gender, setGender] = useState<string | null>("male");
  const [pet, setPet] = useState<boolean | null>(true);
  const [smallAboutMe, setSmallAboutMe] = useState<string | null>("");
  const [aboutMe, setAboutMe] = useState<string | null>("");
  const [image, setImage] = useState("");
  const [check, setCheck] = useState(false);
  const [typePop, setTypePop] = useState(true);
  const [visible, setVisible] = useState(true);
  const [checkPhoto, setCheckPhoto] = useState(true);
  const [ErrText, setErrText] = useState("");
  useEffect(() => {
    setFirstname(userData.firstName);
    setLastname(userData.lastName);
    setDate(formatDate(userData.birthDate));
    setCity(userData.cityOfResidence);
    setGender(userData.gender);
    setPet(userData.hasPet);
    setSmallAboutMe(userData.smallAboutMe);
    setAboutMe(userData.aboutMe);
    setImage("https://academtest.ilink.dev/images/" + userData.profileImage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  function padTo2Digits(num: number) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date: string | null) {
    if (date !== null) {
      const edited = new Date(date);
      return [
        padTo2Digits(edited.getDate()),
        padTo2Digits(edited.getMonth() + 1),
        edited.getFullYear(),
      ].join(".");
    } else {
      return null;
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name === "short") {
      setSmallAboutMe(e.target.value);
    } else if (e.target.name === "long") {
      setAboutMe(e.target.value);
    } else if (e.target.name === "Имя") {
      setFirstname(e.target.value);
    } else if (e.target.name === "Фамилия") {
      setLastname(e.target.value);
    } else if (e.target.name === "Дата рождения") {
      setDate(e.target.value);
    }
  };
  const finishEdit = async () => {
    if (date && firstName && lastName) {
      if (validateFields(date, firstName, lastName) === true) {
        const dates = date.split(".");
        const dateObject = new Date(
          +dates[2],
          parseInt(dates[1]) - 1,
          +dates[0]
        ).toString();
        if (!isNaN(new Date(dateObject).getDate())) {
          const responsObj = {
            firstName: firstName,
            lastName: lastName,
            birthDate: dateObject,
            cityOfResidence: city,
            gender: gender,
            hasPet: pet,
            smallAboutMe: smallAboutMe,
            aboutMe: aboutMe,
          };
          const response = await saveData(responsObj);
          if (response.ok) {
            setVisible(false);
            setTypePop(true);
            setTimeout(() => {
              setVisible(true);
              setStateEv();
              getData().then(() => setStateEv());
            }, 2000);
          } else if (response.status === 401) {
            checkAuth()
          } else {
            setVisible(false);
            setTypePop(false);
            setTimeout(() => {
              setVisible(true);
              setStateEv();
              getData().then(() => setStateEv());
            }, 2000);
          }
        } else {
          setVisible(false);
          setTypePop(false);
          setTimeout(() => {
            setVisible(true);
            setStateEv();
            getData().then(() => setStateEv());
          }, 2000);
        }
      } else {
        setVisible(false);
        setTypePop(false);
        setTimeout(() => {
          setVisible(true);
          setStateEv();
          getData().then(() => setStateEv());
        }, 2000);
      }
    } else {
      setVisible(false);
      setTypePop(false);
      setTimeout(() => {
        setVisible(true);
        setStateEv();
        getData().then(() => setStateEv());
      }, 2000);
    }
    setCheck(!check);
  };
  const updatePhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      if (e.target.files[0].size < 1024 * 1024 * 5) {
        if (/\.(jpe?g|png)$/i.test(e.target.files[0].name)) {
          const urlString = `https://academtest.ilink.dev/user/updatePhoto`;
          const data = new FormData();
          data.append("profileImage", e.target.files[0]);
          const response = await fetch(urlString, {
            method: "POST",
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: data,
          });
          if (response.ok) {
            setVisible(false);
            setTypePop(true);
            setTimeout(() => {
              setVisible(true);
              setStateEv();
              getData().then(() => setStateEv());
            }, 2000);
          } else if (response.status === 401) {
            checkAuth()
          }
        } else {
          setErrText(
            "Ошибка загрузки. Формат файла может быть только jpg,jpeg и png."
          );
          setCheckPhoto(false);
          setTimeout(() => {
            setCheckPhoto(true);
          }, 5000);
        }
      } else {
        setErrText("Ошибка загрузки. Размер файла превышает 5Mb.");
        setCheckPhoto(false);
        setTimeout(() => {
          setCheckPhoto(true);
        }, 5000);
      }
    }
  };
  const staticArea = (
    <BodyContainer>
      <StyledMenu>
        <PaginatedMenu currentPage={2} />
      </StyledMenu>
      <AboutList>
        <StyledUsers>Обо мне</StyledUsers>
        <PhotoContainer>
          <PhotoInput currentValue={image} getValue={updatePhoto} />
          {check ? (
            <></>
          ) : (
            <ButtonEdit
              text="Редактировать"
              handleClick={() => setCheck(!check)}
            />
          )}
        </PhotoContainer>
        <TopInputsContainer>
          <AboutInput
            currentValue={firstName}
            isDisabled={!check}
            widthProp={"40%"}
            inputName={"Имя"}
            placeholderName={"Имя"}
            onChangeFunc={handleChange}
          />
          <AboutInput
            currentValue={lastName}
            isDisabled={!check}
            widthProp={"40%"}
            inputName={"Фамилия"}
            placeholderName={"Фамилия"}
            onChangeFunc={handleChange}
          />
          <AboutDate
            currentValue={date}
            isDisabled={!check}
            widthProp={"20%"}
            inputName={"Дата рождения"}
            placeholderName={"08.10.1999"}
            onChangeFunc={handleChange}
          />
        </TopInputsContainer>
        <MiddleInputsContainer>
          <AboutSelect
            currentValue={city}
            getValue={setCity}
            isDisabled={check}
            widthProp="403px"
            inputName={"Город"}
            placeholderName={"Город"}
          />
          <GenderSelect
            currentValue={gender}
            getValue={setGender}
            isDisabled={check}
            widthProp="403px"
            inputName={"Пол"}
            placeholderName={"Пол"}
          />
          <PetsSelect
            currentValue={pet}
            getValue={setPet}
            isDisabled={check}
            widthProp="209px"
            inputName={"Животное"}
            placeholderName={"Нет"}
          />
        </MiddleInputsContainer>
        <TextAreasContainer marginProp={check ? "0px" : "80px"}>
          <AboutTextArea
            currentValue={smallAboutMe}
            isDisabled={!check}
            name="short"
            currentLength={smallAboutMe ? smallAboutMe.length : 0}
            heightProp="57px"
            normalHeightProp={"74px"}
            TextAreaName="Краткая информация"
            placeholderName="Немножечко..."
            maxLength="99"
            onChangeFunc={handleChange}
          />
          <AboutTextArea
            currentValue={aboutMe}
            isDisabled={!check}
            name="long"
            currentLength={aboutMe ? aboutMe.length : 0}
            heightProp="235px"
            normalHeightProp={"118px"}
            TextAreaName="О себе"
            placeholderName="Расскажите миру о вас!"
            maxLength="300"
            onChangeFunc={handleChange}
          />
        </TextAreasContainer>

        {check ? (
          <ButtonFinish
            text="Сохранить изменения"
            handleClick={() => finishEdit()}
          />
        ) : (
          <></>
        )}
      </AboutList>
    </BodyContainer>
  );
  return (
    <Container>
      <AdminHeader />

      {loaderStore ? <LoaderGlobal /> : staticArea}
      {!visible && (
        <AlarmReview
          theme={"profile"}
          typePop={typePop}
          setCheck={setVisible}
        />
      )}

      <Footer />
      <ErrorPopupPhoto text={ErrText} check={checkPhoto} />
    </Container>
  );
};
