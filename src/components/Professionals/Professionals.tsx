import {
  BoxArea,
  BoxImage,
  BoxPrimary,
  BoxSecondary,
  BoxText,
  BoxTitle,
  Container,
  Title,
} from "./Professionals.style";
import foto_luana from "assets/img/professionals/luana.png";

export const Professionals = () => {
  const PROFESSIONALS = [
    [foto_luana, "Luana", "Idealizadora"],
    [foto_luana, "Luana", "Advogada"],
    [foto_luana, "Luana", "Psicologa"],
    [foto_luana, "Luana", "Médica"],
    [foto_luana, "Luana", "Assistente social"],
    [foto_luana, "Luana", "Enfermeira"],
    [foto_luana, "Luana", "Psiquiatra"],
    [foto_luana, "Luana", "Administradora"],
  ];

  function createBoxArea(professionals: Array<any>) {
		if( professionals.length === 3 ){
			return (
				<BoxArea>
					{createBox(0,professionals[0][0],professionals[0][1],professionals[0][2])}
					{createBox(1,professionals[1][0],professionals[1][1],professionals[1][2])}
					{createBox(2,professionals[2][0],professionals[2][1],professionals[2][2])}
				</BoxArea>
			);
		}
		if( professionals.length === 2 ){
			return (
				<BoxArea>
					{createBox(0,professionals[0][0],professionals[0][1],professionals[0][2])}
					{createBox(1,professionals[1][0],professionals[1][1],professionals[1][2])}
				</BoxArea>
			);
		}
		if( professionals.length === 1 ){
			return (
				<BoxArea>
					{createBox(0,professionals[0][0],professionals[0][1],professionals[0][2])}
				</BoxArea>
			);
		}
  }

  function createBox(index: number,photo: undefined,name: String,text: String) {
    if (index % 3 === 1) {
			return <BoxSecondary>{boxContent(photo, name, text)}</BoxSecondary>;
    } else {
			return <BoxPrimary>{boxContent(photo, name, text)}</BoxPrimary>;
    }
  }

  function boxContent(photo: undefined, name: String, text: String) {
    return (
      <>
        <BoxImage src={photo} alt={""} />
        <BoxTitle>{name}</BoxTitle>
        <BoxText>{text}</BoxText>
      </>
    );
  }
  return (
    <Container>
      <Title>Profissionais</Title>
      <>
        {PROFESSIONALS.map(function (val, index) {
          if (index % 3 === 0) {
             return ( createBoxArea(PROFESSIONALS.slice(index, index + 3)) );
          }
					return <></>
        })}
      </>
    </Container>
  );
};
