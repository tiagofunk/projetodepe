import Carousel from "components/Carousel/Carousel";
import Footer from "components/Footer/Footer";
import { About } from "../../components/About/About";
import { Container, MainArea } from "./Main.style";
import { VideoArea } from "../../components/VideoArea/VideoArea";

export const Main = () => {
  return (
    <Container>
      <Carousel />
      <MainArea>
        <About />
        <VideoArea/>
      </MainArea>
      <Footer />
    </Container>
  );
};
