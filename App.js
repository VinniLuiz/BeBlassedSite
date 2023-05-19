import 'react-native-gesture-handler';
import {useState } from 'react';
import UserNotVerified from "./src/screens/UserNotVerified"
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./src/firebase/config";
import AppNavigation from './src/navigation/AppNavigation';
import LoginNavigation from './src/navigation/LoginNavigation';



export default function App() {
 
  const [user, setUser] = useState(auth.currentUser);
 /*  console.log(auth) */

 
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } 
    else {
      setUser(null);
    }
  });

  const updateUser = async () =>{
     const userValidate = await auth.currentUser.reload();
    if (userValidate) {
      setUser(userValidate);
    } else {
      setUser(null);
    }
    };



  if(user){
    if(user.emailVerified){
      return(
      <AppNavigation reloadUser={updateUser}/>
      )
    }
    else if(! user.emailVerified){
      return(
        <UserNotVerified user={user} checkUser={()=>{updateUser()}}/>
      )
    }
  }

  return (
 <LoginNavigation/>
  );
}


