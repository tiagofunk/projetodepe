import styled, { css } from "styled-components";
import Theme from "theme/Theme";

const { colors, fonts, spaces, breakPoints } = Theme;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
  width: 90rem;
  margin-right: auto;
  margin-left: auto;
  @media (max-width: ${breakPoints.mobile}) {
    width: calc(100% - 4rem);
  }
`;

export const Title = styled.span`
  color: ${colors.black};
  font-size: ${fonts.size.large};
  font-weight: ${fonts.weight.bold};
  font-family: "Stick No Bills", sans-serif;
  margin-bottom: ${spaces.mp};
`;

export const BoxArea = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Stick No Bills", sans-serif;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  @media (max-width: ${breakPoints.mobile}) {
    flex-direction: column;
  }
`;

const StyleBox = css`
  width: 20%;
  padding: 4rem;
  border-bottom: 1px solid ${colors.primary};
  @media (max-width: ${breakPoints.mobile}) {
    width: 100%;
    padding: 1rem;
  }
`;

export interface BoxProps {
  isEven: boolean;
}

export const Box = styled.span<BoxProps>`
  ${StyleBox}
  background-color: ${({ isEven }) =>
    isEven ? colors.secondary : colors.terciary};
`;

export const BoxImage = styled.img`
  width: 10rem;
  height: 10rem;
  margin-bottom: ${spaces.s};
  border-radius: 50%;
`;

export const BoxTitle = styled.div`
  font-size: ${fonts.size.large};
  font-weight: ${fonts.weight.bold};
`;

export const BoxText = styled.div`
  font-size: ${fonts.size.large};
`;
