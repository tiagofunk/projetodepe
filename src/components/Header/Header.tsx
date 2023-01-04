import {
  Container,
  HeaderContainer,
  HeartIcon,
  StyledButton,
  Title,
} from "./Header.style";
import { Menu } from "./Menu/Menu";

export const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Menu />
        <Title>Projeto de Pé</Title>
      </Container>
      <StyledButton>
        <HeartIcon />
        Doação por pix
      </StyledButton>
    </HeaderContainer>
  );
};
