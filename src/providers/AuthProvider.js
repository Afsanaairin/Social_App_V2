// import React, {  createContext, useState} from "react";
// import {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from '../../firebase';

// export const AuthContext = React.createContext();

// export const AuthProvider = ({Children}) => {
//     const [user, setUser] = useState(null);
//     return (
//         <AuthContext.Provider
//             value={{
//                 user,
//                 setUser,
//                 login: async (email, password) => {
//                     signInWithEmailAndPassword(auth,email,password)
//                     .then(userCredentials => 
//                         {const user = userCredentials.user;
//                          console.log(user.email);
//                         })
//                         .catch(error => alert(error.message));
//                 },
//                 register: async() => {
    
//                     createUserWithEmailAndPassword(auth,email,password)
//                     .then(userCredentials =>{
//                       const user = userCredentials.user;
//                       console.log(user.email);
//                     })
//                     .catch(error => alert(error.message))
//               },
//                 logout: async () => {
//                     try {
//                         await auth().signOut();
//                     } catch (e) {
//                         console.log(e);
//                     }
//                 },
//             }}
//         >
//             {Children}
//         </AuthContext.Provider>
//     );
// }

import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);

  return (
    <AuthContext.Provider
      value={{
        currentUser: currentUser,
        setCurrentUser: setCurrentUser,
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };