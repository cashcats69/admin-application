
import { TNoData } from "../../shared/config";
import noData from "../../shared/icons/noData.svg";
import { Container, Img, Text } from "./styles";

export const NoData: React.FC<TNoData> = ({ text }) => {
  return (
    <Container>
      <Img src={noData} />
      <Text>{text}</Text>
    </Container>
  );
};
