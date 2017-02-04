import {
  PLAY_VIDEO,
  PAUSE_VIDEO,
  TOGGLE_PLAY,
  SET_VIDEO_PROGRESS,
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

export function setVideoProgress(progress, loaded) {
  return { type: SET_VIDEO_PROGRESS, progress, loaded };
}

export function setVideoDuration(duration) {
  return { type: SET_VIDEO_DURATION, duration };
}

export function setVideoVolume(volume) {
  return { type: SET_VIDEO_VOLUME, volume };
}
