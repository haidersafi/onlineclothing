import UserReducer from './User/UserReducer';
import DropdownReducer from './CartDropdown/DropdownReducer'
import {combineReducers} from 'redux';



export default combineReducers({ user:UserReducer,toggle:DropdownReducer
})