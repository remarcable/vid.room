import appDispatcher from '../dispatcher/appdispatcher';
import { EventEmitter } from 'events';

let CHANGE_EVENT = 'change';

let _globalAppState = {
  url: 'https://www.youtube.com/watch?v=DOH3eWW_EsY',
  playing: false,
  played: 0,
  loaded: 0,
  duration: 320, // seconds
  volume: 0.8,
  roomname: 'room-name',
};

let appStore = Object.assign({}, EventEmitter.prototype, {
  getState() {
    return _globalAppState;
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
});

appDispatcher.register(function (action) {
  switch (action.actionType) {
    case 'toggle-play':
      togglePlay();
      appStore.emitChange();
      break;
    case 'set-play':
      setPlay(action.playing);
      appStore.emitChange();
      break;
    case 'set-volume':
      console.log('settings volume');
      appStore.emitChange();
      break;
    case 'set-progress':
      setProgress(action.progress, action.loaded);
      appStore.emitChange();
      break;
    default:

    // nothing
  }
});

function togglePlay() {
  _globalAppState.playing = !_globalAppState.playing;
};

function setPlay(playing) {
  _globalAppState.playing = playing;
};

function setProgress(progress, loaded) {
  if (progress) {
    _globalAppState.played = progress;
  }

  if (loaded) {
    _globalAppState.loaded = loaded;
  }
}

export default appStore;
