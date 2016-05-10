import React, { Component, PropTypes } from 'react';

import VideoElement from './videoelement.jsx';
import VideoControls from './videocontrols.jsx';
import Progressbar from './progressbar.jsx';

// Videoplayer component - displays the video and videocontrol-elements
export default class Videoplayer extends Component {
  render() {
    return (
      <div className="section-videoplayer">
        <div className="room-name-wrapper">
          <h1 className="room-name">#room-name</h1>
        </div>

        <VideoElement />

        <VideoControls />
        <Progressbar />
      </div>
    );
  }
}

Videoplayer.propTypes = {
};
