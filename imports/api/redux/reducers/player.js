const initialState = {
  url: 'https://www.youtube.com/watch?v=DOH3eWW_EsY',
  playing: false,
  played: 0,
  loaded: 0,
  duration: 0, // seconds
  volume: 0.8,
  roomName: 'room-name',
};

export default function player(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
