import React from 'react';
import './header.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../Asset/crwn.svg';
import {auth} from '../../Firebase/Firebase';
const Header=({currentUser})=>{
    return(<div className='header'>
    <Link to='/' className='logo-container'><Logo/></Link>
    <div className='options'>
    <Link to='/shop' className='option'>SHOP</Link>
    <Link to='/contact' className='option'>CONTACT</Link>
    {currentUser?<Link to='/signin' className='option' onClick={()=>auth.signOut()}>SIGNOUT</Link>:<Link className='option' to='/signin' >SIGNIN</Link>}</div>
        
    </div>)
}
export default Header;