import React from 'react';
import './VideoSection.css';

const VideoSection = () => {
  return (
    <section id="video-section">
      <div className="container">
        <h2>Introductory Video</h2>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/sample-video"
            title="Introductory Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
        <h3>Educational Videos</h3>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/another-sample-video"
            title="Educational Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
