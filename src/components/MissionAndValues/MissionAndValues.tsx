import { BoxPrimary, BoxText, BoxTitle, Container, MVV, Title } from "./MissionAndValues.styles";

const MissionAndValues = () => {
  const content = [
    { mission: "Missão", text: "Gerar saúde mental na favela." },
    {
      mission: "Visão",
      text: "Ser uma instituição de excelência em tratar, informar e formar a favela.",
    },
    {
      mission: "Valores",
      text: "Determinação, empatia, parcerias, esperança e principalmente Fé no outro.",
    },
  ];

  return (
    <Container>
      <Title>Missão, visao e valores</Title>
      <MVV>
        {content.map((item, index) => (
          <BoxPrimary isOdd={index % 2 !== 0} key={index}>
            <BoxTitle>{item.mission}</BoxTitle>
            <BoxText>{item.text}</BoxText>
          </BoxPrimary>
        ))}
      </MVV>
    </Container>
  );
};

export default MissionAndValues;
