import { NAV_OPEN } from './navTypes';
import { NAV_CLOSE } from './navTypes';

let bool = false;
export const ToggleNav = ()=> dispatch=>{
    bool = !bool;
    console.log('Toggling');
     dispatch({
         type: bool === true?  NAV_OPEN : NAV_CLOSE
     })
}