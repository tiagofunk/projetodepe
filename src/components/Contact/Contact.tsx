import {
  Container,
  HorizontalBox,
  Title,
  Text,
  VerticalBox,
  Input,
  MessageInput,
  Button,
} from "./Contact.style";

export const Contact = () => {
  const title = "Complete o formulário e entre em contato com a gente";
  const nameTitle = "Nome*";
  const emailTitle = "E-mail*";
  const subjectTitle = "Assunto*";
  const phoneTitle = "Telefone/Celular*";
  const messageTitle = "Mensagem*";
  const buttonText = "Enviar Mensagem";

  return (
    <Container>
      <Title>{title}</Title>
      <VerticalBox>
        <HorizontalBox>
          <VerticalBox>
            <Text>{nameTitle}</Text>
            <Input />
          </VerticalBox>
          <VerticalBox>
            <Text>{emailTitle}</Text>
            <Input />
          </VerticalBox>
        </HorizontalBox>
        <HorizontalBox>
          <VerticalBox>
            <Text>{subjectTitle}</Text>
            <Input />
          </VerticalBox>
          <VerticalBox>
            <Text>{phoneTitle}</Text>
            <Input />
          </VerticalBox>
        </HorizontalBox>
        <VerticalBox>
          <Text>{messageTitle}</Text>
          <MessageInput />
          <Button>{buttonText}</Button>
        </VerticalBox>
      </VerticalBox>
    </Container>
  );
};
