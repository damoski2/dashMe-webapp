import { CONTACT_POST } from '../actions/navTypes';

const initialState = {
    info:{}
}

export default  function(state = initialState, action){
    switch(action.type){

        case CONTACT_POST: 
        return{
            ...state,
            info: action.payload
        }

         default :
        return state;
    }
}