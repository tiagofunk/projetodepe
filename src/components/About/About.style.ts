import styled from "styled-components";
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

export const Imagem = styled.img`
  width: 32rem;
  height: 25rem;
  margin-left: ${spaces.s};
  margin-bottom: ${spaces.s};
`;
