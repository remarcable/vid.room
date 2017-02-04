import React, { Component, PropTypes } from 'react';
import ReactPlayer from 'react-player';

import appActions from '../../api/actions/appactions';

// VideoElement component - displays just the video itself
export default class VideoElement extends Component {
  render() {
    return (
      <div className="video-element">
        <ReactPlayer
        className="video-frame"
        progressFrequency={ 200 }
        width=""
        height=""
        { ...this.props }

        onPlay={ () => appActions.setPlay(true) }
        onPause={ () => appActions.setPlay(false) }
        onEnded={ () => appActions.setPlay(false) }
        onProgress={ e => appActions.onProgress(e) }
        onDuration={ duration => appActions.onDuration(duration) }
        onStart={ () => console.log('onStart') }
        onBuffer={ () => console.log('onBuffer') }
        onError={ e => console.log('onError', e) }
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
