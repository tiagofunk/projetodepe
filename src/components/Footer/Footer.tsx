import Link from "antd/es/typography/Link";
import ProjetcOwner from "projectOwner/ProjectOwner";
import {
  BackgroundImage,
  FooterContainer,
  Title,
  Text,
  InfoArea,
  Section,
  InstagramImage,
  PhoneImage,
  EmailImage,
  LineContent,
  InnerContainer,
  StyledIframe,
} from "./Footer.styles";
import { FooterContent } from "./Footer.types";
const { info } = ProjetcOwner;

export const Footer = () => {
  const footerContent: FooterContent[] = [
    {
      title: "Endereço",
      content: [
        {
          text: info.adress,
        },
      ],
    },
    {
      title: "Contato",
      content: [
        {
          image: <PhoneImage />,
          text: info.phone,
        },
        {
          image: <EmailImage />,
          text: info.email,
        },
      ],
    },
    {
      title: "Redes Sociais",
      content: [
        {
          image: (
            <Link
              target="_blank"
              href="https://www.instagram.com/institutodepe/"
            >
              <InstagramImage />
            </Link>
          ),
        },
      ],
    },
    {
      title: "Dados Bancários",
      content: [
        {
          textCombination: [
            {
              initiator: "AC: ",
              text: "0001 | ",
            },
            {
              initiator: "CC: ",
              text: "3276587-9",
            },
          ],
        },
        {
          textCombination: [
            {
              initiator: "CNPJ: ",
              text: `48.289.801/0001-45 (Chave PIX)`,
            },
          ],
        },
      ],
    },
  ];

  return (
    <FooterContainer>
      <BackgroundImage />
      <InnerContainer>
        <InfoArea>
          {footerContent.map((section, index) => (
            <Section key={index}>
              <Title>{section.title}</Title>
              {section.content.map((line, index) => (
                <LineContent key={index}>
                  {line.image}
                  <Text>{line.text}</Text>
                  <Text>
                    {line.textCombination?.map((item, index) => (
                      <div key={index}>
                        <Title>{item.initiator}</Title>
                        {item.text}
                      </div>
                    ))}
                  </Text>
                </LineContent>
              ))}
            </Section>
          ))}
        </InfoArea>

        <StyledIframe
          title="google-maps"
          width="100%"
          height="250"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.1923414215685!2d-43.36256782476772!3d-22.943142479229433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd92fff369c85%3A0x1f38f0ce0f0feec8!2sInstituto%20De%20P%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1682090396365!5m2!1spt-BR!2sbr"
        />
      </InnerContainer>
    </FooterContainer>
  );
};

export default Footer;
