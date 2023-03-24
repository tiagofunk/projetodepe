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
const {info} = ProjetcOwner;

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
          text: "(21) 99680-0215",
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
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Av.%20Jos%C3%A9%20de%20Arimat%C3%A9ia,%2080%20-%20Cidade%20de%20Deus+(My%20Business%20Name)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </InnerContainer>
    </FooterContainer>
  );
};

export default Footer;
