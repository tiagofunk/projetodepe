import { Container, WhatsAppIcon, WhatsAppSmallIcon } from "./Whatsapp.styles";

export interface WhatsappProps {
  variant: "icon" | "button";
}

export const Whatsapp = ({ variant }: WhatsappProps) => {
  const phoneNumber = "022980153377";
  return (
    <Container
      href={`http://api.whatsapp.com/send?1=pt_BR&phone=55${phoneNumber}`}
      target="_blank"
      variant={variant}
    >
      {variant === "icon" ? <WhatsAppIcon /> : <><WhatsAppSmallIcon />Enviar mensagem</>}
    </Container>
  );
};
