import React, { Component, PropTypes } from 'react';

import Video from './video.jsx';
import VideoControls from './videocontrols.jsx';
import Progressbar from './progressbar.jsx';

// Videoplayer component - displays the video and videocontrol-elements
export default class Videoplayer extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="room-name">This is the Videoplayer.</h1>
        <Video />
        <VideoControls />
        <Progressbar />
      </div>
    );
  }
}

Videoplayer.propTypes = {
};
