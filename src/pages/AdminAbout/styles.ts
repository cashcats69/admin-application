import styled from "@emotion/styled";
import { TAreas } from "../../shared/config";

export const Container = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  font-size: calc(10px + 2vmin);
  color: white;
  overflow-x: hidden;
`;
export const BodyContainer = styled.div`
  height: 100%;
  display: flex;

  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;
export const StyledMenu = styled.div`
  width: 273px;
  @media (max-width: 1000px) {
    width: 230px;
  }
  @media (max-width: 850px) {
    width: 160px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const StyledUsers = styled.p`
  margin: 43px 0 40px 0;
  font-family: "Factor A";
  font-size: 32px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: #333333;
  @media (max-width: 768px) {
    font-size: 22px;
    margin: 26px 0 16px 0;
  }
`;
export const AboutList = styled.div`
  display: flex;
  flex-direction: column;
  width: 1063px;
  margin: 0 16px 0 16px;
  @media (max-width: 1400px) {
    width: 800px;
  }
  @media (max-width: 1100px) {
    width: 600px;
  }
  @media (max-width: 768px) {
    width: auto;
  }
`;
export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const TopInputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const MiddleInputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TextAreasContainer = styled.div<TAreas>(
  ({ marginProp }) => `
display:flex;
flex-direction:column;
width:100%;
margin: 0 0 calc(${marginProp} * 3.5) 0;
@media(max-width:768px){
    margin: 0 0 calc(${marginProp} + 24px) 0;
}
`
);
