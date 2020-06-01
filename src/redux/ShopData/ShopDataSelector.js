import {createSelector} from 'reselect';

const selectShop=state=>state.collectionShop;
export const selectShopCollection=createSelector([selectShop],shopItem=>shopItem.collection)