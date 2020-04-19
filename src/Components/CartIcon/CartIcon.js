import React from 'react';
import {ReactComponent as ShoppingBag} from '../../Asset/ShoppingBag.svg';
import './carticon.scss'
import {connect} from 'react-redux';
import {ToggleDropdown} from '../../redux/CartDropdown/DropdownAction';

const CartIcon=({ToggleDropdown})=>{
    return(<div className='cart-icon' onClick={ToggleDropdown}>
        <ShoppingBag className="shopping-icon" />
        <span className='item-count'>0</span>
        </div>)
}
const mapDispatchtoProps=(dispatch)=>({
    ToggleDropdown:()=>dispatch(ToggleDropdown())
})
export default connect(null,mapDispatchtoProps)(CartIcon);
