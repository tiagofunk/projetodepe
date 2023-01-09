import React from "react";
import { About } from "../../components/About/About";
import { Timeline } from "../../components/Timeline/Timeline";
import { MainArea } from "./Main.style";

export const Main = () => {
  return (
    <MainArea>
      <About />
      <Timeline/>
    </MainArea>
  );
};
