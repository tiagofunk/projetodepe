import { About } from "../../components/About/About";
import {
  BackgroundImage,
  Container,
  MainArea,
  MainSection,
} from "./Main.style";
import { Activities } from "components/Activities/Activities";
import { BackToTheTopButton } from "components/BackToTheToplButton/BackToTheTopButton";
import { useRef } from "react";
import { Contact } from "components/Contact/Contact";

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
        <Activities />
        <Contact />
      </MainArea>
    </Container>
  );
};
