import {
  Container,
  FirstColumn,
  Header,
  Line,
  SecondColumn,
  Title,
} from "./Activities.style";

export const Activities = () => {
  const textTable = [
    ["D'Favela", "Coleta de peças doadas, customização e bazar."],
    ["D'Votar", "Política para leigos em parceria com o IPAD."],
    [
      "D'Reciclar",
      "Coleta e oficina de material reutilizável (Vidro, plástico, madeira, etc).",
    ],
    ["D'Eternizar", "Oficina de tatuagem, quadro e fotografia."],
    ["D'Raiz", "Oficina de trança"],
    ["D'Lei", "Consultas jurídicas com advogados voluntários."],
    ["D'Sorrir", "Parceria com faculdade de odontologia."],
    ["D'Parir", "Educação sexual, planejamento familiar e oficina de doulas."],
    // ["D'Maré",     "Aulas de natação no mar e surf."],
    // ["D'Swing",     "Aulas de dança (afro e ritmos atuais)."],
    // ["D'Cantinho",  "Oficina de canto,assalato e violão."],
    // ["D'Patas",    "Serviços veterinários básicos para animais domésticos.(Banho,tosa, medicação e correção de comportamento)."],
    // ["D'Cria",      "Escrita, edição, montagem, filmagem, produção."],
    // ["D'Fé",        "Fundamentos e pilares das principais religiões no Brasil, com sacerdotes atuantes na área de educação."],
    // ["D'Lutar",    "Aulas de jiu-jitsu com mestres voluntários."],
    // ["D'Comer",     "Horta, nutricionista e gastronomia."],
    // ["D'Somar",     "Reforço matemático e educação financeira."],
    // ["D'Futuro",    "Teste vocacional e planejamento de carreira."],
    // ["Favelosofia", "A ideia por trás da ideia. Músicas (Rap,samba,funk,trap), séries, filmes populares como conceito filosófico e ideológico. Roda de conversa sobre o aprendizado do período."],
  ];
  return (
    <Container>
      <Title>Atividades Prestadas</Title>
      <p>Atualmente, o Instituto de Pé conta com uma série de atividades gratuitas disponíveis ao público:</p>
      <Header>
        <FirstColumn>Nome</FirstColumn>
        <SecondColumn>Atividade</SecondColumn>
      </Header>
      {textTable.map((value, index) => (
        <Line key={index}>
          <FirstColumn>{value[0]}</FirstColumn>
          <SecondColumn>{value[1]}</SecondColumn>
        </Line>
      ))}
    </Container>
  );
};
