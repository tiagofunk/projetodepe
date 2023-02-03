import { Whatsapp } from "components/Whatsapp/Whatsapp";
import Footer from "components/Footer/Footer";
import { About } from "../../components/About/About";
import {
  BackgroundImage,
  Container,
  MainArea,
  MainSection,
} from "./Main.style";
import { VideoArea } from "../../components/VideoArea/VideoArea";
import { Activities } from "components/Activities/Activities";
import { Timeline } from "../../components/Timeline/Timeline";
import { QRCodeArea } from "components/QRCodeArea/QRCodeArea";
import { Professionals } from "components/Professionals/Professionals";
import { Book } from "components/Book/Book";
import { BackToTheTopButton } from "components/BackToTheToplButton/BackToTheTopButton";
import { useRef } from "react";
import MissionAndValues from "components/MissionAndValues/MissionAndValues";

export const Main = () => {
  const mainRef = useRef<HTMLDivElement | null>(null);

  return (
    <Container ref={mainRef}>
      <MainSection>
        <BackgroundImage />
        <About />
      </MainSection>
      <MainArea>
       <BackToTheTopButton mainContainerRef={mainRef} />
        <MissionAndValues />
        <VideoArea />
        {/* <Activities />
        <Timeline />
        <QRCodeArea />
        <Professionals />
        <Book /> */}
      </MainArea>
      <Footer />
    </Container>
  );
};
