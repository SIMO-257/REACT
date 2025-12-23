import { createStore } from 'redux';
import Reducer from './reducer';

// <---------------------REDUCER-------------------> //

const store = createStore(Reducer);

// <---------------------EXPORT-------------------> //

export default store;