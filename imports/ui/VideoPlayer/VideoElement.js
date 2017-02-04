import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';

import {
  playVideo,
  pauseVideo,
  setVideoProgress,
  setVideoDuration,
} from '/imports/api/redux/actions';

const propTypes = {
  url: PropTypes.string.isRequired,
  playing: PropTypes.bool.isRequired,
  volume: PropTypes.number.isRequired,
  playVideo: PropTypes.func.isRequired,
  pauseVideo: PropTypes.func.isRequired,
  onProgress: PropTypes.func.isRequired,
  onDuration: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  playVideo: () => dispatch(playVideo()),
  pauseVideo: () => dispatch(pauseVideo()),
  onProgress: ({ played, loaded }) => dispatch(setVideoProgress(played, loaded)),
  onDuration: duration => dispatch(setVideoDuration(duration)),
});

const VideoElement = props => (
  <div className="video-element">
    <ReactPlayer
      className="video-frame"
      // progressFrequency={200}
      width=""
      height=""
      url={props.url}
      playing={props.playing}
      volume={props.volume}

      onPlay={props.playVideo}
      onPause={props.pauseVideo}
      onEnded={props.pauseVideo} // TODO: Show some fancy things when video ends
      onProgress={props.onProgress}
      onDuration={props.onDuration}
      onStart={() => console.log('onStart')}
      onBuffer={() => console.log('onBuffer')}
      onError={e => console.log('onError', e)}
    />
  </div>
);

VideoElement.propTypes = propTypes;

export default connect(
  undefined,
  mapDispatchToProps,
)(VideoElement);
