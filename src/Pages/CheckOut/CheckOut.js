import React from 'react';
import './checkout.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems,selectTotalPrice} from '../../redux/CartDropdown/CartSelectors';
import CheckoutItem from '../../Components/Checkout-Item/Checkout-Item'


const checkOut=({cartItems,total})=>{
    return(<div className="checkout-page">
    <div className="checkout-header">
    <div className="header-block product">
    <span>Product</span></div>
    <div className="header-block name">
    <span>Description</span></div>
    <div className="header-block quantity ">
    <span>Quantity</span></div>
    <div className="header-block price">
    <span>Price</span></div>
    <div className="header-block">
    <span>Remove</span></div></div>
    {cartItems.map(cartItem=><CheckoutItem key={cartItem.id} cartItem={cartItem}/>)}
    <div  className="total">
    <span>Total:{total>0?total:null}$</span></div>
    </div>)}

    const mapStateToProps=createStructuredSelector({
cartItems:selectCartItems,
total:selectTotalPrice
    })
  
export default connect(mapStateToProps)(checkOut);

