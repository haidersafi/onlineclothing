import React from 'react';
import './custombutton.scss';

const CustomButton=({children,...otherProps})=>{
    return(<button className='custombutton' {...otherProps}>{children}</button>)
}
export default CustomButton;