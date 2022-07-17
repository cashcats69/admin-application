import styled from "@emotion/styled";
export const HeaderContainer = styled.div`
  margin-bottom: 40px;
  margin-top: 20px;
  line-height: 1;
`;
export const FooterDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #ffffff;
  width: 100%;
  border: 0px;
  position: absolute;
  bottom: 0;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  @media (max-width: 550px) {
    justify-content: space-around;
    flex-direction: column;
    height: 84px;
  }
`;
export const RightsReserved = styled.p`
  font-family: "Factor A";
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #333333;
  margin-left: 80px;
  @media (max-width: 550px) {
    margin-left: 0px;
  }
`;
export const SocIcons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 104px;
  height: 24px;
  margin-right: 80px;
  @media (max-width: 550px) {
    margin-right: 0px;
  }
`;

export const PopupInv = styled.div`
  position: absolute;
`;
export const ImgLogo = styled.img`
  @media (max-width: 768px) {
    width: 59px;
    height: 36px;
  }
`;