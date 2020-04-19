import React from 'react';
import './header.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../Asset/crwn.svg';
import {auth} from '../../Firebase/Firebase';
import {connect} from 'react-redux';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/Cartdropdown'
import {ToggleDropdown} from '../../redux/CartDropdown/DropdownAction'
 const Header=({currentUser,toggle,toggleDropdown})=>{
    return(<div className='header'>
    <Link to='/' className='logo-container'><Logo/></Link>
    <div className='options'>
    <Link to='/shop' className='option'>SHOP</Link>
    <Link to='/contact' className='option'>CONTACT</Link>
    {currentUser?<Link to='/signin' className='option' onClick={()=>auth.signOut()}>SIGNOUT</Link>:<Link className='option' to='/signin' >SIGNIN</Link>}
    <CartIcon ToggleDropdown={ToggleDropdown}/>
    </div>
    {toggle?<CartDropdown/>:null}
    {console.log('component rerendered')}
        
    </div>)
}

const mapStatetoProps=(state)=>({
    currentUser:state.user.currentUser,
    toggle:state.toggle.toggledropdown})
export default connect(mapStatetoProps)(Header);