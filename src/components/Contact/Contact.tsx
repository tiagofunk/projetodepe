import { Form } from "antd";
import {
  Container,
  HorizontalBox,
  Title,
  Text,
  VerticalBox,
  MyInput,
  MessageInput,
  MyButton,
  MySelect,
} from "./Contact.style";

const { Option } = MySelect;

export const Contact = () => {
  const title = "Complete o formulário e entre em contato com a gente";
  const nameTitle = "Nome";
  const nameFailMessage = "Nome é necessário";
  const emailTitle = "E-mail";
  const emailFailMessage = "E-mail é necessário";
  const subjectTitle = "Assunto";
  const SubjectFailMessage = "Assunto é necessário";
  const phoneTitle = "Telefone/Celular";
  const phoneFailMessage = "Telefone é necessário";
  const messageTitle = "Mensagem";
  const messageFailMessage = "Mensagem é necessário";
  const messageRows = 4;
  const buttonText = "Enviar Mensagem";

  const options = [
    "Voluntário",
    "Sugestões/reclamações",
    "Quero me consultar",
    "Doações",
    "Dúvidas",
    "Contatos gerais",
  ];

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("foi", values);
  };

  function getFieldName() {
    return (
      <>
        <Text>{nameTitle}</Text>
        <Form.Item
          name={nameTitle}
          rules={[{ required: true, message: nameFailMessage }]}
        >
          <MyInput />
        </Form.Item>
      </>
    );
  }

  function getFieldEmail() {
    return (
      <>
        <Text>{emailTitle}</Text>
        <Form.Item
          name={emailTitle}
          rules={[{ required: true, message: emailFailMessage }]}
        >
          <MyInput />
        </Form.Item>
      </>
    );
  }

  function getFieldSubject() {
    return (
      <>
        <Text>{subjectTitle}</Text>
        <Form.Item
          name={subjectTitle}
          rules={[{ required: true, message: SubjectFailMessage }]}
        >
          <MySelect style={{ width: "35rem", textAlign: "left" }}>
            {options.map((op) => (
              <Option value={op}>{op}</Option>
            ))}
          </MySelect>
        </Form.Item>
      </>
    );
  }

  function getFieldPhone() {
    return (
      <>
        <Text>{phoneTitle}</Text>
        <Form.Item
          name={phoneTitle}
          rules={[{ required: true, message: phoneFailMessage }]}
        >
          <MyInput />
        </Form.Item>
      </>
    );
  }

  function getFieldMessage() {
    return (
      <>
        <Text>{messageTitle}</Text>
        <Form.Item
          name={messageTitle}
          rules={[{ required: true, message: messageFailMessage }]}
        >
          <MessageInput rows={messageRows} />
        </Form.Item>
      </>
    );
  }

  function getSubmitButton() {
    return (
      <>
        <MyButton onClick={onFinish}>{buttonText}</MyButton>
      </>
    );
  }

  return (
    <Container>
      <Title>{title}</Title>
      <Form form={form} onFinish={onFinish}>
        <VerticalBox>
          <HorizontalBox>
            <VerticalBox>{getFieldName()}</VerticalBox>
            <VerticalBox>{getFieldEmail()}</VerticalBox>
          </HorizontalBox>
          <HorizontalBox>
            <VerticalBox>{getFieldSubject()}</VerticalBox>
            <VerticalBox>{getFieldPhone()}</VerticalBox>
          </HorizontalBox>
          <VerticalBox>{getFieldMessage()}</VerticalBox>
          <VerticalBox>{getSubmitButton()}</VerticalBox>
        </VerticalBox>
      </Form>
    </Container>
  );
};
