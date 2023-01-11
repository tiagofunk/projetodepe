import React from "react";
import { About } from "../../components/About/About";
import { MainArea } from "./Main.style";
import { Timeline } from "../../components/Timeline/Timeline";

export const Main = () => {
  return (
    <MainArea>
      <About />
      <Timeline/>
    </MainArea>
  );
};
