import MissionAndValues from "components/MissionAndValues/MissionAndValues";
import { Timeline } from "components/Timeline/Timeline";
import { Container } from "./About.style";

export const About = () => {
  return (
    <Container>
      <MissionAndValues />
      <Timeline />
    </Container>
  );
};
