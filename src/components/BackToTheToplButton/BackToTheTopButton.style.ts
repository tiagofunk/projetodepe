import styled from "styled-components";
import Theme from "theme/Theme";

const { spaces } = Theme;

export const ScrollButton = styled.div`
  position: fixed;
  bottom: calc( 0.85*${spaces.mp} );
  right: calc( 3*${spaces.lp} );
  border-radius: 100%;
  height: fit-content;
  z-index: 100;
`;

export const Image = styled.img`
    width: 5.4rem;
    height: 5.6rem;
`;