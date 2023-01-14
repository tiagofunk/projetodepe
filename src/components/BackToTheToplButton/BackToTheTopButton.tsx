import { Button, Image } from "./BackToTheTopButton.style";

import img from "assets/img/backToTheTopButton/backToTheTopButton.png";

export const BackToTheTopButton = () => {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button onClick={scrollToTop}>
      <Image src={img} />
    </Button>
  );
};
