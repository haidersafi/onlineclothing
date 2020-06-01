import {DropdownTypes} from './DropdownTypes';
import {addItemToCart,removeItemFromCart} from '../../Components/CartUtility/CartUtility';
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
        case DropdownTypes.REMOVE_CARTITEM:
          return({...state,item:state.item.filter(cartItem=>cartItem.id!==action.payload.id)})
    case DropdownTypes.REMOVE_CARTITEM_CHECKOUT:
      return({...state,item:removeItemFromCart(state.item,action.payload)})
          default: 
      return state;
  }
}

export default DropdownReducer;
