// components/Playback/Playback.jsx
import React from 'react';
import './Playback.scss';
import playIcon from '../../assets/icons/play.svg'; 
import pauseIcon from '../../assets/icons/pause.svg'; 

const Playback = () => {
  return (
    <div className="playback">
      <div className="playback__controls">
        <button className="playback__controls-btn">
          <img src={playIcon} alt="Play" />
        </button>
        <button className="playback__controls-btn">
          <img src={pauseIcon} alt="Pause" />
        </button>
      </div>
      <div className="playback__track-info">
        <div className="playback__track-info-title">Track Title</div>
        <div className="playback__track-info-artist">Artist Name</div>
      </div>
    </div>
  );
};

export default Playback;
