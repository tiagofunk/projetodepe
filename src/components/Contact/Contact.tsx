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

  const occupationAreaTitle = "Área de atuação";
  const occupationAreaFailMessage = "Não pode estar vazio";
  const howYouWantToContributeTitle = "Como deseja contribuir?";
  const howYouWantToContributeFailMessage = "Não pode estar vazio";
  const daysAndTimesAvailableTitle = "Dia e horário disponíveis";
  const daysAndTimesAvailableFailMessage = "Não pode estar vazio";

  const formId = "contact-form";
  const formSubmitLink = "https://formsubmit.co/";
  const formSubmitHash = "4bf6dc77a30a97a4dcd258f7001abdbc"; //localhost:3000

  const regexName = "^[0-9a-zA-Z ]+$";
  const regexEmail = "^[0-9a-zA-Z._]+@[0-9a-zA-Z]+\\.[a-zA-Z]{1,3}$";
  const regexPhone = "^\\(?[1-9]{2}\\)? ?(?:[2-8]|9[1-9])[0-9]{3}\\-?[0-9]{4}$";
  const regexNotEmptyString = "^(?!\\s*$).+";

  const optionsSubject = [
    "Voluntário",
    "Sugestões/reclamações",
    "Quero me consultar",
    "Doações",
    "Dúvidas",
    "Contatos gerais",
  ];

  const errorsMessages = {
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
    occupationArea: "",
    howYouWantToContribute: "",
    daysAndTimesAvailable: "",
  };

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
    occupationArea: "",
    howYouWantToContribute: "",
    daysAndTimesAvailable: "",
  });
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
    occupationArea: "",
    howYouWantToContribute: "",
    daysAndTimesAvailable: "",
  });

  const onFinish = () => {
    let isValid = validateValues();
    updateErrors();
    realizeSubmit(isValid);
  };

  function validateValues() {
    let isValid = true;

    isValid = validate(formValues.name, regexName, "name", nameFailMessage);
    isValid = validate(formValues.email, regexEmail, "email", emailFailMessage);
    isValid = validate(formValues.subject,regexNotEmptyString,"subject",subjectFailMessage);
    isValid = validate(formValues.phone, regexPhone, "phone", phoneFailMessage);
    isValid = validate(formValues.message,regexNotEmptyString,"message",messageFailMessage);
    isValid = validVoluntaryFieldsIfNecessary();

    return isValid;
  }

  function validVoluntaryFieldsIfNecessary(){
    let isValid = true;
    if( formValues.subject==="Voluntário" ){
      isValid = validate(formValues.occupationArea, regexNotEmptyString, "occupationArea", occupationAreaFailMessage);
      isValid = validate(formValues.howYouWantToContribute, regexNotEmptyString, "howYouWantToContribute", howYouWantToContributeFailMessage);
      isValid = validate(formValues.daysAndTimesAvailable, regexNotEmptyString, "daysAndTimesAvailable", daysAndTimesAvailableFailMessage);
    }
    return isValid;
  }

  function checkRegex(fieldValue: string, regex: string) {
    let regexObject = new RegExp(regex);
    return regexObject.test(fieldValue);
  }

  function validate(
    fieldValue: string,
    regex: string,
    field: string,
    errorMessage: string
  ) {
    let result = checkRegex(fieldValue, regex);
    if (!result) {
      errorsMessages[field as keyof typeof errorsMessages] = errorMessage;
    }

    if( field==="occupationArea"){
      console.log(errorsMessages);
    }
    return result;
  }

  function updateErrors() {
    setErrors({
      ...errors,
      name: errorsMessages.name,
      email: errorsMessages.email,
      subject: errorsMessages.subject,
      phone: errorsMessages.phone,
      message: errorsMessages.message,
      occupationArea: errorsMessages.occupationArea,
      howYouWantToContribute: errorsMessages.howYouWantToContribute,
      daysAndTimesAvailable: errorsMessages.daysAndTimesAvailable,
    });
  }

  function realizeSubmit(isValid: boolean) {
    if (isValid) {
      const formElement = document.getElementById(formId) as HTMLFormElement;
      formElement?.submit();
    }
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
        {errors[nameField as keyof typeof errors] && (
          <ErrorText>{errors[nameField as keyof typeof errors]}</ErrorText>
        )}
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
          {optionsSubject.map((op) => (
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

  function getVoluntaryFields() {
    return (
      <>
        <VerticalBox>
          <HorizontalBox>
            <VerticalBox>
              {getField(occupationAreaTitle, "occupationArea")}
            </VerticalBox>
            <VerticalBox>
              {getField(howYouWantToContributeTitle, "howYouWantToContribute")}
            </VerticalBox>
          </HorizontalBox>
          <VerticalBox>
            {getField(daysAndTimesAvailableTitle, "daysAndTimesAvailable")}
          </VerticalBox>
        </VerticalBox>
      </>
    );
  }
  function getOptionalFields() {
    return <>{formValues.subject==="Voluntário" && getVoluntaryFields()}</>;
  }

  return (
    <Container>
      <Title>{title}</Title>
      <form
        id={formId}
        target="_blank"
        action={formSubmitLink + formSubmitHash}
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
          {getOptionalFields()}
          <VerticalBox>{getFieldMessage()}</VerticalBox>
          <VerticalBox>{getSubmitButton()}</VerticalBox>
        </VerticalBox>
      </form>
    </Container>
  );
};
