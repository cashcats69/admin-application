import styled from "@emotion/styled";
import ModalExitImg from "../../shared/icons/ModalExit.svg";
export const Container = styled.div`
  margin: 100px auto auto auto;
  width: 676px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  z-index: 800;
  @media (max-width: 768px) {
    margin: 46px auto auto auto;
    width: 288px;
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 16px 24px 0 24px;
  @media (max-width: 768px) {
    margin: 16px 16px 0 16px;
  }
`;
export const HeaderText = styled.p`
  font-family: "Factor A";
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.0124em;
  text-align: left;
  color: #333333;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 26px;
    text-align: left;
  }
`;
export const ContainerInput = styled.div`
  margin: 32px 24px 40px 24px;
  @media (max-width: 768px) {
    margin: 32px 16px 12px 16px;
  }
`;
export const ContainerButtons = styled.div`
  display: flex;
  margin: 0 24px 24px 24px;
  @media (max-width: 768px) {
    width: auto;
    height: 92px;
    flex-direction: column-reverse;
    margin: 0 16px 16px 16px;
  }
`;
export const BGModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 500;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(3px);
`;

export const ImgButton = styled.button`
  outline: none;
  border: 0;
  background: transparent;
  cursor: pointer;
  background-image: url(${ModalExitImg});
  width: 25px;
  height: 25px;
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
export const InputSmallContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 24px 0 24px;
  align-items: flex-end;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 16px 0 16px;
  }
`;
export const ReviewsAddBlock = styled.label`
  display: flex;
  flex-direction: row;
  width: 217px;
  height: 52px;
  background: #585cc6;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
  background-size: 0% 100%;
  &:hover {
    background-image: linear-gradient(#797ddf, #797ddf);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transition: background-size 0.5s, color 0.5s;
  }
  @media (max-width: 768px) {
    width: 149px;
    height: 42px;
  }
`;
export const Blockplus = styled.img`
  width: 18px;
  height: 18px;
  margin: 17px 10px 17px 28px;
  @media (max-width: 768px) {
    width: 12px;
    height: 12px;
    margin: 15px 10px 15px 15px;
  }
`;
export const BlockText = styled.p`
  font-family: Gilroy;
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  text-align: left;
  color: #ffffff;
  margin: auto 0 auto 0;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 14px;
    margin: 12px 0 12px 0;
  }
`;
export const ModerationContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left: 16px;
  @media (max-width: 768px) {
    margin: 0;
  }
`;
export const ModerationImg = styled.img`
  width: 20px;
  height: 20px;
`;
export const ModerationText = styled.p`
  margin-left: 8px;
  font-family: Gilroy;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: #8a8a8a;
  @media (max-width: 768px) {
    font-size: 10px;
    line-height: 12px;
  }
`;
export const CaptchaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 0 0 12px 24px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    margin: 0 0 12px 16px;
  }
`;
export const CaptchaContainerInput = styled.div``;
export const InputText = styled.p``;
export const CaptchaInput = styled.input`
  outline: none;
  height: 42px;
  width: 203px;
  border-radius: 2px;
  border: 1px solid #e0e0e0;
  padding: 0px;
  text-indent: 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  font-family: Gilroy;
  ::placeholder {
    color: #8a8a8a;
    letter-spacing: 0em;
    text-align: left;
    text-indent: 16px;
    margin-botton: 8px;
  }
  @media (max-width: 768px) {
    width: 163px;
  }
`;
export const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  @media (max-width: 768px) {
    align-items: start;
    margin: 10px 0 0 0;
  }
`;
export const CaptchaImg = styled.img`
  width: 165px;
  height: 52px;
  border-radius: 5px;
`;
export const ResetContainer = styled.div`
  width: 48px;
  height: 52px;
  background: #f5f5f5;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 10px;
`;
export const ResetImg = styled.img`
  width: 18px;
  height: 18px;
`;