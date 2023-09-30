// countdownReducer.js
const initialState = {
  countdownInSeconds: 900, // Initial countdown value in seconds
};

const countdownReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DECREMENT_COUNTDOWN':
      return {
        ...state,
        countdownInSeconds: state.countdownInSeconds - 1,
      };
    default:
      return state;
  }
};

export default countdownReducer;
