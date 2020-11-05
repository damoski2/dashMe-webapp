import { NAV_OPEN } from '../actions/navTypes';
import { NAV_CLOSE } from '../actions/navTypes';


var initialState = {
    show_navbar: false
}

export default function(state = initialState, action){
    switch(action.type){

        case NAV_OPEN:
            console.log('true')
            return{
                ...state,
                show_navbar: true
            }

        case NAV_CLOSE:
            console.log('false')
            return{
                ...state,
                show_navbar: false
            }

        default:
            return state;
    }
}