import React from "react";

const VideoPlayer = ({ movieDetails }) => {
  return (
    <div
      className="col-6 border border-2"
      style={{ backgroundColor: "#2c548b" }}
    >
      <video
        src={movieDetails && movieDetails.VideoLink}
        className="w-100"
        autoPlay
        controls
      ></video>
    </div>
  );
};

export default VideoPlayer;
