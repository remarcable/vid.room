import React, { PropTypes } from 'react';

const propTypes = {
  played: PropTypes.number.isRequired,
};

const ProgressBar = ({ played }) => (
  <div className="progressbar" style={{ width: `${played * 100}%` }} />
);

ProgressBar.propTypes = propTypes;

export default ProgressBar;
