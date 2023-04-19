import ProjetcOwner from "projectOwner/ProjectOwner";
import { Container, WhatsAppIcon, WhatsAppSmallIcon } from "./Whatsapp.styles";

const {info} = ProjetcOwner;

interface WhatsappProps {
  variant: "icon" | "button";
}

const phoneHelper = (phone:String)=>{
  const regex = new RegExp(/[\\(\\) -]/g)
  return phone.replace(regex,"")
}

export const Whatsapp = ({ variant }: WhatsappProps) => {
  return (
    <Container
      href={`http://api.whatsapp.com/send?1=pt_BR&phone=55${phoneHelper(info.phone)}`}
      target="_blank"
      variant={variant}
    >
      {variant === "icon" ? <WhatsAppIcon /> : <><WhatsAppSmallIcon />Enviar mensagem</>}
    </Container>
  );
};
