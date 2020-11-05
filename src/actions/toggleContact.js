import { CONTACT_OPEN } from './contactTypes';
import { CONTACT_CLOSE } from './contactTypes';

let bool_C = false;
export const ToggleContact = ()=> dispatch=>{
    bool_C = !bool_C;
    console.log('Toggling contact');
     dispatch({
         type: bool_C === true?  CONTACT_OPEN : CONTACT_CLOSE
     })
}