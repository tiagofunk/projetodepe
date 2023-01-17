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
  const emailTitle = "E-mail";
  const subjectTitle = "Assunto";
  const phoneTitle = "Telefone/Celular";
  const messageTitle = "Mensagem";
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

  return (
    <Container>
      <Title>{title}</Title>
      <Form form={form} onFinish={onFinish}>
        <VerticalBox>
          <HorizontalBox>
            <VerticalBox>
              <Text>{nameTitle}</Text>
              <Form.Item
                name={nameTitle}
                rules={[{ required: true, message: "Nome é necessário" }]}
              >
                <MyInput />
              </Form.Item>
            </VerticalBox>
            <VerticalBox>
              <Text>{emailTitle}</Text>
              <Form.Item
                name={emailTitle}
                rules={[{ required: true, message: "E-mail é necessário" }]}
              >
                <MyInput />
              </Form.Item>
            </VerticalBox>
          </HorizontalBox>
          <HorizontalBox>
            <VerticalBox>
              <Text>{subjectTitle}</Text>
              <Form.Item
                name="gender"
                rules={[{ required: true, message: "Assunto é necessário" }]}
              >
                <MySelect style={{ width: "35rem", textAlign: "left" }}>
                  {options.map((op) => (
                    <Option value={op}>{op}</Option>
                  ))}
                </MySelect>
              </Form.Item>
            </VerticalBox>
            <VerticalBox>
              <Text>{phoneTitle}</Text>
              <Form.Item
                name={phoneTitle}
                rules={[{ required: true, message: "Telefone é necessário" }]}
              >
                <MyInput />
              </Form.Item>
            </VerticalBox>
          </HorizontalBox>
          <VerticalBox>
            <Text>{messageTitle}</Text>
            <MessageInput rows={4}/>
            <MyButton onClick={onFinish}>{buttonText}</MyButton>
          </VerticalBox>
        </VerticalBox>
      </Form>
    </Container>
  );
};
