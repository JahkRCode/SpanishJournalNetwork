import { 
    GET_ARTICLES_FAILURE,
    GET_ARTICLES_SUCCESS,
    GET_ARTICLES_START,
    CLEAR_ARTICLES
} from './../containers/types';

const initialState = {
    isLoading: false,
    articles: [],
    error: null,
}
export default articlesReducer = (state = initialState, action) => {
    //console.warn("***** REDUCER PAYLOAD: " + JSON.stringify(action))
    switch(action.type){
        // Begins retrieval of data
        case GET_ARTICLES_START:
            return {
                ...state,
                isLoading: true, 
            } 
        // Data is successfully got
        case GET_ARTICLES_SUCCESS:
            return {
                ...state,
                isLoading: false, 
                articles: action.payload
            }
        // Data failed to get got
        case GET_ARTICLES_FAILURE:
            return {
                ...state,
                isLoading: false, 
                error: action.payload
            }
        case CLEAR_ARTICLES:
            return {
                ...state,
                isLoading: false, 
                articles: action.payload
            }
        default:
            return state;
    }
}

/**
 * switch(action.type){
        // Begins retrieval of data
        case GET_ARTICLES_START:
            return Object.assign({},state, {
                isLoading: true, 
                articles: action.payload
            })
        // Data is successfully got
        case GET_ARTICLES_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false, 
                articles: action.payload
            })
        // Data failed to get got
        case GET_ARTICLES_FAILURE:
            return Object.assign({}, state, {
                isLoading: false, 
                error: action.payload
            })
        case CLEAR_ARTICLES:
            return Object.assign({}, state, {
                isLoading: false, 
                articles: action.payload
            })
        default:
            return state;
    }
 */