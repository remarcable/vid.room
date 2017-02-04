import React, { Component, PropTypes } from 'react';

export default class Progressbar extends Component {
  render() {
    progressbarStyle = {
      width: this.props.played * 100 + '%',
    };
    return (
      <div className="progressbar" style={ progressbarStyle }>
      </div>
    );
  }
}

Progressbar.propTypes = {
  played: React.PropTypes.number.isRequired,
};
