import { combineReducers } from 'redux';
import navReducer from './navReducer';
import CpostReducer from './CpostReducer';
import CbtnReducer from './CbtnReducer';
import commentReducer from './commentReducer';

export default combineReducers({
    contact_btn: CbtnReducer,
    navbar: navReducer,
    contact_post : CpostReducer,
    comment: commentReducer
})