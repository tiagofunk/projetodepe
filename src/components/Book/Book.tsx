import {
  Container,
  AllImages,
  ImageBook,
  Text,
  Title,
  AllTexts,
  ImagePerson,
} from "./Book.style";
import capaLivro from "assets/img/book/capa_livro.png";
import fotoLuana from "assets/img/book/foto_luana.jpeg";

export const Book = () => {
  const title = "Prefácio do livro da Luana";
  const text1 = [
    "Sempre pensei que a maior dificuldade em escrever um livro fosse escolher um assunto. Por 3 razões basicas:",
    "1° Porque imagino que pessoas com a inquietação situada no eixo cabeça, garganta e meio do peito não fossem capaz de se dedicarem a um só tema. Sinto uma agitação, uma angústia , uma aceleração tão grande nessa área que me atrevo a dizer que poderia falar de qualquer coisa, só pra escoar essa sensação.",
    "2° por que não sei se é pq aos 38 anos estou bem no meio dessa geração que recebia comandos claros sobre o que era certo errado, bonito ou feio, aceitável ou absurdo, hetero ou homo e a geração desconstrução, problematização, lacração e textão ( Na real tive até um certo medo de que este tão sonhado e desejado projeto de livro não passasse disso...um textão. Depois pensei : Ok, pq não? )",
  ];
  const text2 = [
    "De uns tempos pra cá fui notando que todos sem exceção tinham mais do que o simples e arduamente conquistado direito a uma opinião, Me parece que junto com a internet chegou o DEVER da opinião. Todos mundo quer falar de alguma coisa e nasceram zilhoes de escritores, vlogers, youtubers, falando dos mais diversos temas e/ ou falando de nada. Então desencorajada pensei: O que terei eu de tão relevante assim pra falar gente? Sou só mais uma ...",
    "Aí conclui, bom talvez tenha mais alguns perdidos por ai querendo somente saber q não estão sós. ( ou seja ,este livro pode ser fruto sincero de um desejo acolhedor de empatia e encorajamento, ou pode ser só o meu enorme ego narcísico clamando por atenção e aplausos. Lamento informar, Nunca saberemos. Rs )",
    "3° É por fim , mas não menos importante achei que pra se aventuar a falar de alguma coisa, um assunto besta que fosse ,o indivíduo haveria de ter minimamente algum domínio. Sendo assim em que afinal eu sou expert? O que me faz dotada de capacidade pra me sentar e escreve páginas e páginas ? Essa foi a mais fácil de todas.",
    "E foi por esta resposta que eu me pus diante de mim com seriedade e atitude e afirmei: É garota! Disso tu manja e ninguém vai duvidar.",
    "Nessa vida de tombos , rasteiras e tropeços numa coisa vc se especializou. E essa coisa tem nome. Mas do que nome . Tem uma ordem. Um chamado. Um mando. Uma força. Um jeito. Uma posição. E essa foi a postura que me salvou... Aconteça que acontecer Luana,fique DE PÉ PORRA!",
  ];

  return (
    <Container>
      <Title>{title}</Title>
      <AllTexts>
        {text1.map((t, index) => (
          <Text key={index}>{t}</Text>
        ))}
      </AllTexts>
      <AllImages>
        <ImageBook src={capaLivro} />
        <ImagePerson src={fotoLuana} />
      </AllImages>
      <AllTexts>
        {text2.map((t, index) => (
          <Text key={index}>{t}</Text>
        ))}
      </AllTexts>
    </Container>
  );
};
