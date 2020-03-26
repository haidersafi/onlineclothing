import React from 'react';
import './signup.scss';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';
import {auth,createUserProfileDocument} from '../../Firebase/Firebase'

class Signup extends React.Component{
    constructor(){
        super();
        this.state={displayName:'',email:'',password:'',confirmPassword:''}
    }
    onHandleChange=(e)=>{
this.setState({[e.target.name]:e.target.value});
    }
    onHandleSubmit=async (e)=>{
        const {email,password,displayName}=this.state;
        e.preventDefault();
        try{
        const {user}= await auth.createUserWithEmailAndPassword(email,password);
        await createUserProfileDocument(user,{displayName});
        this.setState({displayName:'',email:'',password:'',confirmPassword:''})
        }
        catch(err){console.log('couldnotsignup',err.message)}
    }
    render(){
        return(
        <div className='signup'>
        <h2 className='title'>NewUser?</h2>
        <span>Register Below</span>
        <form onSubmit={this.onHandleSubmit}>
        <FormInput type='text' name='displayName' value={this.state.displayName} onHandleChange={this.onHandleChange} label='USERNAME'/>
        <FormInput type='email' name='email' value={this.state.email} onHandleChange={this.onHandleChange} label='EMAIL'/>
        <FormInput type='password' name='password' value={this.state.password} onHandleChange={this.onHandleChange} label='PASSWORD'/>
        <FormInput type='password' name='confirmPassword' value={this.state.confirmPassword} onHandleChange={this.onHandleChange}
        label='CONFIRM PASSWORD'/>
        <CustomButton>SIGNUP</CustomButton></form>
        </div>)
    }
}
export default Signup;