import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'

export default (rootReducer) => {
  const store = createStore(rootReducer, applyMiddleware(thunk))
  return { store };
};
