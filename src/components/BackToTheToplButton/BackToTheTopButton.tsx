import { ScrollButton, Image } from "./BackToTheTopButton.style";

import img from "assets/img/backToTheTopButton/backToTheTopButton.png";
import { MutableRefObject, useEffect, useState } from "react";

interface ButtonProps {
  mainContainerRef: MutableRefObject<HTMLDivElement | null>;
}

export const BackToTheTopButton = ({ mainContainerRef }: ButtonProps) => {
  const [visible, setVisible] = useState(false);
  const [mainContainer, setMainContainer] = useState<HTMLDivElement | null>(
    null
  );
  const valueMinimalScroll = 300;

  useEffect(() => {
    if (mainContainerRef) setMainContainer(mainContainerRef.current);
  }, [mainContainerRef]);

  const toggleVisible = () => {
    if (mainContainer) {
      const scrolled = mainContainer?.scrollTop;
      if (scrolled > valueMinimalScroll) {
        setVisible(true);
      } else if (scrolled <= valueMinimalScroll) {
        setVisible(false);
      }
    }
  };

  mainContainer?.addEventListener("scroll", toggleVisible);

  const scrollToTop = () => {
    mainContainer?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollButton
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      <Image src={img} />
    </ScrollButton>
  );
};
