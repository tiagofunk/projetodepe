import { Timeline } from "antd";
import styled from "styled-components";
import Theme from "theme/Theme";

const { colors, fonts, spaces } = Theme;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-size: ${fonts.size.default};
  font-weight: ${fonts.weight.bold};
  font-family: "Stick No Bills", sans-serif;
  text-align: center;
  margin-bottom: ${spaces.s};
`;

export const ScrollableContainer = styled.div`
  width: 100%;
  height: 25rem;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const Background = styled.div``;

export const StyledTimelineAnt = styled(Timeline)`
  .ant-collapse-content-box {
    padding: ${spaces.none};
  }
`;