import React from "react";
import { About } from "../../components/About/About";
import { VideoArea } from "../../components/VideoArea/VideoArea";
import { MainArea } from "./Main.style";

export const Main = () => {
  return (
    <MainArea>
      <About />
      <VideoArea/>
    </MainArea>
  );
};
