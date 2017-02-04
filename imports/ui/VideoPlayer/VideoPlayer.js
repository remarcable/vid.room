import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import VideoElement from './VideoElement';
import VideoControls from './VideoControls';
import ProgressBar from './ProgressBar';

const mapStateToProps = state => ({
  url: state.player.url,
  playing: state.player.playing,
  volume: state.player.volume,
  duration: state.player.duration,
  played: state.player.played,
  roomName: state.player.roomName,
});

const VideoPlayer = props => (
  <div className="section-videoplayer">
    <div className="room-name-wrapper">
      <h1 className="room-name">#{ props.roomName }</h1>
    </div>
    <VideoElement
      url={props.url}
      playing={props.playing}
      volume={props.volume}
    />
    <VideoControls
      duration={props.duration}
      playing={props.playing}
      volume={props.volume}
      elapsed={Math.round(props.duration * props.played)}
    />
    <ProgressBar
      played={props.played}
    />
  </div>
);

VideoPlayer.propTypes = {
  url: PropTypes.string.isRequired,
  playing: PropTypes.bool.isRequired,
  volume: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  played: PropTypes.number.isRequired,
  roomName: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(VideoPlayer);
