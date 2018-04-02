const playingReducerDefaultState = {
  isPlaying: false
};

export default (state = playingReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_IS_PLAYING':
      return {
        ...state,
        isPlaying: action.isPlaying
      };
    default:
      return state;
  }
};
