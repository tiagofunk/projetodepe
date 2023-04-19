import {
  Container,
  Text,
  Title,
  ScrollableContainer,
  Background,
  StyledTimelineAnt,
} from "./Timeline.style";
import { Timeline as TimelineAnt } from "antd";

export const Timeline = () => {
  const TIMELINE_TEXT = [
    ["	09/08/21	","	 Manuscrito do  que na época nasceu \"voando alto\"	"],
["	16/08/21	","	 Visita a casa do artista,na esperança de mostrar o projeto, consegui ser recebida pelo empresário, mas sem maiores desdobramentos.	"],
["	01/09/21	","	 Primeira reunião, convite a Camila Pires.	"],
["	24/09/21	","	 Clarice pires entra no projeto.	"],
["	14/10/21	","	 Naná entra no projeto. ( Ana Carolina Viola, advogada)	"],
["	19/10/21	","	 Primeira reunião com Luiza Serpa do instituto Phi, o Phi entra no projeto.	"],
["	  31/09/21 	","	 Paula Viola ( Doula e designer) entra no projeto.	"],
["	08/10/21	","	 Alterações no projeto original, transição para o De pé.	"],
["	22/10/21	","	 Criação da logo do projeto.	"],
["	11/11/21	","	 Luana: Eu tenho algumas certezas na minha  vida , o *DE PÉ* é a maior delas. 	"],
["	18/01/22	","	 Deck com informações sobre a equipe fica pronta.	"],
["	19/01/22	","	 Gabriela Santos entrou no projeto ( advogada especialista em direito autoral/ propriedade intelectual).	"],
["	12/03/22	","	 Estatuto do projeto fica pronto.	"],
["	25/03/22	","	 Psiquiatra Leonardo Fonseca entra no projeto.	"],
["	04/04/22	","	 Chegada na Cidade de Deus.	"],
["	07/04/22	","	 Priscila Santos (assistente social) entra no projeto.	"],
["	15/04/22	","	 Participação do EXPO FAVELA 2022.	"],
["	17/05/22	","	 Reunião e Apresentação do projeto para o NuBank e o Instituto Phi.	"],
["	17/05/22	","	 Criação da visão, missão e valores.	"],
["	21/05/22	","	 Participação no Fórum Rio 2022.	"],
["	26/05/22	","	 Reunião com Raul Santiago do conta Black.	"],
["	31/05/22	","	 Reunião com Thiago Cunha do gabinete (?).	"],
["	08/06/22	","	 Apresentação do Projeto para Marcos Uchôa.	"],
["	14/06/22	","	 Reunião com pessoal do NuBank.	"],
["	21/06/22	","	 Marcos Uchôa Visita a Cidade de Deus.	"],
["	23/06/22	","	 Reunião com a Luiza do Instituto Phi.	"],
["	27/06/22	","	 Encontro com a deputada Tainá de Paula.	"],
["	01/07/22	","	 Reunião com Sérgio All, do conta Black.	"],
["	06/07/22	","	 Grasi (Psicológa) entra na equipe.	"],
["	20/07/22	","	 Inicio dos atendimentos na Cidade de Deus.	"],
["	10/08/22	","	 Reunião do Posto de Saúde da Cidade de Deus.	"],
["	06/09/22	","	 Entra na equipe o profissional de dependência química (qual o nome?).	"],
["	06/10/22	","	 Matéria sobre o Projeto De Pé no portal UOL.	"],

  ];

  return (
    <Container>
      <Title>Linha do tempo</Title>
      <ScrollableContainer>
        <Background>
          <StyledTimelineAnt mode="alternate" style={{ padding: 0 }}>
            {TIMELINE_TEXT.map((text, index) => (
              <TimelineAnt.Item color="black" key={index}>
                <Text>
                  {text[0]}
                  <br />
                  {text[1]}
                </Text>
              </TimelineAnt.Item>
            ))}
          </StyledTimelineAnt>
        </Background>
      </ScrollableContainer>
    </Container>
  );
};
