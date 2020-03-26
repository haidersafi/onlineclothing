import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const Config = {
  apiKey: "AIzaSyDiYnrZwnT3TEtSe90rVGOY7lwARb4b1GA",
  authDomain: "onlineclothingdb.firebaseapp.com",
  databaseURL: "https://onlineclothingdb.firebaseio.com",
  projectId: "onlineclothingdb",
  storageBucket: "onlineclothingdb.appspot.com",
  messagingSenderId: "891494504951",
  appId: "1:891494504951:web:6ef05ff26ac59e4299b6f2",
  measurementId: "G-NLY7T6LLML"
};
  firebase.initializeApp(Config);
  export const createUserProfileDocument= async (userAuth,additionalData)=>{
    if(!userAuth)return;
      const userRef=firestore.doc(`users/${userAuth.uid}`);
      const snapShot=await userRef.get();
      if(!snapShot.exists){
        const {displayName,email}=userAuth;
        const createdAt=new Date();
        try{
          await userRef.set({displayName,email,createdAt,...additionalData})
        }
        catch(err){console.log('error creating user',err.message)}
      }
      else{console.log('snapshot already exists')}
    return userRef;
    }
  export const auth=firebase.auth();
  export const firestore=firebase.firestore();
 

const provider= new  firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;