import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import { Route,Redirect } from 'react-router-dom';
import ShopPage from './Pages/Shop/ShopPage';
import Header from './Components/Header/Header';
import SigninSignup from './Pages/SigninSignupPage/SigninSignin';
import {auth,createUserProfileDocument} from './Firebase/Firebase';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/User/UserAction'
import {selectCurrentUser} from './redux/User/UserSelectors';
import {createStructuredSelector} from 'reselect'

class App extends React.Component {

  unSubscribeAuth=null;
  
  componentDidMount(){
    this.unSubscribeAuth=auth.onAuthStateChanged(async user=>{
      if(user){
      const userRef= await createUserProfileDocument(user);
      userRef.onSnapshot(snapShot=>{
       this.props.setCurrentUser({id:snapShot.id,...snapShot.data()})}
      )
    }
   this.props.setCurrentUser(user)

  }
    )
}

  componentWillUnmount(){
    this.unSubscribeAuth();
  }
  render(){
  return (
    <div >
    <Header/>
    <Route exact path='/' component={HomePage}/>
    <Route exact path='/shop' component={ShopPage}/>
    <Route exact path='/signin' render={()=>this.props.currentUser?(<Redirect to='/'/>):(<SigninSignup/>)}/>
    </div>
  );}
}

const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser})
const mapDispatchtoProps=(dispatch)=>({
  
setCurrentUser:(user)=>dispatch(setCurrentUser(user))
}
)
export default connect(mapStateToProps,mapDispatchtoProps)(App);
