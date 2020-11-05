import { CONTACT_OPEN } from '../actions/contactTypes';
import { CONTACT_CLOSE } from '../actions/contactTypes';

var initialState = {
    show_contact: false
}

export default function(state = initialState, action){
    switch(action.type){

        case CONTACT_OPEN:
            console.log('Contact true')
            return{
                ...state,
                show_contact: true
            }

        case CONTACT_CLOSE:
            console.log('Contact false')
            return{
                ...state,
                show_contact: false
            }

        default:
            return state;
    }
}