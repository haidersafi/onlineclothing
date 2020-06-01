import React from 'react';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectShopCollection} from '../../redux/ShopData/ShopDataSelector';
const CollectionOverview=({collections})=>{
    return(
        <div>{
collections.map(({id,...otherCollectionProps})=>{
    return(<CollectionPreview key={id} {...otherCollectionProps}/>)
})
        }</div>
    )
}
const mapStateToProps=createStructuredSelector({collections:selectShopCollection})
export default  connect(mapStateToProps)(CollectionOverview);