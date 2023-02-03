import { Whatsapp } from "components/Whatsapp/Whatsapp";
import { RoutePaths } from "enums/RoutePaths";
import { useNavigate } from "react-router";
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
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Container>
        <Menu />
        <Title onClick={() => navigate(RoutePaths.HOME)}>Instituto De Pé</Title>
      </Container>
      <ButtonsContainer>
        <Whatsapp variant="button" />
        <StyledButton onClick={() => navigate(RoutePaths.DONATIONS)}>
          <HeartIcon />
          Doação por pix
        </StyledButton>
      </ButtonsContainer>
    </HeaderContainer>
  );
};
