import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer/reducer';

let createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);
let store = createStoreWithMiddleWare(reducer);

export default store;
