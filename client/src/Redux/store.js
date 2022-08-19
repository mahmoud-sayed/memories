import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';


const store = createStore(rootReducer, compose(applyMiddleware(reduxThunk)));

export default store;