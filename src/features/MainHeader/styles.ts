import styled from "@emotion/styled";

export const Container = styled.div`
  height: 116px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  @media (max-width: 768px) {
    height: 77px;
  }
`;
export const UserContainer = styled.div`
  margin-left: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    margin-left: 16px;
  }
`;
export const UserImg = styled.img`
  width: 52px;
  height: 52px;
  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;
export const UserText = styled.p`
  font-family: Gilroy;
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 20px;
  width: 40px;
  @media (max-width: 768px) {
    margin-left: 8px;
    font-size: 12px;
    line-height: 14px;
  }
`;
export const UserLastText = styled.p`
  font-family: Gilroy;
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 5px;
  width: 70px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const LogoImg = styled.img`
  width: 85px;
  height: 52px;
  @media (max-width: 768px) {
    width: 59px;
    height: 36px;
  }
`;
export const Panel = styled.div`
  margin-right: 80px;
  border-radius: 3px;
  background: #585cc6;
  width: 227px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
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
    margin-right: 16px;
    width: 36px;
    height: 36px;
  }
`;
export const PanelText = styled.p`
  color: #ffffff;
  font-family: Gilroy;
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.01em;
  text-align: left;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const PanelImg = styled.img`
  width: 20px;
  height: 20px;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;