import styled, { css } from "styled-components";
import Theme from "theme/Theme";

const { colors, fonts, spaces } = Theme;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${spaces.xl};
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
`;

const StyleBox = css`
  width: 20%;
  padding: 4rem;
  border-bottom: 1px solid ${colors.primary};
`;

export interface BoxProps {
  isEven: boolean;
}

export const Box = styled.span<BoxProps>`
  ${StyleBox}
  background-color: ${({isEven}) => isEven ? colors.secondary : colors.terciary };
`;

export const BoxImage = styled.img`
  width: 10rem;
  height: 10rem;
  margin-bottom: ${spaces.s};
`;

export const BoxTitle = styled.div`
  font-size: ${fonts.size.large};
  font-weight: ${fonts.weight.bold};
`;

export const BoxText = styled.div`
  font-size: ${fonts.size.large};
`;