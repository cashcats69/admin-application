import { ButtonReview } from "../../shared/ui/ButtonReview";
import { AddTextArea } from "../../shared/ui/AboutTextArea";
import { useEffect, useState } from "react";
import { TReviewAdd } from "../../shared/config";
import { Loader } from "../../processes/Loader";
import { AddReviewInput } from "../../processes/addReviewInput";
import plus from "../../shared/icons/plus.svg";
import moderIcon from "../../shared/icons/moderIcon.svg";
import { AvatarFile } from "../../processes/AvatarFile";
import reset from "../../shared/icons/reset.svg";
import { BGModal, Container, ContainerHeader, HeaderText, ImgButton, InputSmallContainer, ReviewsAddBlock, Blockplus, BlockText, ContainerInput, CaptchaContainer, CaptchaContainerInput, InputText, CaptchaInput, ImgContainer, CaptchaImg, ResetContainer, ResetImg, ContainerButtons, ModerationContainer, ModerationImg, ModerationText } from "./styles";

const getCaptcha = async () => {
  const response = await fetch(
    "https://academtest.ilink.dev/reviews/getCaptcha"
  );
  if (response.ok) {
    return response.json();
  }
};
export const AddReview: React.FC<TReviewAdd> = ({
  toggleModal,
  makeReview,
  loader,
}) => {
  useEffect(() => {
    getCaptcha().then((data) => {
      setCaptchaImage(data.base64Image);
      setCaptchaKey(data.key);
    });
  }, []);

  const [captchaImage, setCaptchaImage] = useState("");
  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaKey, setCaptchaKey] = useState("");
  const [currentText, setCurrentText] = useState("");
  const [currentAreaText, setCurrentAreaText] = useState("");
  const [currentFile, setCurrentFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  let interval: NodeJS.Timer;
  const toggleFunction = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setCurrentFile(null);
    clearInterval(interval);
    setProgress(0);
  };
  const confirmEdit = () => {
    if (
      currentText.length !== 0 &&
      currentAreaText.length !== 0 &&
      captchaKey.length !== 0 &&
      captchaValue.length !== 0
    ) {
      const content = {
        authorName: currentText,
        content: currentAreaText,
        captchaKey: captchaKey,
        captchaValue: captchaValue,
        imageFile: currentFile,
      };
      makeReview(content);
    }
  };
  const addCurrentText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentText(e.target.value);
  };
  const changeText = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setCurrentAreaText(e.target.value);
  const getFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(0);
    if (
      e.target.files !== null &&
      /\.(jpe?g|png)$/i.test(e.target.files[0].name)
    ) {
      setCurrentFile(e.target.files[0]);
      let counter = 0;
      interval = setInterval(() => {
        setProgress((state) => state + 1);
        counter = counter + 1;
        if (counter === 100) {
          clearInterval(interval);
        }
      }, 25);
    }
    e.target.value = "";
  };
  const resetCaptcha = () =>
    getCaptcha().then((data) => {
      setCaptchaImage(data.base64Image);
      setCaptchaKey(data.key);
    });

  const getCaptchaValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCaptchaValue(e.target.value);

  return (
    <BGModal id="outsideModal" onClick={toggleModal}>
      {loader ? <Loader /> : <></>}
      <Container>
        <ContainerHeader>
          <HeaderText>Отзыв</HeaderText>
          <ImgButton id="exit"></ImgButton>
        </ContainerHeader>
        <InputSmallContainer>
          <AddReviewInput
            placeholderName={"Имя Фамилия"}
            onChangeFunc={addCurrentText}
          />
          <ReviewsAddBlock htmlFor="fileInput">
            <Blockplus src={plus} />
            <BlockText>Загрузить фото</BlockText>
          </ReviewsAddBlock>
          <input type="file" id="fileInput" hidden={true} onChange={getFile} />
        </InputSmallContainer>

        {currentFile && (
          <AvatarFile
            isSize={currentFile.size < 1024 * 1024 * 5}
            toggleFunction={toggleFunction}
            name={currentFile.name}
            progress={progress}
          />
        )}

        <ContainerInput>
          <AddTextArea
            name={"Всё ли вам понравилось?"}
            maxLength={"200"}
            onChangeFunc={changeText}
            currentLength={currentText.length}
          />
        </ContainerInput>
        <CaptchaContainer>
          <CaptchaContainerInput>
            <InputText></InputText>
            <CaptchaInput onChange={getCaptchaValue}></CaptchaInput>
          </CaptchaContainerInput>
          <ImgContainer>
            <CaptchaImg src={captchaImage} />
            <ResetContainer onClick={resetCaptcha}>
              <ResetImg src={reset} />
            </ResetContainer>
          </ImgContainer>
        </CaptchaContainer>
        <ContainerButtons>
          <ButtonReview
            isDisabled={false}
            name="publish"
            widthProp="203px"
            colorProp="#585CC6"
            text="Отправить отзыв"
            handleClick={confirmEdit}
          />
          <ModerationContainer>
            <ModerationImg src={moderIcon} />
            <ModerationText>
              Все отзывы проходят модерацию в течение 2 часов
            </ModerationText>
          </ModerationContainer>
        </ContainerButtons>
      </Container>
    </BGModal>
  );
};
