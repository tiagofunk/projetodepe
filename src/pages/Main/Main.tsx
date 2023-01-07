import Carousel from "components/Carousel/Carousel";
import { About } from "../../components/About/About";
import { Container, MainArea } from "./Main.style";

export const Main = () => {
  return (
    <Container>
      <Carousel />
      <MainArea>
        <About />
      </MainArea>
    </Container>
  );
};
