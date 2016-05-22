import { appDispatcher } from '../dispatcher/appdispatcher';
import { EventEmitter } from 'events';

let CHANGE_EVENT = 'change';

let appStore = Object.assign({}, EventEmitter.prototype, {
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
      console.log('toggling play / pause');
      break;
    case 'set-volume':
      console.log('settings volume');
      break;
    default:

    // nothing
  }
});

export default appStore;
