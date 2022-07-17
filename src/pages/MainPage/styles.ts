import styled from "@emotion/styled";
import prev from "../../shared/icons/prev.svg";
import next from "../../shared/icons/next.svg";
import nextActive from "../../shared/icons/nextActive.svg";
import vectorBack from "../../shared/icons/VectorBack.svg";
export const Container = styled.div`
  background: #585cc6;
  background-image: url(${vectorBack});
  background-repeat: no-repeat;
  background-position: top right;
  @media (max-width: 768px) {
    background-position: 120px 0%;
  }
`;
export const WelcomeDiv = styled.div`
  margin: 93px 80px 88px 80px;
  @media (max-width: 768px) {
    margin: 43px 16px 64px 16px;
  }
`;
export const WelcomeText = styled.p`
  font-family: Factor A;
  font-size: 124px;
  font-weight: 500;
  line-height: 148px;
  letter-spacing: -0.0124em;
  text-align: left;
  color: #ffffff;
  @media (max-width: 768px) {
    margin: 0 auto 0 auto;
    font-size: 48px;
    line-height: 54px;
  }
`;
export const ReviewsContainer = styled.div`
  width: 1200px;
  height: 525px;
  background: #ffffff;
  margin: 120px 0 106px 0;
  @media (max-width: 1368px) {
    width: 1000px;
  }
  @media (max-width: 1150px) {
    width: 850px;
  }
  @media (max-width: 1000px) {
    width: 600px;
  }
  @media (max-width: 768px) {
    width: 304px;
    height: 479px;
    margin: 57px 0 82px 0;
  }
`;
export const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 310px;
  border-radius: 2px;
  margin: 0 56px 32px 80px;
  @media (max-width: 1368px) {
    height: 379px;
    width: auto;
    margin: 0 28px 32px 40px;
  }
  @media (max-width: 1150px) {
    margin: 0 40px 0 0px;
  }
  @media (max-width: 768px) {
    height: 400px;
    margin: 0;
  }
`;
export const ReviewsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 74px 56px 56px 80px;
  @media (max-width: 1368px) {
    padding: 37px 16px 28px 16px;
  }
  @media (max-width: 768px) {
    padding: 20px 16px 21px 16px;
  }
`;
export const HeaderText = styled.p`
  font-family: Factor A;
  font-size: 68px;
  font-weight: 500;
  line-height: 88px;
  text-align: left;
  color: #333333;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 42px;
  }
`;
export const ReviewsAddBlock = styled.button`
  display: flex;
  flex-direction: row;
  width: 220px;
  height: 52px;
  background: #585cc6;
  outline: none;
  border: 0;
  cursor: pointer;
  padding: 0;
  background-size: 0% 100%;
  &:hover {
    background-image: linear-gradient(#797ddf, #797ddf);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transition: background-size 0.5s, color 0.5s;
  }
  @media (max-width: 768px) {
    width: 42px;
    height: 42px;
  }
`;
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Blockplus = styled.img`
  width: 18px;
  height: 18px;
  margin: 17px 10px 17px 28px;
  @media (max-width: 768px) {
    margin: 12px 12px 12px 12px;
  }
`;
export const BlockText = styled.p`
  font-family: Gilroy;
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  text-align: left;
  color: #ffffff;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 128px;
  margin: 120px 0 106px 34px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ButtonNext = styled.button`
  background: #ffffff;
  width: 56px;
  height: 56px;
  outline: none;
  cursor: pointer;
  border: none;
  background-image: url(${next});
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    background-image: url(${nextActive});
  }
`;
export const ButtonPrev = styled.button`
  background: #ffffff;
  width: 56px;
  height: 56px;
  outline: none;
  cursor: pointer;
  border: none;
  background-image: url(${prev});
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    background-image: url(${nextActive});
    transform: scale(-1, 1);
  }
`;