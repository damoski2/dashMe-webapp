import { POST_COMMENT } from '../actions/commentTypes';
import { FETCH_COMMENT } from '../actions/commentTypes';

const initialState = {
    comments: [],
    singleComment: {}
}

export default function(state = initialState, action){
    switch(action.type){

        case FETCH_COMMENT:
            return {
                ...state,
                comments: action.payload
            }

        case POST_COMMENT:
            return{
                ...state,
                singleComment: action.payload
            }    

        default:
            return state
    }
}