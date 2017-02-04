import {
  PLAY_VIDEO,
  PAUSE_VIDEO,
  TOGGLE_PLAY,
  SET_VIDEO_PLAYED,
  SET_VIDEO_LOADED,
  SET_VIDEO_DURATION,
  SET_VIDEO_VOLUME,
} from '../actions/actionTypes';

const initialState = {
  url: 'https://www.youtube.com/watch?v=DOH3eWW_EsY',
  playing: false,
  played: 0, // decimal value
  loaded: 0,
  duration: 0, // seconds
  volume: 0.8,
  roomName: 'room-name',
};

export default function player(state = initialState, action = {}) {
  switch (action.type) {
    case PLAY_VIDEO: {
      return {
        ...state,
        playing: true,
      };
    }
    case PAUSE_VIDEO: {
      return {
        ...state,
        playing: false,
      };
    }
    case TOGGLE_PLAY: {
      return {
        ...state,
        playing: !state.playing,
      };
    }
    case SET_VIDEO_PLAYED: {
      return {
        ...state,
        played: action.played,
      };
    }
    case SET_VIDEO_LOADED: {
      return {
        ...state,
        loaded: action.loaded,
      };
    }
    case SET_VIDEO_DURATION: {
      return {
        ...state,
        duration: action.duration,
      };
    }
    case SET_VIDEO_VOLUME: {
      return {
        ...state,
        volume: action.volume,
      };
    }
    default: {
      return state;
    }
  }
}
