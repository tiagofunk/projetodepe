import { Whatsapp } from "components/Whatsapp/Whatsapp";
import { About } from "../../components/About/About";
import { VideoArea } from "../../components/VideoArea/VideoArea";
import { MainArea } from "./Main.style";

export const Main = () => {
  return (
    <MainArea>
      <About />
      <VideoArea/>
      <Whatsapp variant={"icon"} />
    </MainArea>
  );
};
