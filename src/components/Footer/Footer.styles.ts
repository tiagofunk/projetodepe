import styled, { css } from "styled-components";
import {
  InstagramOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";

import Theme from "theme/Theme";

const { colors, spaces, fonts, breakPoints } = Theme;

const image = require("assets/img/footer/city.png");

export const FooterContainer = styled.div`
  background-color: rgba(46, 28, 18, 0.9);
  height: 45rem;
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 6rem;
`;

export const BackgroundImage = styled.div`
  background: url(${image}) no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const InfoArea = styled.div`
  max-width: 30rem;
  min-width: 30rem;
  margin-top: 3rem;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: ${spaces.m};

  @media (max-width: ${breakPoints.tablet}) {
    width: 100%;
  }
`;

const fontStyle = css`
  color: ${colors.white};
  font-size: 1.4rem;
`;

export const Text = styled.span`
  ${fontStyle}
`;

export const Title = styled.span`
  ${fontStyle}
  font-weight: bold;
  margin-bottom: ${spaces.s};
`;

const imageStyle = css`
  svg {
    fill: ${colors.white};
    margin-right: ${spaces.xs};
    font-size: ${fonts.size.default};
  }
`;

export const InstagramImage = styled(InstagramOutlined)`
  ${imageStyle}
`;

export const PhoneImage = styled(PhoneOutlined)`
  ${imageStyle}
`;

export const EmailImage = styled(MailOutlined)`
  ${imageStyle}
`;

export const LineContent = styled.div`
  margin-bottom: ${spaces.s};
  text-align: start;
`;

export const InnerContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 80rem;
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: ${breakPoints.tablet}) {
    justify-content: center;
  }
`;

export const StyledIframe = styled.iframe`
  margin-left: ${spaces.l};

  @media (max-width: ${breakPoints.tablet}) {
    display: none;
  }
`;
