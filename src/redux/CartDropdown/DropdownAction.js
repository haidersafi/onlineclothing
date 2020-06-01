
import {DropdownTypes} from './DropdownTypes'
export const ToggleDropdown=()=>({
type:DropdownTypes.TOGGLE_DROPDOWN
})
export const AddItem=(item)=>({
    type:DropdownTypes.ADD_CARTITEM,
    payload:item
})
export const RemoveItem=(item)=>({
    type:DropdownTypes.REMOVE_CARTITEM,
    payload:item
})
export const ReduceItemQuantity=(item)=>({
    type:DropdownTypes.REMOVE_CARTITEM_CHECKOUT,
    payload:item
})