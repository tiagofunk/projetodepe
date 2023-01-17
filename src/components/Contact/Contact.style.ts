import styled from "styled-components";
import Theme from "theme/Theme";
import { Input } from "antd";

const { colors, fonts, spaces } = Theme;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: ${spaces.xl};
`;

export const Title = styled.div`
  color: ${colors.black};
  font-size: ${fonts.size.large};
  font-weight: ${fonts.weight.bold};
  font-family: "Stick No Bills", sans-serif;
  margin-bottom: ${spaces.mp};
`;

export const Text = styled.div`
  display: block;
  color: ${colors.black};
  font-size: ${fonts.size.smallLarge};
  font-weight: ${fonts.weight.bold};
  font-family: "Stick No Bills", sans-serif;
  text-align: justify;
  margin: ${spaces.mp} ${spaces.m} ${spaces.xxs} ${spaces.mp};
`;

export const VerticalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: ${colors.secondary};
  width: 100%;
`;

export const HorizontalBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const MyInput = styled(Input)`
  width: 35rem;
  height: 3rem;
  font-size: ${fonts.size.smallLarge};
  margin: ${spaces.none} ${spaces.m} ${spaces.none} ${spaces.m};
`;

export const MessageInput = styled.textarea`
  width: 74rem;
  height: 15rem;
  font-size: ${fonts.size.smallLarge};
  margin: ${spaces.none} ${spaces.m} ${spaces.none} ${spaces.m};
`;

export const Button = styled.button`
  background-color: ${colors.buttonColor};
  color: ${colors.black};
  margin: ${spaces.mp} ${spaces.none} ${spaces.l} ${spaces.m};
  width: 75rem;
  height: 7rem;
  font-size: ${fonts.size.smallLarge};
  border: none;
`;
