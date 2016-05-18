import React, { Component, PropTypes } from 'react';

import VideoElement from './videoelement.jsx';
import VideoControls from './videocontrols.jsx';
import Progressbar from './progressbar.jsx';

// Videoplayer component - displays the video and videocontrol-elements
export default class Videoplayer extends Component {
  constructor(props, context) {
      super(props, context);

      this.state = {
        playing: true,
        url: 'https://www.youtube.com/watch?v=99-n42Xb6NQ',
      };
    };

  render() {
    return (
      <div className="section-videoplayer">
        <div className="room-name-wrapper">
          <h1 className="room-name">#room-name</h1>
        </div>

        <VideoElement
        url={ this.state.url }
        playing={ this.state.playing }
        />

        <VideoControls />
        <Progressbar />
      </div>
    );
  }
}

Videoplayer.propTypes = {
};
