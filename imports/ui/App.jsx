import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

// App component - represents the whole app
class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Hello World!</h1>
      </div>
    );
  }
}

App.propTypes = {
};

export default createContainer(() => {
  // Meteor.subscribe('');
  return {};
}, App);
