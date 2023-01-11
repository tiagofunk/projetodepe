import { Whatsapp } from "components/Whatsapp/Whatsapp";
import {
  ButtonsContainer,
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
      <ButtonsContainer>
        <Whatsapp variant="button" />
        <StyledButton>
          <HeartIcon />
          Doação por pix
        </StyledButton>
      </ButtonsContainer>
    </HeaderContainer>
  );
};
