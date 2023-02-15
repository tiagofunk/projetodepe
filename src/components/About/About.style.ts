import { Collapse } from "antd";
import styled, { css } from "styled-components";
import Theme from "theme/Theme";

const { colors, fonts, spaces } = Theme;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90rem;
  margin-left: auto;
  margin-right: auto;
  background-color: ${colors.secondary};
  padding: ${spaces.sp};
  border-radius: 0.6rem;
  height: fit-content;
`;

export const ConjuntoTextoComImagem = styled.div``;

export const Title = styled.span`
  color: ${colors.black};
  font-size: ${fonts.size.large};
  font-weight: ${fonts.weight.bold};
  text-align: start;
  font-family: "Stick No Bills", sans-serif;
  margin-bottom: ${spaces.mp};
  width: 100%;
  display: block;
`;

export const Text = styled.p`
  display: block;
  color: ${colors.black};
  font-size: ${fonts.size.default};
  font-family: "Stick No Bills", sans-serif;
  text-align: justify;
  margin-bottom: 2rem;
  margin-top: ${spaces.none};
  text-indent: 3.2rem;
`;

export const Image = styled.img`
  width: 32rem;
  height: 25rem;
  margin-left: ${spaces.sp};
  float: right;
`;

export const StyledCollapse = styled(Collapse)`
  width: 100%;
  .ant-collapse-header-text {
    text-align: start;
    font-weight: bold;
  }
`;
