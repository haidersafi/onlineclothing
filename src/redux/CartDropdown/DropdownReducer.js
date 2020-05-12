import {DropdownTypes} from './DropdownTypes';
import addItemToCart from '../../Components/CartUtility/CartUtility';
const initialState = {
  toggledropdown:false,
  item:[]
};
 const DropdownReducer = (state=initialState, action) => {
  switch (action.type) {
    case DropdownTypes.TOGGLE_DROPDOWN:
      return ({ ...state,toggledropdown:!state.toggledropdown })
      case DropdownTypes.ADD_CARTITEM:
        return ({...state,item:addItemToCart(state.item,action.payload)})
    default: 
      return state;
  }
}

export default DropdownReducer;
