import {createSelector} from 'reselect';
const selectShop=state=>state.collectionShop;
export const selectShopCollection=createSelector([selectShop],shopItem=>shopItem.collection)
export const selectCollectionPreview = createSelector(
    [selectShopCollection],
    collections => Object.keys(collections).map(key => collections[key])
  );
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectShopCollection],
    collect => collect[collectionUrlParam]
  );