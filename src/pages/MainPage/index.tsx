import { useEvent, useStore } from "effector-react";
import { useState, useEffect, useRef } from "react";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { MainCard } from "../../features/MainCard";
import { MainHeader } from "../../features/MainHeader";
import { MainInfo } from "../../features/MainInfo";
import { FilterReview, TMakeReview } from "../../shared/config";
import { $userStore } from "../../store/AboutStore";
import { $RealUsersStore, getReviews } from "../../store/UsersStore";
import { Footer } from "../../shared/ui/Footer";
import plus from "../../shared/icons/plus.svg";
import {
  SwiperButtonPrev,
  SwiperButtonNext,
} from "../../processes/SwiperButtons";
import { checkAuth, resetTrigger } from "../../store/AuthStore";
import { AddReview } from "../../features/AddReview";
import { AlarmReview } from "../../processes/AlarmReview";
import { LoaderGlobal } from "../../processes/Loader";
import { $LoaderStore } from "../../store/LoaderStore";
import { WelcomeDiv, WelcomeText, BottomContainer, ReviewsContainer, ReviewsHeader, HeaderText, ReviewsAddBlock, Blockplus, BlockText, SliderContainer, ButtonsContainer, ButtonPrev, ButtonNext, Container } from "./styles";

export const makeReviewReq = async (data: {
  authorName: string;
  content: string;
  captchaKey: string;
  captchaValue: string;
}) => {
  const url = `https://academtest.ilink.dev/reviews/create`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      authorName: data.authorName,
      title: "SomethingSpecialBooooo",
      text: data.content,
      captchaKey: data.captchaKey,
      captchaValue: data.captchaValue,
    }),
  });
  return response;
};
export const updatePhoto = async (id: string, image: File) => {
  const urlString = `https://academtest.ilink.dev/reviews/updatePhoto/${id}`;
  const data = new FormData();
  data.append("authorImage", image);
  const request = await fetch(urlString, {
    method: "POST",
    body: data,
  });
  return request;
};
export const Main: React.FC = () => {
  const loaderStore = useStore($LoaderStore);
  const [typePop, setTypePop] = useState(true);
  const userData = useStore($userStore);
  const reviews = useStore($RealUsersStore);
  const [loader, setLoader] = useState(false);
  const resetTriggerFn = useEvent(resetTrigger)
  const publishedReviews = reviews
    .filter((item) => item.status === FilterReview.published)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  const [firstName, setFirstname] = useState<string | null>("");
  const [lastName, setLastname] = useState<string | null>("");
  const [date, setDate] = useState<string | null>("");
  const [city, setCity] = useState<string | null>("");
  const [gender, setGender] = useState<string | null>("male");
  const [pet, setPet] = useState<boolean>(true);
  const [aboutMe, setAboutMe] = useState<string | null>("");
  const [image, setImage] = useState("");
  const [windowInnerWidth, setWindowInnerWidth] = useState<number>(
    window.innerWidth
  );
  const nextRef: React.MutableRefObject<HTMLButtonElement | null> =
    useRef(null);
  const prevRef: React.MutableRefObject<HTMLButtonElement | null> =
    useRef(null);
  const [check, setCheck] = useState(true);
  const [theme, setTheme] = useState<"edit" | "send">("send");
  const [isOpen, setIsOpen] = useState(false);
  //any плохой тон, но я не придумал, как запихнуть в функцию отслеживание клика по кнопке и блоку без багов
  //Делить на две функции не стал
  const toggling = (e: React.SyntheticEvent & { target: any }) => {
    if (
      e.target.id === "outsideModal" ||
      e.currentTarget.id === "add" ||
      e.target.id === "exit"
    ) {
      setIsOpen(!isOpen);
    }
  };
  useEffect(() => {
    getReviews();
    resetTriggerFn();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setFirstname(userData.firstName);
    setLastname(userData.lastName);
    setDate(formatDate(userData.birthDate));
    setCity(userData.cityOfResidence);
    setGender(userData.gender ? userData.gender : "male");
    setPet(userData.hasPet ? userData.hasPet : true);
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
  const makeReview = async (content: TMakeReview) => {
    setTheme("edit");
    setLoader(true);
    const response = await makeReviewReq(content);
    const data = await response.json();
    if (response.ok) {
      if (
        content.imageFile !== null &&
        content.imageFile.size < 1024 * 1024 * 5
      ) {
        const imgResponse = await updatePhoto(data.id, content.imageFile);
        if (imgResponse.ok) {
          setCheck(false);
          setTypePop(true);
          setLoader(false);
          setIsOpen(!isOpen);
        } else if (imgResponse.status === 401) {
          checkAuth();
          setCheck(false);
          setTypePop(false);
          setLoader(false);
          setIsOpen(!isOpen);
        } else {
          setCheck(false);
          setTypePop(false);
          setLoader(false);
          setIsOpen(!isOpen);
        }
      } else {
        setCheck(false);
        setTypePop(true);
        setLoader(false);
        setIsOpen(!isOpen);
      }
    } else if (response.status === 401) {
      checkAuth();
      setCheck(false);
      setTypePop(false);
      setLoader(false);
      setIsOpen(!isOpen);
    } else {
      setCheck(false);
      setTypePop(false);
      setLoader(false);
      setIsOpen(!isOpen);
    }

    setTimeout(() => {
      getReviews();
      setCheck(true);
    }, 2000);
  };
  //window.onresize это плохой тон, но я ничего не нашел для отслеживания размера экрана в реальном времени для ts
  //Это нужно для слайдера
  let currentWidth: number;
  window.onresize = () => {
    currentWidth = window.innerWidth;
    if (currentWidth < 768) {
      setWindowInnerWidth(767);
    } else if (currentWidth > 768) {
      setWindowInnerWidth(769);
    }
  };
  const staticArea = (
    <>
      {" "}
      <WelcomeDiv>
        <WelcomeText>Добро пожаловать в академию!</WelcomeText>
      </WelcomeDiv>
      <MainInfo
        aboutMe={aboutMe ? aboutMe : ""}
        birthDate={date ? date : ""}
        cityOfResidence={city ? city : ""}
        firstName={firstName ? firstName : ""}
        gender={gender === "male" ? "Мужчина" : "Женщина"}
        hasPet={pet ? "Есть" : "Нет"}
        lastName={lastName ? lastName : ""}
        profileImage={image ? image : ""}
      />
      <BottomContainer>
        <ReviewsContainer>
          <ReviewsHeader>
            <HeaderText>Отзывы</HeaderText>
            <ReviewsAddBlock id="add" onClick={toggling}>
              <Blockplus src={plus} />
              <BlockText>Добавить отзыв</BlockText>
            </ReviewsAddBlock>
          </ReviewsHeader>
          <SliderContainer>
            <Swiper
              slidesPerView={windowInnerWidth > 768 ? 2 : 1}
              spaceBetween={windowInnerWidth > 768 ? 12 : 0}
              slidesPerGroup={windowInnerWidth > 768 ? 2 : 1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation]}
            >
              <SwiperButtonPrev refOb={prevRef}>Slide</SwiperButtonPrev>
              <SwiperButtonNext refOb={nextRef}>Slide</SwiperButtonNext>
              {publishedReviews.map((review) => {
                return (
                  <SwiperSlide key={review.id}>
                    <MainCard
                      text={review.text}
                      authorImage={review.authorImage}
                      authorName={review.authorName}
                      createdAt={review.createdAt}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </SliderContainer>
        </ReviewsContainer>
        <ButtonsContainer>
          <ButtonPrev onClick={() => prevRef.current?.click()}></ButtonPrev>
          <ButtonNext onClick={() => nextRef.current?.click()}></ButtonNext>
        </ButtonsContainer>
      </BottomContainer>
    </>
  );
  return (
    <Container>
      {isOpen ? (
        <AddReview
          loader={loader}
          toggleModal={toggling}
          makeReview={makeReview}
        />
      ) : (
        <></>
      )}
      <MainHeader />
      {loaderStore ? <LoaderGlobal /> : staticArea}
      {!check && (
        <AlarmReview theme={theme} typePop={typePop} setCheck={setCheck} />
      )}
      <Footer />
    </Container>
  );
};
