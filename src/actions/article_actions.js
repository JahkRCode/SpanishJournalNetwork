import { 
    GET_ARTICLES_FAILURE,
    GET_ARTICLES_SUCCESS,
    GET_ARTICLES_START,
    CLEAR_ARTICLES
} from './../containers/types';
//import axios from 'axios';

const article_URL = 'https://www.spanishjournal.com/wp-json/wp/v2/posts?categories=';
const listSettings = '&per_page=20&orderby=date&order=desc';

export function getArticles(categoryID){
    return async (dispatch) => {
        dispatch({ type: GET_ARTICLES_START })
        
        await fetch(article_URL + categoryID + listSettings)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({ type: GET_ARTICLES_SUCCESS, payload: responseJson })
                //console.warn("***** RESPONSE: " + JSON.stringify(responseJson[0]));
                //return responseJson;
            })
            .catch((error) => dispatch({ type: GET_ARTICLES_FAILURE, payload: error }));
            /*
        return {
            type: GET_ARTICLES,
            payload: request
        }*/
    }
}    
export function clearArticles(){
    return {
        type: CLEAR_ARTICLES,
        payload: []
    }
}

//if (response.data[key].article_image_url){