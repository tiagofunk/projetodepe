import styled from "styled-components";
import Theme from "theme/Theme";

const { colors, fonts, spaces } = Theme;

export const MVV = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  font-family: "Stick No Bills", sans-serif;
  width: 100%;
  margin-top: ${spaces.xl};
`;

export const BoxPrimary = styled.div<{ isOdd: boolean }>`
  width: 33.333%;
  height: 16rem;
  padding: 4rem;
  background-color: ${({ isOdd }) =>
    isOdd ? colors.secondary : colors.terciary};
`;

export const BoxTitle = styled.div`
  font-size: ${fonts.size.large};
  font-weight: ${fonts.weight.bold};
`;

export const BoxText = styled.div`
  font-size: ${fonts.size.large};
`;
