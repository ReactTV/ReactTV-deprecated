import ReactPlayer from "react-player";

import styles from "./VideoEmbed.module.css";

export type TVideoEmbedProps = {
  url: string;
};

const VideoEmbed = ({ url }: TVideoEmbedProps) => {
  return (
    <div className={styles.videoEmbed}>
      <ReactPlayer url={url} playing controls pip />
    </div>
  );
};

export default VideoEmbed;
