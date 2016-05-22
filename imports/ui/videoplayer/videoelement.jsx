import React, { Component, PropTypes } from 'react';
import ReactPlayer from 'react-player';

// VideoElement component - displays just the video itself
export default class VideoElement extends Component {
  render() {
    return (
      <div className="video-element">
        <ReactPlayer
        className="video-frame"
        width=""
        height=""
        { ...this.props }
        />
      </div>
    );
  }
}
VideoElement.propTypes = {
  url: React.PropTypes.string.isRequired,
  playing: React.PropTypes.bool.isRequired,
  volume: React.PropTypes.number.isRequired,
};
