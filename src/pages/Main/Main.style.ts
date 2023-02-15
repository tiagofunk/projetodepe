import styled from "styled-components";

const image = require("assets/img/mainSection/cidadededeus.jpg");

export const MainArea = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 90rem;
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  gap: 8rem;
`;

export const Container = styled.div``;

export const MainSection = styled.div`
  height: calc(100vh - 7rem);
  position: relative;
  display: flex;
  align-items: center;
`;

export const BackgroundImage = styled.div`
  background: url(${image}) no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 70%;
`;
