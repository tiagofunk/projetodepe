
import { Whatsapp } from "components/Whatsapp/Whatsapp";
import Carousel from "components/Carousel/Carousel";
import Footer from "components/Footer/Footer";
import { About } from "../../components/About/About";
import { Container, MainArea } from "./Main.style";
import { VideoArea } from "../../components/VideoArea/VideoArea";
import { Activities } from "components/Activities/Activities";
import { Timeline } from "../../components/Timeline/Timeline";
import { QRCodeArea } from "components/QRCodeArea/QRCodeArea";
import { Professionals } from "components/Professionals/Professionals";
import { Book } from "components/Book/Book";

export const Main = () => {
  return (
    <Container>
      <Carousel />
      <MainArea>
        <About />
        <VideoArea/>
        <Whatsapp variant={"icon"} />
        <Activities/>
        <Timeline/>
        <QRCodeArea/>
        <Professionals/>
        <Book/>
      </MainArea>
      <Footer />
    </Container>
  );
};
