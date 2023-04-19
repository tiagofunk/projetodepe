import { Button, Menu } from "antd";
import { HeartFilled, DownloadOutlined } from "@ant-design/icons/lib/icons";
import styled from "styled-components";
import Theme from "theme/Theme";
import { Link } from "react-router-dom";

const { colors, fonts, spaces, breakPoints } = Theme;

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

  @media (max-width: ${breakPoints.tablet}) {
    justify-content: flex-start;
  }
`;

export const StyledLabel = styled.span`
  @media (max-width: ${breakPoints.tablet}) {
    display: block;
    color: ${colors.black};
    margin-top: ${spaces.mp};
  }
`;

export const StyledOption = styled(Link)`
  @media (max-width: ${breakPoints.tablet}) {
    display: block;
    color: ${colors.black};
    margin-top: ${spaces.mp};
  }
`;

export const Navigation = styled(Menu)`
  &&& {
    height: 100%;
    background-color: ${colors.primary};
    display: flex;
    flex-direction: row;
    margin-right: ${spaces.sp};

    .ant-menu-item-group {
      background-color: red !important;
    }

    .ant-menu-item-selected::after {
      border-bottom: 0.3rem solid ${colors.secondary};
    }

    .ant-menu-item-only-child:hover::after {
      border-bottom: 0.3rem solid ${colors.secondary};
    }

    .ant-menu-submenu-active::after {
      border-bottom: 0.3rem solid ${colors.secondary};
    }

    .ant-menu-submenu-title {
      display: flex;
    }

    li {
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding: ${spaces.none};
    }

    span {
      font-size: 1.8rem;
      font-weight: bold;
      color: ${colors.white};
      padding: ${spaces.s} 2rem ${spaces.none} 2rem;
    }

    @media (max-width: ${breakPoints.tablet}) {
      display: none;
    }
  }
`;

export const Tab = styled.div`
  height: 100%;
`;

export const Title = styled(Link)`
  color: ${colors.white};
  margin-left: ${spaces.m};
  font-size: 3rem;
  font-weight: ${fonts.weight.medium};
  font-family: "Stick No Bills", sans-serif;
  text-decoration: none;
  cursor: pointer;
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

export const DownloadIcon = styled(DownloadOutlined)`
  fill: black;
`;

export const StyledLink = styled.a`
  margin-left: ${spaces.sp};
  color: black;
  margin-top: ${spaces.mp};
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;
