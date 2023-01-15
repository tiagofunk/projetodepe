import {
  Container,
  Title,
  Text,
  Image,
  ConjuntoTextoComImagem,
  MVV,
  BoxPrimary,
  BoxSecondary,
  BoxTitle,
  BoxText,
} from "./About.style";
import foto_luana from "assets/img/about/foto_luana.jpeg";

export const About = () => {
  const TITLE = "O que é o projeto de pé?";
  const TEXT = [
    "O De pé é sobretudo um projeto de desenvolvimento humano!",
    "Observando a ausência de medidas, projetos e informações biopsicossociais por parte do governo e o impacto que isto gera desaguando diretamente na marginalização e a exclusão de possiblidades de qualidade de vida no indivíduo e na comunidade.",
    "A princípio era um projeto de atendimento psicológico individual gratuito nas comunidades. A experiência prática demonstrou a necessidade de outros profissionais e atividades.",
    "Baseado na vivência em comunidades e no estágio no Criaad percebi que somente acompanhamento terapêutico não dá conta das demandas vividas por essa população.",
  ];
  const TEXT_ALONE =
    "Visto que muitos entraves se devem a questões básicas de alimentação, transporte, atendimento básico de saúde e documentação por exemplo. Promovendo de saúde mental e desenvolvimento da população. Detectando e potencializando as características do indivíduo e da comunidade,agregaremos valor a sua existência.";

  const MISSION = "Missão";
  const MISSION_TEXT = "Gerar saúde mental na favela.";

  const VISION = "Visão";
  const VISION_TEXT =
    "Ser uma instituição de excelência em tratar, informar e formar a favela.";

  const VALUES = "Valores";
  const VALUES_TEXT =
    "Determinação, empatia, parcerias, esperança e principalmente Fé no outro.";

    const IMAGE_CAPTION = "Braços de uma mulher com tatuagens";

  return (
    <Container>
      <Title>{TITLE}</Title>
      <ConjuntoTextoComImagem>
        <div>
          {TEXT.map((text, index) => (
            <Text key={index}>{text}</Text>
          ))}
        </div>
        <Image src={foto_luana} alt={IMAGE_CAPTION} />
      </ConjuntoTextoComImagem>
      <Text>{TEXT_ALONE}</Text>

      <MVV>
        <BoxPrimary>
          <BoxTitle>{MISSION}</BoxTitle>
          <BoxText>{MISSION_TEXT}</BoxText>
        </BoxPrimary>
        <BoxSecondary>
          <BoxTitle>{VISION}</BoxTitle>
          <BoxText>{VISION_TEXT}</BoxText>
        </BoxSecondary>
        <BoxPrimary>
          <BoxTitle>{VALUES}</BoxTitle>
          <BoxText>{VALUES_TEXT}</BoxText>
        </BoxPrimary>
      </MVV>
    </Container>
  );
};
