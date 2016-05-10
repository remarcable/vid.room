import React, { Component, PropTypes } from 'react';

// VideoElement component - displays just the video itself
export default class VideoElement extends Component {
  render() {
    return (
      <div className="video-element">
      <iframe
      className="video-frame"
      display="block"
      frameborder="0"
      src="https://www.youtube.com/embed/kNY7P6yWrfY?controls=0&disablekb=1&iv_load_policy=3&modestbranding=1&playsinline=1&rel=0&showinfo=0&html5=1&enablejsapi=1">
      </iframe>
      </div>
    );
  }
}

VideoElement.propTypes = {
};
