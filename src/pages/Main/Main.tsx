import { Activities } from "components/Activities/Activities";
import React from "react";
import { About } from "../../components/About/About";
import { MainArea } from "./Main.style";

export const Main = () => {
  return (
    <MainArea>
      <About />
      <Activities/>
    </MainArea>
  );
};
