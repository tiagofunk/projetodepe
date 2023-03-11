import MissionAndValues from "components/MissionAndValues/MissionAndValues";
import { Timeline } from "components/Timeline/Timeline";
import { VideoArea } from "components/VideoArea/VideoArea";
import { Container } from "./About.style";

export const About = () => {
  return (
    <div>
      <Container>
        <MissionAndValues />
        <Timeline />
        <VideoArea />
      </Container>
    </div>
  );
};
