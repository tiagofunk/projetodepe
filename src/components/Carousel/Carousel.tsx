import { Carousel as CarouselAntd } from "antd";

import { StyledImg, Tab } from "./Carousel.styles";
import img1 from "assets/img/carousel/img1.jpeg";
import img2 from "assets/img/carousel/img2.webp";
import img3 from "assets/img/carousel/img3.jpeg";
import img4 from "assets/img/carousel/img4.webp";

export const Carousel = () => {
  const carouselContent = [img1, img2, img3, img4];

  return (
    <CarouselAntd autoplay autoplaySpeed={7000} effect='fade'>
      {carouselContent.map((tabContent) => (
        <Tab>
          <StyledImg src={tabContent} alt="" />
        </Tab>
      ))}
    </CarouselAntd>
  );
};

export default Carousel;
