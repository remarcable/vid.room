import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import Videoplayer from './videoplayer/videoplayer.jsx';
import Roomsettings from './roomsettings/roomsettings.jsx';
import Chat from './chat/chat.jsx';

// App component - represents the whole app
class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Hello World!</h1>
        <Videoplayer />
        <Roomsettings />
        <Chat />
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
