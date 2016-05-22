import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import appStore from '../api/stores/stores';

import Videoplayer from './videoplayer/videoplayer.jsx';
import Roomsettings from './roomsettings/roomsettings.jsx';
import Chat from './chat/chat.jsx';

function getAppStateFromStore() {
  console.log('getting state from store');
  return appStore.getState();
}

// App component - represents the whole app
class App extends Component {
  constructor(props, context) {
      super(props, context);
      this.state = getAppStateFromStore();
    };

  componentDidMount() {
    appStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    appStore.removeChangeListener(this._onChange.bind(this));
  }

  render() {
    return (
      <div className="container">
        <Videoplayer { ...this.state }/>
        <Roomsettings />
        <Chat />
      </div>
    );
  }

  _onChange() {
    console.log('changeEvent!');
    console.log('this is:', this);
    this.setState(getAppStateFromStore());
  }
}

App.propTypes = {
};

export default createContainer(() => ({}), App);
