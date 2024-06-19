// components/Playback/Playback.jsx
import React from 'react';
import './Playback.scss';

const Playback = () => {
  return (
    <div className="playback">
      <iframe 
        className="playback__iframe"
        width="100%" 
        height="166" 
        scrolling="no" 
        frameBorder="no" 
        allow="autoplay" 
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true">
      </iframe>
    </div>
  );
};

export default Playback;
