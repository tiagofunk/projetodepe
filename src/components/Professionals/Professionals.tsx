import {
  BoxArea,
  BoxImage,
  Box,
  BoxText,
  BoxTitle,
  Container,
  Title,
} from "./Professionals.style";

import photo_anna_carolina_viola from "assets/img/professionals/anna_carolina_viola.png";
import photo_anna_paula_viola from "assets/img/professionals/anna_paula_viola.png";
import photo_camila_peres from "assets/img/professionals/camila_peres.png";
import photo_carolina_arruda from "assets/img/professionals/carolina_arruda.png";
import photo_clarice_peres from "assets/img/professionals/clarice_peres.png";
import photo_evanir_pestana from "assets/img/professionals/evanir_pestana.png";
import photo_gabriela from "assets/img/professionals/gabriela.png";
import photo_grasiele_gomes from "assets/img/professionals/grasiele_gomes.png";
import photo_guilherme_andrade from "assets/img/professionals/guilherme_andrade.png";
import photo_leonardo_fonseca from "assets/img/professionals/leonardo_fonseca.png";
import photo_luana_aruantes from "assets/img/professionals/luana_aruantes.png";
import photo_marcos_uchoa from "assets/img/professionals/marcos_uchoa.png";
import photo_onilia from "assets/img/professionals/onilia.png";
import photo_priscila_pereira from "assets/img/professionals/priscila_pereira.png";
import photo_rebeca_andrade from "assets/img/professionals/rebeca_andrade.png";
import photo_reinaldo_amorim from "assets/img/professionals/reinaldo_amorim.png";
import photo_ricardo_nascimento from "assets/img/professionals/ricardo_nascimento.png";
import photo_valdemir_francisco_da_silva_junior from "assets/img/professionals/valdemir_francisco_da_silva_junior.png";
import photo_victoria_lemos from "assets/img/professionals/victoria_lemos.png";
import photo_vitor_castro_luna from "assets/img/professionals/vitor_castro_luna.png";
import photo_yuri_nascifer from "assets/img/professionals/yuri_nascifer.png";

export const Professionals = () => {
  const professionalsList = [
    { photo: photo_luana_aruantes, name: "Luana Aruantes", expertisse: "Diretora Executiva e Psicóloga" },
    { photo: photo_camila_peres, name: "Camila Pires", expertisse: "Auxiliar Administrativo" },
    { photo: photo_vitor_castro_luna, name: "Vitor Castro Luna", expertisse: "Equipe Executiva" },
    { photo: photo_marcos_uchoa, name: "Marcos Uchôa", expertisse: "Tesoureiro, Jornalista, Repórter de Televisão por 38 anos" },
    { photo: photo_ricardo_nascimento, name: "Ricardo Nascimento", expertisse: "Especialista em TI  e com experiencia na área audiovisual" },
    { photo: photo_victoria_lemos, name: "Victória Lopes", expertisse: "Professora de dança do Centro de Arte e Cultura da rural (CAC)" },
    { photo: photo_yuri_nascifer, name: "Yuri Nascifer", expertisse: "Coreógrafo, Professor de dança, Ator, Modelo e Diretor de movimento" },
    { photo: photo_guilherme_andrade, name: "Guilherme Andrade (Romec)", expertisse: "Bailarino e Ator carioca" },
    { photo: photo_reinaldo_amorim, name: "Reinaldo Amorim", expertisse: "Auxiliar de Veterinário" },
    { photo: photo_priscila_pereira, name: "Priscila Pereira", expertisse: "Assistente Social" },
    { photo: photo_grasiele_gomes, name: "Grasiele Gomes", expertisse: "Psicóloga, Terapeuta e Palestrante" },
    { photo: photo_evanir_pestana, name: "Evanir Pestana", expertisse: "Psicólogo Clínico" },
    { photo: photo_rebeca_andrade, name: "Rebeca Andrade", expertisse: "Psicóloga Clínica de crianças, adolescentes e adultos" },
    { photo: photo_valdemir_francisco_da_silva_junior, name: "Valdemir Francisco da Silva Júnior", expertisse: "Psicólogo" },
    { photo: photo_carolina_arruda, name: "Carolina Arruda", expertisse: "Psicóloga, Escritora e Podcaster" },
    { photo: photo_leonardo_fonseca, name: "Dr. Leonardo Fonseca", expertisse: "Medico Psiquiatra" },
    { photo: photo_clarice_peres, name: "Clarice Pires", expertisse: "Economista (UERJ). Mestre em Políticas Públicas pela UFRJ" },
    { photo: photo_anna_paula_viola, name: "Anna Paula Viola", expertisse: "Formada em Design de interface" },
    { photo: photo_anna_carolina_viola, name: "Anna Carolina Viola", expertisse: "Empreendedora e Advogada" },
    { photo: photo_gabriela, name: "Gabriela", expertisse: "Advogada" },
    { photo: photo_onilia, name: "Onilia", expertisse: "Contadora, empreendedora e ativista feminina" },
  ];

  return (
    <Container>
      <Title>Profissionais cadastrados</Title>
      <BoxArea>
        {professionalsList.map((person, index) => (
          <Box isEven={index % 2 === 0} key={index}>
            <BoxImage src={person.photo} alt={""} />
            <BoxTitle>{person.name}</BoxTitle>
            <BoxText>{person.expertisse}</BoxText>
          </Box>
        ))}
      </BoxArea>
    </Container>
  );
};
