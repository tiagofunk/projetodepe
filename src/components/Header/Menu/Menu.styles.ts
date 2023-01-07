import { MenuOutlined, CloseOutlined } from "@ant-design/icons/lib/icons";
import styled, { css } from "styled-components";
import Theme from "theme/Theme";

const { colors, spaces } = Theme;

export const MenuContainer = styled.div`
  padding: ${spaces.mp};
  padding-left: ${spaces.l};
`;

const imgStyle = css`
  svg {
    fill: ${colors.white};
    height: 2rem;
    width: 3rem;
  }
`;

export const MenuIcon = styled(MenuOutlined)`
  ${imgStyle}
`;

export const CloseMenuIcon = styled(CloseOutlined)`
  ${imgStyle}
`;
