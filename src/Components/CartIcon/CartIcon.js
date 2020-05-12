import React from 'react';
import {ReactComponent as ShoppingBag} from '../../Asset/ShoppingBag.svg';
import './carticon.scss'
import {connect} from 'react-redux';
import {ToggleDropdown} from '../../redux/CartDropdown/DropdownAction';
import {selectItemCount}  from '../../redux/CartDropdown/CartSelectors';
import {createStructuredSelector} from 'reselect';

const CartIcon=({ToggleDropdown,itemCount})=>{
    return(<div className='cart-icon' onClick={ToggleDropdown}>
        <ShoppingBag className="shopping-icon" />
        <span className='item-count'>{itemCount}</span>
        </div>)
}
const mapDispatchtoProps=(dispatch)=>({
    ToggleDropdown:()=>dispatch(ToggleDropdown())
})

const mapStateToProps=createStructuredSelector({
    itemCount:selectItemCount
})
export default connect(mapStateToProps,mapDispatchtoProps)(CartIcon);
