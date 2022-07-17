import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 1280px;
  height: 403px;
  margin: 0 80px 0 80px;
  @media (max-width: 1368px) {
    width: 1000px;
  }
  @media (max-width: 1150px) {
    width: 900px;
    margin: 0 40px 0 40px;
  }
  @media (max-width: 1000px) {
    width: 737px;
    margin: 0 0 0 10px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 0 0 auto;
    width: 304px;
    height: auto;
  }
`;
export const ImgUser = styled.img`
  width: 519px;
  height: 383px;
  margin: 20px 0 0 0;
  @media (max-width: 1368px) {
    width: 419px;
  }
  @media (max-width: 1150px) {
    width: 319px;
  }
  @media (max-width: 1000px) {
    width: 250px;
  }
  @media (max-width: 768px) {
    margin: 0 0 0 0;
    width: 304px;
    height: 200px;
  }
`;
export const TextUserContainer = styled.div`
  background: #ffffff;
  width: 761px;
  height: 383px;
  @media (max-width: 1368px) {
    width: 661px;
  }
  @media (max-width: 1150px) {
    width: 561px;
  }
  @media (max-width: 1000px) {
    width: 461px;
  }
  @media (max-width: 768px) {
    margin: 0 0 0 0;
    width: 288px;
    height: 482px;
  }
`;
export const FirstNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 40px 40px 0 40px;
  @media (max-width: 768px) {
    justify-content: start;
    flex-direction: column;
    margin: 16px 0 0 16px;
  }
`;
export const FirstName = styled.p`
  color: #585cc6;
  font-family: Factor A;
  font-size: 32px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
export const DateUser = styled.p`
  margin: 0;
  color: #8a8a8a;
  font-family: Gilroy;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.01em;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
export const ParametersContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px 0 0 40px;
  @media (max-width: 768px) {
    margin: 16px 0 0 16px;
  }
`;
export const CityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const GenderContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 40px 0 40px;
  @media (max-width: 768px) {
    margin: 0 16px 0 28px;
  }
`;
export const AgeContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  @media (max-width: 768px) {
    margin: 12px 0 0 0;
  }
`;
export const GenderImg = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 4px;
  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;
export const PetImg = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 12px;
  @media (max-width: 768px) {
    margin-right: 8px;
    width: 24px;
    height: 24px;
  }
`;
export const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 18px 40px 0 40px;
  @media (max-width: 768px) {
    margin: 16px 16px 0 16px;
  }
`;
export const PetContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 32px 40px 0 40px;
  @media (max-width: 1000px) {
    width: 250px;
    margin: 16px 40px 0 40px;
  }
  @media (max-width: 768px) {
    margin: 15px 16px 0 16px;
  }
`;
export const CourseText = styled.p`
  font-family: Gilroy;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #333333;
  margin: 0;
  @media (max-width: 1000px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
export const StandardText = styled.p`
  color: #333333;
  font-family: Gilroy;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #333333;
  margin: 0;
  padding-left: 5px;
  @media (max-width: 1000px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
export const CourseSpan = styled.span`
  font-family: Gilroy;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #333333;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
