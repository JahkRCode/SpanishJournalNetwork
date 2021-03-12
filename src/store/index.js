import { createStore, applyMiddleware } from 'redux';
//import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
//import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';


const storeReduc = applyMiddleware(thunk)(createStore);
const Store = storeReduc(rootReducer); 
/*let reduxCompose = compose;

if(__DEV__){
    reduxCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
*/
export default Store;