import {createSelector} from 'reselect';
export const selectCart=state=>state.toggle;

export const selectCartItems=createSelector([selectCart],cart=>cart.item);
export const selectItemCount=createSelector([selectCartItems],(item=>item.reduce((accumulatedQuantity,cartItem)=>accumulatedQuantity+cartItem.quantity,0)))
export const selectTotalPrice=createSelector([selectCartItems],(item=>item.reduce((accumulatedQuantity,cartItem)=>accumulatedQuantity+cartItem.quantity*cartItem.price,0)))