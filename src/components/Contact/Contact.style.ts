import styled, { css } from "styled-components";
import Theme from "theme/Theme";
import { Input, Button, Select } from "antd";
import TextArea from "antd/es/input/TextArea";

const { colors, fonts, spaces } = Theme;

export const Container = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.div`
  color: ${colors.black};
  font-size: ${fonts.size.large};
  font-weight: ${fonts.weight.bold};
  font-family: "Stick No Bills", sans-serif;
`;

export const VerticalBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.secondary};
  width: 100%;
`;

export const HorizontalBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const Text = styled.div`
  display: block;
  color: ${colors.black};
  font-size: ${fonts.size.subLarge};
  font-family: "Stick No Bills", sans-serif;
  text-align: justify;
  margin: ${spaces.mp} ${spaces.m} ${spaces.xxs} ${spaces.mp};
`;

export const ErrorText = styled.div`
  display: block;
  color: red;
  font-size: ${fonts.size.subLarge};
  font-weight: ${fonts.weight.bold};
  font-family: "Stick No Bills", sans-serif;
  text-align: justify;
  margin: ${spaces.none} ${spaces.m} ${spaces.xxs} ${spaces.mp};
`;

const InputArea = css`
  font-size: ${fonts.size.subLarge};
  margin: ${spaces.none} ${spaces.m} ${spaces.s} ${spaces.m};
  width: calc(100% - ${spaces.m}*2);
  height: 3.6rem;
`;
export const MyInput = styled(Input)`
  ${InputArea}
`;

export const MySelect = styled(Select)`
  &&& {
    ${InputArea}

    .ant-select-selector {
      height: 3.6rem;
    }
  }
`;

export const MessageInput = styled(TextArea)`
  ${InputArea}
`;

export const MyButton = styled(Button)`
  &&& {
    ${InputArea}

    background-color: ${colors.action};
    color: ${colors.black};
    margin-top: ${spaces.m};
    margin-bottom: ${spaces.m};
    height: 7rem;
    border: none;
    font-weight: bold;
  }
`;

export const Form = styled.form`
  width: 100%;
`;
