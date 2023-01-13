import {
  Container,
  TextRegular,
  TextBold,
  Title,
  Area,
  Image,
  TextPixKey,
} from "./QRCodeArea.style";
import qrcode from "assets/img/QRCodeArea/qrcode.jpeg";

export const QRCodeArea = () => {
  const TITLE = "Gostaria de fazer uma doação ao projeto? É simples:";
  const TEXT =
    "Dessa forma, você pode fazer o envio da doação sem precisar ficar digitando todos os outros dados bancários.";
  const PIX_KEY = "48.289.801/0001-45";
  const INSTRUCTIONS = [
    "1 - Acesse o PIX em seu aplicativo bancário.",
    "2 - Insira nossa chave PIX ou escaneie esse QRCode pelo aplicativo bancário.",
    "3 - Escolha o valor desejado e confirme.",
    "4 - Prontinho : )",
  ];

  return (
    <Container>
      <Area>
        <Title>{TITLE}</Title>
        {INSTRUCTIONS.map((text) => (
          <TextRegular>{text}</TextRegular>
        ))}
        <TextBold>{TEXT}</TextBold>
        <TextRegular>
          Você também pode clicar{" "}
          <a href="http://campanhadobem.com/instituto-de-pe-saude-mental-na-favela" target="_blank"  rel="noreferrer">aqui</a> para
          acessar a vaquinha virtual do projeto.
        </TextRegular>
      </Area>
      <Area>
        <Image src={qrcode} alt={""} />
        <TextPixKey>{PIX_KEY}</TextPixKey>
      </Area>
    </Container>
  );
};
