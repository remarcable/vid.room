import React from 'react';
import { Provider } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';

import store from '/imports/api/redux/store';

import VideoPlayer from './VideoPlayer/VideoPlayer';
import RoomSettings from './RoomSettings/RoomSettings';
import Chat from './Chat/Chat';

const App = () => (
  <Provider store={store}>
    <div className="container">
      <VideoPlayer />
      <RoomSettings />
      <Chat />
    </div>
  </Provider>
);

App.propTypes = {
};

export default createContainer(() => ({}), App);
