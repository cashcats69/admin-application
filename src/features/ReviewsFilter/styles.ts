import styled from "@emotion/styled";

export const Main = styled.div`
  font-family: sans-serif;
  background: #ffffff;
  position: relative;
  width: 256px;
  height: 52px;
  @media (max-width: 768px) {
    width: 95%;
    margin: auto;
  }
`;

export const DropDownContainer = styled.div`
  width: 256px;
  height: 52px;
  margin: 0 auto;
  position: relative;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const DropDownHeader = styled.div`
  padding: 18.6px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-family: Gilroy;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;

  color: #333333;
`;

export const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 100;
  width: 163px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const DropDownList = styled.ul`
  width: 256px;
  padding: 0;
  margin: 0;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #333333;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  padding: 18.6px;
  &:hover {
    color: #585cc6;
    background: #f5f5f5;
  }
  &:active {
    color: #585cc6;
    background: #f5f5f5;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const DrowArrow = styled.img`
  position: absolute;
  top: 50%;
  left: 90%;
`;