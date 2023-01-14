import styled from "styled-components";
import Theme from "theme/Theme";

const { spaces } = Theme;

export const Heading = styled.h1`
  text-align: center;
  color: green;
`;

export const Content = styled.div`
  overflow-y: scroll;
  height: 250rem;
`;

export const Button = styled.div`
  position: fixed;
  bottom: calc( 0.85*${spaces.mp} );
  right: calc( 3*${spaces.lp} );
  border-radius: 100%;
  height: fit-content;
  z-index: 100;
  border: none;
  color: green;
`;

export const Image = styled.img`
    width: 5.4rem;
    height: 5.6rem;
`;