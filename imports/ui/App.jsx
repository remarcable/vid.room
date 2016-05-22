import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import Videoplayer from './videoplayer/videoplayer.jsx';
import Roomsettings from './roomsettings/roomsettings.jsx';
import Chat from './chat/chat.jsx';

// App component - represents the whole app
class App extends Component {
  constructor(props, context) {
      super(props, context);

      this.state = {
        url: 'https://www.youtube.com/watch?v=DOH3eWW_EsY',
        playing: false,
        played: 0.2,
        loaded: 0.7,
        duration: 320, // seconds
        volume: 0.8,
        roomname: 'room-name',
      };
    };

  render() {
    return (
      <div className="container">
        <Videoplayer { ...this.state }/>
        <Roomsettings />
        <Chat />
      </div>
    );
  }
}

App.propTypes = {
};

export default createContainer(() => ({}), App);
