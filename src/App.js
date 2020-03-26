import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import { Route } from 'react-router-dom';
import ShopPage from './Pages/Shop/ShopPage';
import Header from './Components/Header/Header';
import SigninSignup from './Pages/SigninSignupPage/SigninSignin';
import {auth,createUserProfileDocument} from './Firebase/Firebase';

class App extends React.Component {
  constructor(){
    super();
    this.state={currentUser:null}
  }
  unSubscribeAuth=null;
  
  componentDidMount(){
    this.unSubscribeAuth=auth.onAuthStateChanged(async user=>{
      if(user){
      const userRef= await createUserProfileDocument(user);
      userRef.onSnapshot(snapShot=>{
        this.setState({currentUser:{id:snapShot.id,...snapShot.data()}},()=>console.log(this.state))
      })
    }
    this.setState({currentUser:user})
  }
 
    )
  }
  componentWillUnmount(){
    this.unSubscribeAuth();
  }
  render(){
  return (
    <div >
    <Header {...this.state}/>
    <Route exact path='/' component={HomePage}/>
    <Route exact path='/shop' component={ShopPage}/>
    <Route exact path='/signin' component={SigninSignup}/>
    </div>
  );}
}

export default App;
