
import {DropdownTypes} from './DropdownTypes'
export const ToggleDropdown=()=>({
type:DropdownTypes.TOGGLE_DROPDOWN
})
export const AddItem=(item)=>({
    type:DropdownTypes.ADD_CARTITEM,
    payload:item
})