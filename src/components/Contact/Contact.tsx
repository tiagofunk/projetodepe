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
  const serviceTypeTitle = "Tipo de serviço";
  const serviceTypeFailMessage = "Tipo de serviço é necessário";
  const donationTypeTitle = "Tipo de doação";
  const donationTypeFailMessage = "Tipo de doação é necessário";
  const quantityDonationTitle = "Quantidade";
  const quantityDonationFailMessage = "Não pode ficar vazio";

  const formId = "contact-form";
  const formSubmitLink = "https://formsubmit.co/";
  const formSubmitHash = "4bf6dc77a30a97a4dcd258f7001abdbc"; //localhost:3000

  const regexName = "^[0-9a-zA-Z ]+$";
  const regexEmail = "^[0-9a-zA-Z._]+@[0-9a-zA-Z]+\\.[a-zA-Z]{1,3}$";
  const regexPhone = "^\\(?[1-9]{2}\\)? ?(?:[2-8]|9[1-9])[0-9]{3}\\-?[0-9]{4}$";
  const regexNotEmptyString = "^(?!\\s*$).+";

  const voluntary = "Voluntário";
  const wantToBeAttended = "Quero ser atendido";
  const donations = "Doações";
  const doubts = "Dúvidas";
  const suggestionsComplaints = "Sugestões/reclamações";

  const optionsSubject = [
    voluntary,
    wantToBeAttended,
    donations,
    doubts,
    suggestionsComplaints,
  ];

  const optionsTypeService = ["Psicologa", "Assistência social", "Cidadania"];

  const optionsDonations = ["Móveis","Eletrodomesticos","Roupas","Instrumentos"];

  const errorsMessages = {
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
    occupationArea: "",
    howYouWantToContribute: "",
    daysAndTimesAvailable: "",
    serviceType: "",
    donationType:"",
    quantityDonation:""
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
    serviceType: "",
    donationType:"",
    quantityDonation:""
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
    serviceType: "",
    donationType:"",
    quantityDonation:""
  });

  const onFinish = () => {
    let isValid = validateValues();
    updateErrors();
    realizeSubmit(isValid);
  };

  function validateValues() {
    let isValid = true;
    if( !validFields() )
      isValid = false
    if( !validVoluntaryFieldsIfNecessary() )
      isValid = false;
    if( !validWantToBeAttendedFieldsIfNecessary() )
      isValid = false;
    if( !validDonationsFieldsIfNecessary() )
      isValid = false;
    return isValid;
  }

  function validFields(){
    let isValid = true;

    if (!validate(formValues.name, regexName, "name", nameFailMessage))
      isValid = false;
    if (!validate(formValues.email, regexEmail, "email", emailFailMessage))
      isValid = false;
    if (!validate( formValues.subject, regexNotEmptyString,"subject",subjectFailMessage))
      isValid = false;
    if( !validate(formValues.phone, regexPhone, "phone", phoneFailMessage) )
      isValid = false;
    if( !validate(formValues.message,regexNotEmptyString,"message",messageFailMessage) )
      isValid = false;
    
    return isValid;
  }

  function validVoluntaryFieldsIfNecessary() {
    let isValid = true;
    if (formValues.subject === voluntary) {
      if( !validate(formValues.occupationArea,regexNotEmptyString,"occupationArea",occupationAreaFailMessage) )
        isValid = false;
      if( !validate(formValues.howYouWantToContribute,regexNotEmptyString,"howYouWantToContribute",howYouWantToContributeFailMessage))
        isValid = false;
      if( !validate( formValues.daysAndTimesAvailable,regexNotEmptyString,"daysAndTimesAvailable",daysAndTimesAvailableFailMessage)) 
        isValid = false;
    }
    return isValid;
  }

  function validWantToBeAttendedFieldsIfNecessary() {
    let isValid = true;
    if (formValues.subject === wantToBeAttended) {
      if( !validate( formValues.daysAndTimesAvailable, regexNotEmptyString,"daysAndTimesAvailable",daysAndTimesAvailableFailMessage))
        isValid = false;
      if( !validate( formValues.serviceType,regexNotEmptyString,"serviceType",serviceTypeFailMessage))
          isValid = false;
    }
    return isValid;
  }

  function validDonationsFieldsIfNecessary(){
    let isValid = true;
    if (formValues.subject === donations) {
      if( !validate( formValues.donationType, regexNotEmptyString,"donationType",donationTypeFailMessage))
        isValid = false;
      
      if( !validate( formValues.quantityDonation,regexNotEmptyString,"quantityDonation",quantityDonationFailMessage))
        isValid = false;
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
      serviceType: errorsMessages.serviceType,
      donationType: errorsMessages.donationType,
      quantityDonation: errorsMessages.quantityDonation
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

  function getFieldCheck(title:string, field:string,options:Array<string>){
    return (
      <>
        <Text>{title}</Text>
        <MySelect
          style={{ width: "35rem", textAlign: "left" }}
          onChange={(event) =>
            setFormValues({ ...formValues, [field]: `${event}` || "" })
          }
          value={formValues[field as keyof typeof formValues]}
        >
          {options.map((op) => (
            <Option value={op}>{op}</Option>
          ))}
        </MySelect>
        {errors[field as keyof typeof errors] && <ErrorText>{errors[field as keyof typeof errors]}</ErrorText>}
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

  function getMedicalAppointmentFields() {
    return (
      <>
        <HorizontalBox>
          <VerticalBox>{getFieldCheck(serviceTypeTitle, "serviceType",optionsTypeService)}</VerticalBox>
          <VerticalBox>
            {getField(daysAndTimesAvailableTitle, "daysAndTimesAvailable")}
          </VerticalBox>
        </HorizontalBox>
      </>
    );
  }

  function getDonationsFields(){
    return <>
      <HorizontalBox>
        <VerticalBox>{getFieldCheck(donationTypeTitle,"donationType",optionsDonations)}</VerticalBox>
        <VerticalBox>{getField(quantityDonationTitle,"quantityDonation")}</VerticalBox>
      </HorizontalBox>
    </>

  }
  function getOptionalFields() {
    return (
      <>
        {(formValues.subject === voluntary && getVoluntaryFields()) ||
          (formValues.subject === wantToBeAttended && getMedicalAppointmentFields()) ||
          (formValues.subject === donations && getDonationsFields())}
      </>
    );
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
            <VerticalBox>{getFieldCheck(subjectTitle,"subject",optionsSubject)}</VerticalBox>
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
