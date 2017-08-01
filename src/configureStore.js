import {createStore, applyMiddleware, compose} from 'redux';

import rootReducer from 'reducer';

export default function configureStore () {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
