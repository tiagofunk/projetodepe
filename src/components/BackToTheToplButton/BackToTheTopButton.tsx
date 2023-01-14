import { ScrollButton, Image } from "./BackToTheTopButton.style";

import img from "assets/img/backToTheTopButton/backToTheTopButton.png";
import { useState } from "react";

export const BackToTheTopButton = () => {
  const [visible, setVisible] = useState(false);
  const valueMinimalScroll = 300;

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > valueMinimalScroll) {
      setVisible(true);
    } else if (scrolled <= valueMinimalScroll) {
      setVisible(false);
    }
  };

  window.addEventListener('scroll', toggleVisible);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollButton onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
      <Image src={img} />
    </ScrollButton>
  );
};
