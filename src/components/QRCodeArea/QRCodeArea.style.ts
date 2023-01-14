import styled, { css } from "styled-components";
import Theme from "theme/Theme";

const { colors, fonts, spaces } = Theme;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: ${spaces.xl};
`;

export const Area = styled.span``;

export const Title = styled.div`
  color: ${colors.black};
  font-size: ${fonts.size.large};
  font-weight: ${fonts.weight.bold};
  font-family: "Stick No Bills", sans-serif;
  margin-bottom: ${spaces.mp};
  text-align: left;
`;

const Text = css`
  display: block;
  color: ${colors.black};
  font-size: ${fonts.size.default};
  font-family: "Stick No Bills", sans-serif;
`;

export const TextRegular = styled.div`
  ${Text}
  font-weight: ${fonts.weight.regular};
  text-align: left;
  margin-top: ${spaces.m};
`;

export const TextBold = styled.div`
  ${Text}
  font-weight: ${fonts.weight.bold};
  text-align: left;
  margin-top: ${spaces.m};
`;

export const TextPixKey = styled.div`
    ${Text}
    font-weight: ${fonts.weight.regular};
    text-align: center;
`;

export const Image = styled.img`
  width: 26rem;
  height: 26rem;
  margin-left: ${spaces.m};
  margin-bottom: ${spaces.s};
`;