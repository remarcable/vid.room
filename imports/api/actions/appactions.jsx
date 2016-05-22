import appDispatcher from '../dispatcher/appdispatcher';

let appActions = {
  playPause() {
    appDispatcher.dispatch({
      actionType: 'toggle-play',
    });
  },

  stop() {
    appDispatcher.dispatch({
      actionType: 'stop-video',
    });
  },

  setVolume(e) {
    appDispatcher.dispatch({
      actionType: 'set-volume',
      volume: e,
    });
  },

  onSeekChange(e) {
    return;
  },

  onSeekMouseUp(e) {
    return;
  },

  onProgress(state) {
    return;
  },
};

export default appActions;
