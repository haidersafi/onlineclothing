import React from 'react';
import './custombutton.scss';

const CustomButton=({children,inverted,...otherProps})=>{
    return(<button className={`${inverted?'inverted':''} custombutton`} {...otherProps}>{children}</button>)
}
export default CustomButton;