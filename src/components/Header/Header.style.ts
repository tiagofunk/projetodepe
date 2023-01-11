import { Button } from "antd";
import { HeartFilled } from "@ant-design/icons/lib/icons";
import styled from "styled-components";
import Theme from "theme/Theme";

const { colors, fonts, spaces } = Theme;

export const HeaderContainer = styled.div`
  align-items: center;
  background-color: ${colors.primary};
  display: flex;
  justify-content: space-between;
  height: 7rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1001;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.span`
  color: ${colors.white};
  font-size: 3rem;
  font-weight: ${fonts.weight.medium};
  font-family: "Stick No Bills", sans-serif;
`;

export const StyledButton = styled(Button)`
  font-size: ${fonts.size.default};
  font-weight: 500;
  height: calc(100% - ${spaces.m} * 2);
  margin: ${spaces.m};
  color: ${colors.primary};
`;

export const HeartIcon = styled(HeartFilled)`
  margin-right: ${spaces.xs};
  fill: ${colors.primary};
`;

export const ButtonsContainer = styled.div`
  display: flex;
`; 
