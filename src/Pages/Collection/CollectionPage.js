import React from 'react';
import CollectionItem from '../../Components/CollectionItem/CollectionItem';
import './collectionpage.scss';
import { selectCollection } from '../../redux/ShopData/ShopDataSelector';
import { connect } from 'react-redux';


const CollectionPage=({ collection })=>{
    const {title,items}=collection;
    return(
        <div className="collectionpage">

        <h2>{title}</h2>
        <div className="items">
    {items.map(item=><CollectionItem key={item.id} item={item}/>)}
    </div>
        </div>)
}
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  });
export default connect(mapStateToProps)(CollectionPage);