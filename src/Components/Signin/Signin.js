import React,{Component} from 'react';
import './signin.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import {signInWithGoogle, auth} from '../../Firebase/Firebase';
class Signin extends Component{
    constructor(){
        super();
        this.state={email:'',password:''}
    }
    onHandleChange=(event)=>{
        const {name,value}=event.target;
        this.setState({[name]:value})
        
    }
    onHandleSubmit=async (e)=>{
        e.preventDefault();
        const {email,password}=this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''})
        }
        catch(err){console.log('couldnot login',err.message)}

    }
    render(){
        return(
        <div className='signin'><h2 className='title'>I already have an account</h2>
        <span> Sign in with your email and password</span>
        <form onSubmit={this.onHandleSubmit}> 
        <FormInput type='email' value={this.state.email} name='email' label='Email' onHandleChange={this.onHandleChange}/>
        <FormInput type='password' value={this.state.password} name='password' label='Password' onHandleChange={this.onHandleChange}/>
        <div className='buttongrp'> 
        <CustomButton type='submit' value='submit'>Sign In</CustomButton>
        <CustomButton  onClick={signInWithGoogle}>Sign with google</CustomButton></div></form></div>)
    }
}
export default Signin;