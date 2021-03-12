import { combineReducers } from 'redux';
import Articles from './article_reducer';

const rootReducer = combineReducers({
    Articles
});

export default rootReducer;