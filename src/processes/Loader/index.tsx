import loader from "../../shared/icons/loader.gif";
import { Container, Img, ContainerGlobal } from "./styles";
export const Loader: React.FC = () => {
  return (
    <Container>
      <Img src={loader} />
    </Container>
  );
};
export const LoaderGlobal: React.FC = () => {
  return (
    <ContainerGlobal>
      <Img src={loader} />
    </ContainerGlobal>
  );
};
