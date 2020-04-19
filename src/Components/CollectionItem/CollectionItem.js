import React from 'react';
import './CollectionItem.scss';
import CustomButton from '../CustomButton/CustomButton';


const CollectionItem=({name,imageUrl,price})=>{
    return(<div className='collection-item'>
    <div className='image'
    style={{backgroundImage:`url(${imageUrl})`}}></div>
    <div className='collection-footer'><span className='name'>{name}</span>
    <span className='price'>{price}$</span></div>
    <CustomButton inverted >shop</CustomButton>
    </div>
    )
}

export default CollectionItem;
