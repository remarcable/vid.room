import {
  PLAY_VIDEO,
  PAUSE_VIDEO,
  TOGGLE_PLAY,
  SET_VIDEO_PLAYED,
  SET_VIDEO_LOADED,
  SET_VIDEO_DURATION,
  SET_VIDEO_VOLUME,
} from '../actionTypes';

export function playVideo() {
  return { type: PLAY_VIDEO };
}

export function pauseVideo() {
  return { type: PAUSE_VIDEO };
}

export function togglePlay() {
  return { type: TOGGLE_PLAY };
}

export function setVideoProgress(played, loaded) {
  return (dispatch) => {
    if (played) dispatch(setVideoPlayed(played));
    if (loaded) dispatch(setVideoLoaded(loaded));
  };
}

export function setVideoDuration(duration) {
  return { type: SET_VIDEO_DURATION, duration };
}

export function setVideoPlayed(played) {
  return { type: SET_VIDEO_PLAYED, played };
}

export function setVideoLoaded(loaded) {
  return { type: SET_VIDEO_LOADED, loaded };
}

export function setVideoVolume(volume) {
  return { type: SET_VIDEO_VOLUME, volume };
}
