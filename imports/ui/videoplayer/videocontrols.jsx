import React, { Component, PropTypes } from 'react';

// VideoControls component - displays the control elements for video-playback
export default class VideoControls extends Component {
  render() {
    return (
      <div className="video-controls">

        <div className="controls-base controls-left">
          <div className="icon icon-video-pause"></div>
          <div className="video-time">05:30 | 10:00</div>
        </div>

        <div className="controls-base controls-right">
          <div className="icon icon-video-volume-up"></div>
          <div className="icon icon-video-settings"></div>
          <div className="icon icon-video-fullscreen"></div>
        </div>

        <div className="bottom-gradient">
        </div>
      </div>
    );
  }
}

VideoControls.propTypes = {
};
