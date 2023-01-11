import { WhatsAppOutlined } from "@ant-design/icons/lib/icons";
import { Button } from "antd";
import styled, { css } from "styled-components";
import Theme from "theme/Theme";

const { colors, spaces, fonts } = Theme;

interface ContainerProps {
  variant: "icon" | "button";
}

const iconStyle = css`
  position: fixed;
  bottom: ${spaces.mp};
  right: ${spaces.m};
  border-radius: 100%;
  padding: ${spaces.sp};
  background-color: #4dc247;
  height: fit-content;
`;

const buttonStyle = css`
  font-size: ${fonts.size.default};
  font-weight: 500;
  height: calc(100% - ${spaces.m} * 2);
  margin: ${spaces.m};
  margin-right: ${spaces.none};
  color: ${colors.primary};
`;

export const Container = styled(Button)<ContainerProps>`
  ${({ variant }) => (variant === "icon" ? iconStyle : buttonStyle)}
`;

export const WhatsAppIcon = styled(WhatsAppOutlined)`
  font-size: 3rem;
  svg {
    fill: ${colors.white};
  }
`;

export const WhatsAppSmallIcon = styled(WhatsAppOutlined)`
  margin-right: ${spaces.s};
  svg {
    fill: ${colors.primary};
  }
`;
