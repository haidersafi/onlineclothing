import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './cartdropdown.scss';
import CartItem from '../CartItem/CartItem';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/CartDropdown/CartSelectors';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router';
import {ToggleDropdown} from '../../redux/CartDropdown/DropdownAction';


const CartDropdown=({cartItems,history,dispatch})=>(
    <div className='cart-dropdown'>
    <div className='cart-items'>
    {cartItems.length?
cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem}/>):<span class="empty-message">Your cart is empty</span>}
    </div>
    <CustomButton onClick={()=>{history.push('/checkout');dispatch(ToggleDropdown());}}>Checkout</CustomButton>
    </div>
)

const mapStateToProps=createStructuredSelector
({
cartItems:selectCartItems
})


export default withRouter(connect(mapStateToProps)(CartDropdown));