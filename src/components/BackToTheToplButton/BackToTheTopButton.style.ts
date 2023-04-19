import styled from "styled-components";
import Theme from "theme/Theme";

const { spaces } = Theme;

export const ScrollButton = styled.div`
  position: fixed;
  cursor: pointer;
  bottom: calc(${spaces.mp} + 7rem);
  right: 4.2rem;
  border-radius: 100%;
  height: fit-content;
  z-index: 100;
`;

export const Image = styled.img`
    width: 4.8rem;
    height: 4.8rem;
`;