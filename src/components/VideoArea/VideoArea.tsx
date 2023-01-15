import { Container } from "./VideoArea.style";

export const VideoArea = () => {
  return (
    <Container>
      <iframe
        width="100%"
        height="566rem"
        src="https://www.youtube-nocookie.com/embed/2grAUNpnG8I"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </Container>
  );
};
