import styled from "styled-components";
import Theme from "theme/Theme";

const { colors, fonts, spaces, breakPoints } = Theme;

export const MVV = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  font-family: "Stick No Bills", sans-serif;
  width: 100%;
  margin-top: ${spaces.m};

  @media (max-width: ${breakPoints.tablet}) {
    flex-direction: column;
  }
`;

export const BoxPrimary = styled.div<{ isOdd: boolean }>`
  width: 33.333%;
  height: 16rem;
  padding: 4rem;
  background-color: ${({ isOdd }) =>
    isOdd ? colors.secondary : colors.terciary};

  @media (max-width: ${breakPoints.tablet}) {
    width: 100%;
    padding: ${spaces.none};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const BoxTitle = styled.div`
  font-size: ${fonts.size.large};
  font-weight: ${fonts.weight.bold};
`;

export const BoxText = styled.div`
  font-size: ${fonts.size.large};
`;

export const Title = styled.span`
  color: ${colors.black};
  font-size: ${fonts.size.large};
  font-weight: ${fonts.weight.bold};
  font-family: "Stick No Bills", sans-serif;
`;

export const Container = styled.div`
  margin-top: 8rem;
`;
