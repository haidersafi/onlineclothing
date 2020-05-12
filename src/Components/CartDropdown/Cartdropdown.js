import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './cartdropdown.scss';
import CartItem from '../CartItem/CartItem';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/CartDropdown/CartSelectors';
import {createStructuredSelector} from 'reselect';

const CartDropdown=({cartItems})=>(
    <div className='cart-dropdown'>
    <div className='cart-items'>
{cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem}/>)}
    </div>
    <CustomButton>Checkout</CustomButton>
    </div>
)

const mapStateToProps=createStructuredSelector
({
cartItems:selectCartItems
})


export default connect(mapStateToProps)(CartDropdown);