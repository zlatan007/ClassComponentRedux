import mainreducer from "./Reducer/mainreducer";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

const initialState = {};
const middleware = [thunk];

const store = createStore(mainreducer,
    initialState,
    compose(
    applyMiddleware(...middleware),
  )
    );

export default store;