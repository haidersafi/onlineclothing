import {DropdownTypes} from './DropdownTypes'
const initialState = {
  toggledropdown:false
};
 const DropdownReducer = (state=initialState, action) => {
  switch (action.type) {
    case DropdownTypes.TOGGLE_DROPDOWN:
      return ({ ...state,toggledropdown:!state.toggledropdown })
    default: 
      return state;
  }
}

export default DropdownReducer;
