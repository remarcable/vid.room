import React, { Component, PropTypes } from 'react';

// Video component - displays just the video itself
export default class Video extends Component {
  render() {
    return (
      <div className="container">
        <h3>This is the Video itself.</h3>
      </div>
    );
  }
}

Video.propTypes = {
};
