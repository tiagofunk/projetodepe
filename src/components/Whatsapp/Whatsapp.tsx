import ProjetcOwner from "projectOwner/ProjectOwner";
import { Container, WhatsAppIcon, WhatsAppSmallIcon } from "./Whatsapp.styles";

const {info} = ProjetcOwner;

export interface WhatsappProps {
  variant: "icon" | "button";
}

export const Whatsapp = ({ variant }: WhatsappProps) => {
  const phoneNumber = "021996800215";
  return (
    <Container
      href={`http://api.whatsapp.com/send?1=pt_BR&phone=55${info.phone}`}
      target="_blank"
      variant={variant}
    >
      {variant === "icon" ? <WhatsAppIcon /> : <><WhatsAppSmallIcon />Enviar mensagem</>}
    </Container>
  );
};
