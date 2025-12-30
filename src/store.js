import { configureStore } from "@reduxjs/toolkit";
import compteurReducer from './reducer';

const store = configureStore({

  reducer: {

    Compteur: compteurReducer

  }

})

export default store;



/* import { createStore } from 'redux';
import Reducer from './reducer';

// <---------------------REDUCER-------------------> //

const store = createStore(Reducer);

// <---------------------EXPORT-------------------> //

export default store; */