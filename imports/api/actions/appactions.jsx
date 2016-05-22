import appDispatcher from '../dispatcher/appdispatcher';

let appActions = {
  togglePlay() {
    appDispatcher.dispatch({
      actionType: 'toggle-play',
    });
  },

  setPlay(playing) {
    appDispatcher.dispatch({
      actionType: 'set-play',
      playing: playing,
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

  onProgress(e) {
    appDispatcher.dispatch({
      actionType: 'set-progress',
      progress: e.played,
      loaded: e.loaded,
    });
  },

  onDuration(duration) {
    appDispatcher.dispatch({
      actionType: 'set-duration',
      duration: duration,
    });
  },
};

export default appActions;
