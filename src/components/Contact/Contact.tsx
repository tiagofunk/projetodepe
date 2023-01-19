import { Form } from "antd";
import { useState } from "react";
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
  ErrorText,
} from "./Contact.style";

const { Option } = MySelect;

export const Contact = () => {
  const title = "Complete o formulário e entre em contato com a gente";
  const nameTitle = "Nome";
  const nameFailMessage = "Nome não pode ficar vazio";
  const emailTitle = "E-mail";
  const emailFailMessage = "E-mail inválido";
  const subjectTitle = "Assunto";
  const subjectFailMessage = "Assunto é necessário";
  const phoneTitle = "Telefone/Celular";
  const phoneFailMessage = "Telefone inválido";
  const messageTitle = "Mensagem";
  const messageFailMessage = "Não se esqueça da mensagem";
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
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const onFinish = () => {
    console.log("foi");
    validateValues();
  };

  function validateValues() {
    let nameError = "",
      emailError = "",
      subjectError = "",
      phoneError = "",
      messageError = "";
      console.log(form.getFieldValue(nameTitle));
    if (!validateName(form.getFieldValue(nameTitle))) {
      nameError = nameFailMessage;
    }
    if (!validateEmail(form.getFieldValue(emailTitle))) {
      emailError = emailFailMessage;
    }
    if (!validateSubject(form.getFieldValue(subjectTitle))) {
      subjectError = subjectFailMessage;
    }
    if (!validatePhone(form.getFieldValue(phoneTitle))) {
      phoneError = phoneFailMessage;
    }
    if (!validateMessage(form.getFieldValue(messageTitle))) {
      messageError = messageFailMessage;
    }
    setErrors({
      ...errors,
      name: nameError,
      email: emailError,
      subject: subjectError,
      phone: phoneError,
      message: messageError,
    });
    return errors;
  }

  function validateName(name: any) {
    if( name === undefined ) return false;
    let nameRegex = new RegExp("^[0-9a-zA-Z ]+$");
    return nameRegex.test(name);
  }

  function validateEmail(email: any) {
    if( email === undefined ) return false;
    let emailRegex = new RegExp("^[0-9a-zA-Z.]+@[0-9a-zA-Z]+\\.[a-zA-Z]{0,3}$");
    return emailRegex.test(email);
  }

  function validateSubject(subject: any) {
    if( subject === undefined ) return false;
    if( subject === undefined ) return false;
    return true;
  }

  function validatePhone(phone: any) {
    if( phone === undefined ) return false;
    let phoneRegex = new RegExp(
      "^\\(?[1-9]{2}\\)? ?(?:[2-8]|9[1-9])[0-9]{3}\\-?[0-9]{4}$"
    );
    return phoneRegex.test(phone);
  }

  function validateMessage(message: any) {
    if( message === undefined ) return false;
    let messageRegex = new RegExp("^[0-9a-zA-Z]+$");
    return messageRegex.test(message);
  }

  function getFieldName() {
    return (
      <>
        <Text>{nameTitle}</Text>
        <Form.Item name={nameTitle}>
          <MyInput />
        </Form.Item>
        {errors.name && <ErrorText>{errors.name}</ErrorText>}
      </>
    );
  }

  function getFieldEmail() {
    return (
      <>
        <Text>{emailTitle}</Text>
        <Form.Item name={emailTitle}>
          <MyInput />
        </Form.Item>
        {errors.email && <ErrorText>{errors.email}</ErrorText>}
      </>
    );
  }

  function getFieldSubject() {
    return (
      <>
        <Text>{subjectTitle}</Text>
        <Form.Item name={subjectTitle}>
          <MySelect style={{ width: "35rem", textAlign: "left" }}>
            {options.map((op) => (
              <Option value={op}>{op}</Option>
            ))}
          </MySelect>
        </Form.Item>
        {errors.subject && <ErrorText>{errors.subject}</ErrorText>}
      </>
    );
  }

  function getFieldPhone() {
    return (
      <>
        <Text>{phoneTitle}</Text>
        <Form.Item name={phoneTitle}>
          <MyInput />
        </Form.Item>
        {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
      </>
    );
  }

  function getFieldMessage() {
    return (
      <>
        <Text>{messageTitle}</Text>
        <Form.Item name={messageTitle}>
          <MessageInput rows={messageRows} />
        </Form.Item>
        {errors.message && <ErrorText>{errors.message}</ErrorText>}
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
