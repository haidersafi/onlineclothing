import React from 'react';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionPreview} from '../../redux/ShopData/ShopDataSelector';
const CollectionOverview=({collections})=>{
    console.log("abc",collections)
    return(
        <div>{
collections.map(({id,...otherCollectionProps})=>{
    return(<CollectionPreview key={id} {...otherCollectionProps}/>)
})
        }</div>
    )
}
const mapStateToProps=createStructuredSelector({collections: selectCollectionPreview})
export default  connect(mapStateToProps)(CollectionOverview);