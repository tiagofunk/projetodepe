import {
    Container, Text, Title
  } from "./Timeline.style";

import { Timeline as TimelineAnt } from 'antd';
  
  export const Timeline = () => {
    const TIMELINE_TEXT = [
        ["09/08/2021", "Manuscrito do  que na época nasceu \"voando alto\""],
        ["16/08/2021", "Visita a casa do artista,na esperança de mostrar o projeto, consegui ser recebida pelo empresário,mas sem maiores desdobramentos."],
        ["01/09/2021", "Primeira reunião,convite a Camila Pires"],
        ["24/09/2021", "Clarice pires entra no projeto"],
        ["14/10/2021", "Naná entra no projeto. ( Ana Carolina Viola, advogada)"],
        ["19/10/2021", "Primeira reunião com Luiza Serpa do instituto Phi, o Phi entra no projeto."],
        ["31/09/2021", "Paula Viola ( Doula e designer) entra no projeto."],
        ["08/10/2021", "Alterações no projeto original, transição para o De pé."],
        ["22/10/2021", "Criação da logo"],
        ["18/01/2022", "Deck"],
        ["19/01/2022", "Gabriela Santos entrou no projeto ( advogada especialista em direito autoral/ propriedade intelectual)."],
        ["25/03/2022", "Psiquiatra Leonardo Fonseca entra no projeto"],
        ["04/04/2022", "Chegada na Cidade de Deus"],
        ["07/04/2022", "Priscila Santos assistente social entra no projeto"],
        ["17/05/2022", "Criação da visão, missão e valores"],
        ["20-21/05/2022", "Fórum Rio 2022"],
    ];

    return (
      <Container>
        <Title>Linha do Tempo</Title>
        <TimelineAnt mode="alternate" >
            {TIMELINE_TEXT.map( (text) => (
                <TimelineAnt.Item color="black">
                    <Text>
                        {text[0]}<br/>{text[1]}
                    </Text>
                </TimelineAnt.Item>
            ))}
            
        </TimelineAnt>
      </Container>
    );
  };
  