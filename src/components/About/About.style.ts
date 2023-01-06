import styled, { css } from "styled-components";
import Theme from "theme/Theme";

const { colors, fonts, spaces } = Theme;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 15rem;
`;

export const ConjuntoTextoComImagem = styled.div`
  display: flex;
`;

export const Title = styled.span`
  color: ${colors.black};
  font-size: ${fonts.size.large};
  font-weight: ${fonts.weight.bold};
  font-family: "Stick No Bills", sans-serif;
  margin-bottom: ${spaces.mp};
`;

export const Text = styled.span`
  display: block;
  color: ${colors.black};
  font-size: ${fonts.size.default};
  font-weight: ${fonts.weight.bold};
  font-family: "Stick No Bills", sans-serif;
  text-align: justify;
  margin-bottom: ${spaces.s};
`;

export const Image = styled.img`
  width: 32rem;
  height: 25rem;
  margin-left: ${spaces.s};
  margin-bottom: ${spaces.s};
`;

export const MVV = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  font-family: "Stick No Bills", sans-serif;
  width: 100%;
  background-color: red;
  margin-top: ${spaces.xl};
`;

const StyleBox = css`
  width: 33.333%;
  height: 16rem;
  padding: 4rem;
`;

export const BoxPrimary = styled.div`
  ${StyleBox}
  background-color: ${colors.secondary};
`;

export const BoxSecondary = styled.div`
  ${StyleBox}
  background-color: ${colors.terciary};
`;

export const BoxTitle = styled.div`
  font-size: ${fonts.size.large};
  font-weight: ${fonts.weight.bold};
`;

export const BoxText = styled.div`
  font-size: ${fonts.size.large};
`;
