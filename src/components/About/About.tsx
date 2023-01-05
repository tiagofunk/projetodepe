import {
  Container,
  Title,
  Text,
  Imagem,
  ConjuntoTextoComImagem,
} from "./About.style";
import foto_luana from "../../assets/img/foto_luana.jpeg";

export const About = () => {
  return (
    <Container>
      <Title>O que é o projeto de pé?</Title>
      <ConjuntoTextoComImagem>
        <div>
          <Text>O De pé é sobretudo um projeto de desenvolvimento humano!</Text>
          <Text>
            Observando a ausência de medidas, projetos e informações
            biopsicossociais por parte do governo e o impacto que isto gera
            desaguando diretamente na marginalização e a exclusão de
            possiblidades de qualidade de vida no indivíduo e na comunidade.
          </Text>
          <Text>
            A princípio era um projeto de atendimento psicológico individual
            gratuito nas comunidades. A experiência prática demonstrou a
            necessidade de outros profissionais e atividades.
          </Text>
          <Text>
            Baseado na vivência em comunidades e no estágio no Criaad percebi
            que somente acompanhamento terapêutico não dá conta das demandas
            vividas por essa população.
          </Text>
        </div>
        <Imagem src={foto_luana} alt="Braços de uma mulher com tatuagens" />
      </ConjuntoTextoComImagem>
      <Text>
        Visto que muitos entraves se devem a questões básicas de alimentação,
        transporte, atendimento básico de saúde e documentação por exemplo.
        Promovendo de saúde mental e desenvolvimento da população. Detectando e
        potencializando as características do indivíduo e da
        comunidade,agregaremos valor a sua existência.
      </Text>
    </Container>
  );
};
