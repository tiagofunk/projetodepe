import {
  BoxArea,
  BoxImage,
  Box,
  BoxText,
  BoxTitle,
  Container,
  Title,
} from "./Professionals.style";
import foto_luana from "assets/img/professionals/luana.png";

export const Professionals = () => {
  const professionalsList = [
    { photo: foto_luana, name: "Luana", expertisse: "Idealizadora" },
    { photo: foto_luana, name: "Luana", expertisse: "Advogada" },
    { photo: foto_luana, name: "Luana", expertisse: "Psicologa" },
    { photo: foto_luana, name: "Luana", expertisse: "Médica" },
    { photo: foto_luana, name: "Luana", expertisse: "Assitente social" },
    { photo: foto_luana, name: "Luana", expertisse: "Enfermeira" },
    { photo: foto_luana, name: "Luana", expertisse: "Psiquiatra" },
    { photo: foto_luana, name: "Luana", expertisse: "Administradora" },
  ];

  return (
    <Container>
      <Title>Profissionais</Title>
      <BoxArea>
        {professionalsList.map((person, index) => (
          <Box isEven={index % 2 === 0}>
            <BoxImage src={person.photo} alt={""} />
            <BoxTitle>{person.name}</BoxTitle>
            <BoxText>{person.expertisse}</BoxText>
          </Box>
        ))}
      </BoxArea>
    </Container>
  );
};
