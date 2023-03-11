import { Container } from "./VideoArea.style";

export const VideoArea = () => {
  return (
    <Container>
      <iframe
        width="96%"
        height="566rem"
        src="https://www.youtube-nocookie.com/embed/2grAUNpnG8I"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </Container>
  );
};
