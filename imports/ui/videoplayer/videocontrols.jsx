import React, { Component, PropTypes } from 'react';
import Duration from './duration.jsx';

// VideoControls component - displays the control elements for video-playback
export default class VideoControls extends Component {
  render() {

    let volumeIcon;
    if (this.props.volume >= 0.8) {
      volumeIcon = 'icon-video-volume-up';
    } else if (this.props.volume === 0) {
      volumeIcon = 'icon-video-volume-muted';
    } else {
      volumeIcon = 'icon-video-volume-down';
    }

    return (
      <div className="video-controls">

        <div className="controls-base controls-left">
          <div className={ 'icon ' + (this.props.playing ? 'icon-video-pause' : 'icon-video-play') } />
          <div className="video-time">
            <Duration
            seconds={ this.props.elapsed }
            /> | <Duration
            seconds={ this.props.duration }
            />
          </div>
        </div>

        <div className="controls-base controls-right">
          <div className={ 'icon ' + volumeIcon }></div>
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
  duration: React.PropTypes.number.isRequired,
  elapsed: React.PropTypes.number.isRequired,
  playing: React.PropTypes.bool.isRequired,
  volume: React.PropTypes.number.isRequired,
};
