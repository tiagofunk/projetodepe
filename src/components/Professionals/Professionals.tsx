import {
  BoxArea,
  BoxImage,
  BoxPrimary,
  BoxSecondary,
  BoxText,
  BoxTitle,
  Container,
  Title,
} from "./Professionals.style";
import foto_luana from "assets/img/professionals/luana.png";

export const Professionals = () => {
	
  return (
    <Container>
      <Title>Profissionais</Title>
      <BoxArea>
        <BoxPrimary>
          <BoxImage src={foto_luana} alt={""} />
          <BoxTitle>Luana</BoxTitle>
          <BoxText>Idealizadora</BoxText>
        </BoxPrimary>
        <BoxSecondary>
          <BoxImage src={foto_luana} alt={""} />
          <BoxTitle>Luana</BoxTitle>
          <BoxText>Idealizadora</BoxText>
        </BoxSecondary>
        <BoxPrimary>
          <BoxImage src={foto_luana} alt={""} />
          <BoxTitle>Luana</BoxTitle>
          <BoxText>Idealizadora</BoxText>
        </BoxPrimary>
      </BoxArea>
      <BoxArea>
        <BoxPrimary>
          <BoxImage src={foto_luana} alt={""} />
          <BoxTitle>Luana</BoxTitle>
          <BoxText>Idealizadora</BoxText>
        </BoxPrimary>
        <BoxSecondary>
          <BoxImage src={foto_luana} alt={""} />
          <BoxTitle>Luana</BoxTitle>
          <BoxText>Idealizadora</BoxText>
        </BoxSecondary>
      </BoxArea>
    </Container>
  );
};
