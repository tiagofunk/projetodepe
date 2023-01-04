import { MenuOutlined } from "@ant-design/icons/lib/icons";
import styled from "styled-components";
import Theme from "theme/Theme";

const { colors } = Theme;

export const MenuContainer = styled.div`
  padding: 2rem;
  padding-left: 3rem;
`;

export const MenuIcon = styled(MenuOutlined)`
  svg {
    fill: ${colors.white};
    height: 2rem;
    width: 3rem;
  }
`;
