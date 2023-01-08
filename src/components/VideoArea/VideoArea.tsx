import { Container } from "./VideoArea.style";

import YouTube, { YouTubeProps } from "react-youtube";

export const VideoArea = () => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "566rem",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <Container>
      <YouTube videoId="2grAUNpnG8I" opts={opts} onReady={onPlayerReady} />
    </Container>
  );
};
