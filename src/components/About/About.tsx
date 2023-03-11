import {
  Container,
  Title,
  Text,
  Image,
  ConjuntoTextoComImagem,
  ContentArea,
} from "./About.style";
import foto_luana from "assets/img/about/foto_luana.jpeg";

export const About = () => {
  const TITLE = "O que é o instituto De Pé?";
  const TEXT = [
    "O De Pé é sobretudo um projeto de desenvolvimento humano que visa prover saúde mental aos moradores da Cidade de Deus.",
    "No início, era um projeto de atendimento psicológico individual gratuito nas comunidades, mas a experiência prática demonstrou que apenas acompanhamento terapêutico não é o suficiente para atender as demandas vividas por essa população.",
    "Observando a ausência de medidas, projetos e informações por parte do governo na Cidade de Deus, atualmente o projeto busca tratar, educar e profissionalizar o maior número de pessoas possíveis, assim como atrair voluntários com vontade de ajudar a comunidade.",
  ];

  const IMAGE_CAPTION = "Braços de uma mulher com tatuagens";

  return (
    <Container>
      <ConjuntoTextoComImagem>
        <Title>{TITLE}</Title>
        <ContentArea>
          <Image src={foto_luana} alt={IMAGE_CAPTION} />
          <div>
            {TEXT.map((text, index) => (
              <Text key={index}>{text}</Text>
            ))}
          </div>
        </ContentArea>
      </ConjuntoTextoComImagem>
    </Container>
  );
};
