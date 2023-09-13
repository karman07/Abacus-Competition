import { createStore } from 'redux';
import countdownReducer from './reducer/countdownReducer';

const store = createStore(countdownReducer);

export default store;
