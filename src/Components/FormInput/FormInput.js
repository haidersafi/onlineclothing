import React from 'react';
import './forminput.scss';

const FormInput=({onHandleChange,label,...otherProps})=>{
    return(<div className='group'>
    <input className='form-input' {...otherProps} onChange={onHandleChange}/>
    {label?<label className={`${otherProps.value.length?'shrink':''} form-input-label`}>{label}</label>:null}</div>)
}
export default FormInput;