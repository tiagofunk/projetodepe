import styled from "styled-components";
import Theme from "theme/Theme";

const { breakPoints } = Theme;


export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 7rem;
  width: 90rem;
  height: calc(100vh - 20rem);
  display: flex;
  gap: 7rem;

  @media (max-width: ${breakPoints.mobile}) {
    width: 100%;
    height: auto;
  }

`;
