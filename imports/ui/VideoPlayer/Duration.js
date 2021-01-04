import React, { PropTypes } from 'react';
import formatSeconds from './helpers/formatSeconds';

const propTypes = {
  className: PropTypes.string,
  seconds: PropTypes.number.isRequired,
};

const Duration = ({ className, seconds }) => (
  <time dateTime={`P${Math.round(seconds)}S`} className={className}>
    {formatSeconds(seconds)}
  </time>
);

Duration.propTypes = propTypes;

export default Duration;
