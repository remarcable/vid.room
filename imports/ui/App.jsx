import React from 'react';
import { Provider } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';

import store from '/imports/api/redux/store';

import VideoPlayer from './VideoPlayer/VideoPlayer';
import Roomsettings from './roomsettings/roomsettings.jsx';
import Chat from './chat/chat.jsx';

const App = () => (
  <Provider store={store}>
    <div className="container">
      <VideoPlayer />
      <Roomsettings />
      <Chat />
    </div>
  </Provider>
);

App.propTypes = {
};

export default createContainer(() => ({}), App);
