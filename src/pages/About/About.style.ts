import styled from "styled-components";
import Theme from "theme/Theme";

const { breakPoints, spaces } = Theme;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 90rem;
  display: flex;
  gap: 7rem;
  flex-direction: column;
  height: 100%;

  @media (max-width: ${breakPoints.tablet}) {
    width: calc(100% - ${spaces.sp});
    padding: ${spaces.none} ${spaces.none} ${spaces.none} ${spaces.sp};
  }
`;
