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
  const formSubmitHash = "4bf6dc77a30a97a4dcd258f7001abdbc"; //localhost:3000

  const options = [
    "Voluntário",
    "Sugestões/reclamações",
    "Quero me consultar",
    "Doações",
    "Dúvidas",
    "Contatos gerais",
  ];

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });


  const onFinish = () => {
    validateValues();
  };

  function validateValues() {
    let nameError = "",
      emailError = "",
      subjectError = "",
      phoneError = "",
      messageError = "";
    let isValid = true;

    if (!validateName(formValues.name)) {
      nameError = nameFailMessage;
      isValid = false;
    }
    if (!validateEmail(formValues.email)) {
      emailError = emailFailMessage;
      isValid = false;
    }
    if (!validateSubject(formValues.subject)) {
      subjectError = subjectFailMessage;
      isValid = false;
    }
    if (!validatePhone(formValues.phone)) {
      phoneError = phoneFailMessage;
      isValid = false;
    }
    if (!validateMessage(formValues.message)) {
      messageError = messageFailMessage;
      isValid = false;
    }
    setErrors({
      ...errors,
      name: nameError,
      email: emailError,
      subject: subjectError,
      phone: phoneError,
      message: messageError,
    });
    if (isValid) {
      const formElement = document.getElementById(
        "contact-form"
      ) as HTMLFormElement;
      formElement?.submit();
    }
  }

  function validateName(name: any) {
    if (name === undefined) return false;
    let nameRegex = new RegExp("^[0-9a-zA-Z ]+$");
    return nameRegex.test(name);
  }

  function validateEmail(email: any) {
    if (email === undefined) return false;
    let emailRegex = new RegExp("^[0-9a-zA-Z.]+@[0-9a-zA-Z]+\\.[a-zA-Z]{0,3}$");
    return emailRegex.test(email);
  }

  function validateSubject(subject: any) {
    if (subject === undefined) return false;
    if (subject.length === 0) return false;
    return true;
  }

  function validatePhone(phone: any) {
    if (phone === undefined) return false;
    let phoneRegex = new RegExp(
      "^\\(?[1-9]{2}\\)? ?(?:[2-8]|9[1-9])[0-9]{3}\\-?[0-9]{4}$"
    );
    return phoneRegex.test(phone);
  }

  function validateMessage(message: any) {
    if (message === undefined) return false;
    if (message.length === 0) return false;
    return true;
  }

  function getField(nameTitle: string, nameField: string) {
    return (
      <>
        <Text>{nameTitle}</Text>
        <MyInput
          name={nameTitle}
          onChange={(event) =>
            setFormValues({ ...formValues, [nameField]: event.target.value })
          }
          value={formValues[nameField as keyof typeof formValues]}
        />
        {errors[nameField as keyof typeof errors] && <ErrorText>{errors[nameField as keyof typeof errors]}</ErrorText>}
      </>
    );
  }

  function getFieldSubject() {
    return (
      <>
        <Text>{subjectTitle}</Text>
        <MySelect
          style={{ width: "35rem", textAlign: "left" }}
          onChange={(event) =>
            setFormValues({ ...formValues, subject: `${event}` || "" })
          }
          value={formValues.subject}
        >
          {options.map((op) => (
            <Option value={op}>{op}</Option>
          ))}
        </MySelect>
        {errors.subject && <ErrorText>{errors.subject}</ErrorText>}
      </>
    );
  }

  function getFieldMessage() {
    return (
      <>
        <Text>{messageTitle}</Text>
        <MessageInput
          rows={messageRows}
          name={messageTitle}
          onChange={(event) =>
            setFormValues({ ...formValues, message: event.target.value })
          }
          value={formValues.message}
        />
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
      <form
        id="contact-form"
        target="_blank"
        action={"https://formsubmit.co/" + formSubmitHash}
        method="POST"
      >
        <VerticalBox>
          <HorizontalBox>
            <VerticalBox>{getField(nameTitle, "name")}</VerticalBox>
            <VerticalBox>{getField(emailTitle, "email")}</VerticalBox>
          </HorizontalBox>
          <HorizontalBox>
            <VerticalBox>{getFieldSubject()}</VerticalBox>
            <VerticalBox>{getField(phoneTitle, "phone")}</VerticalBox>
          </HorizontalBox>
          <VerticalBox>{getFieldMessage()}</VerticalBox>
          <VerticalBox>{getSubmitButton()}</VerticalBox>
        </VerticalBox>
      </form>
    </Container>
  );
};
