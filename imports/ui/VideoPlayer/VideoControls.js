import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { togglePlay } from '/imports/api/redux/actions';

import Duration from './Duration';

const propTypes = {
  duration: PropTypes.number.isRequired,
  elapsed: PropTypes.number.isRequired,
  playing: PropTypes.bool.isRequired,
  volume: PropTypes.number.isRequired,
  togglePlay: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  togglePlay: () => dispatch(togglePlay()),
});

const VideoControls = props => (
  <div className="video-controls">
    <div className="controls-base controls-left">
      <div
        className={props.playing ? 'icon icon-video-pause' : 'icon icon-video-play'}
        onClick={props.togglePlay}
      />
      <div className="video-time">
        <Duration
          seconds={props.elapsed}
        /> | <Duration
          seconds={props.duration}
        />
      </div>
    </div>

    <div className="controls-base controls-right">
      <div className={getVolumeIconClassName(props.volume)} />
      <div className="icon icon-video-settings" />
      <div className="icon icon-video-fullscreen" />
    </div>

    <div className="bottom-gradient" />
  </div>
);

VideoControls.propTypes = propTypes;

function getVolumeIconClassName(volume) {
  if (volume >= 0.8) {
    return 'icon icon-video-volume-up';
  } else if (volume === 0) {
    return 'icon icon-video-volume-muted';
  }

  return 'icon icon-video-volume-down';
}

export default connect(
  undefined,
  mapDispatchToProps,
)(VideoControls);
