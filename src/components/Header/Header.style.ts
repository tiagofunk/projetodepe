import styled from "styled-components";
import Theme from "theme/Theme";

const { colors, fonts } = Theme;

export const HeaderContainer = styled.div`
    align-items: center;
    background-color: ${colors.primary};
    display: flex;
    height: 5rem;
`;

export const Title = styled.span`
    color: ${colors.white};
    font-size: 2rem;
    /* font-weight: ${fonts.weight.semibold}; */
    font-family: 'Stick No Bills', sans-serif;
`;
