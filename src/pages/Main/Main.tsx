import Carousel from "components/Carousel/Carousel";
import Footer from "components/Footer/Footer";
import { About } from "../../components/About/About";
import { Container, MainArea } from "./Main.style";

export const Main = () => {
  return (
    <Container>
      <Carousel />
      <MainArea>
        <About />
      </MainArea>
      <Footer />
    </Container>
  );
};
