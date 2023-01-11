import Carousel from "components/Carousel/Carousel";
import Footer from "components/Footer/Footer";
import { About } from "../../components/About/About";
import { Container, MainArea } from "./Main.style";
import { VideoArea } from "../../components/VideoArea/VideoArea";
import { Activities } from "components/Activities/Activities";
import { Timeline } from "../../components/Timeline/Timeline";

export const Main = () => {
  return (
    <Container>
      <Carousel />
      <MainArea>
        <About />
        <VideoArea/>
        <Activities/>
        <Timeline/>
      </MainArea>
      <Footer />
    </Container>
  );
};
