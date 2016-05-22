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
          <h1 className="room-name">#{ this.props.roomname }</h1>
        </div>

        <VideoElement
        url={ this.props.url }
        playing={ this.props.playing }
        volume={ this.props.volume }
        />

        <VideoControls
        duration={ this.props.duration }
        playing={ this.props.playing }
        volume={ this.props.volume }
        elapsed={ Math.round(this.props.duration * this.props.played) }
        />
        <Progressbar
        played={ this.props.played }
        />
      </div>
    );
  }
}

Videoplayer.propTypes = {
  url: React.PropTypes.string.isRequired,
  playing: React.PropTypes.bool.isRequired,
  volume: React.PropTypes.number.isRequired,
  duration: React.PropTypes.number.isRequired,
  played: React.PropTypes.number.isRequired,
  roomname: React.PropTypes.string.isRequired,
};
