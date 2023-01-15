import styled from "styled-components";
import Theme from "theme/Theme";

const { colors, fonts, spaces } = Theme;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${spaces.xl};
`;

export const AllTexts = styled.div`
    padding: 2rem;

`;
export const Title = styled.span`
  color: ${colors.black};
  font-size: ${fonts.size.large};
  font-weight: ${fonts.weight.bold};
  font-family: "Stick No Bills", sans-serif;
  margin-bottom: ${spaces.mp};
`;

export const Text = styled.span`
  display: block;
  color: ${colors.black};
  font-size: ${fonts.size.default};
  font-weight: ${fonts.weight.bold};
  font-family: "Stick No Bills", sans-serif;
  text-align: justify;
  margin-bottom: ${spaces.s};
`;

export const AllImages = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ImageBook = styled.img`
    width: 14rem;
    height: 20rem;
    margin-right: 5rem;
`;
export const ImagePerson = styled.img`
    width: 30rem;
    height: 20rem;
`;