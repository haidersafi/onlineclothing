import React from 'react';
import './checkout-item.scss';
import {RemoveItem,AddItem,ReduceItemQuantity} from '../../redux/CartDropdown/DropdownAction';
import {connect} from 'react-redux';

const CheckoutItem=({cartItem,dispatch})=>{
   
    const {name,price,quantity,imageUrl}=cartItem;
    return(<div className="checkout-item">
    <div className="image-container">
    <img src={imageUrl} alt="item"/></div>
  <span className="name">{name}</span>
       <span className="quantity">
       <span className="arrow" onClick={()=>dispatch(ReduceItemQuantity(cartItem))}>&#10094;</span><span className="value">{quantity}</span><span className="arrow" onClick={()=>dispatch(AddItem(cartItem))}>&#10095;</span></span>
     <span className="price">{price}</span>
      <div className="remove-button" onClick={()=>dispatch(RemoveItem(cartItem))}>&#10005;</div>
        
        </div>)
}

export default connect(null)(CheckoutItem);