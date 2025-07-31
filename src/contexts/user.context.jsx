import { createContext, useEffect, useReducer } from 'react';


import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const USER_ACTION_TYPES ={
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}
const INTITAL_STATE = {
  currentUser:null
}
const userReducer = (state, action) => {
 const {type, payload} = action;
 
  switch(type){
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state, // give me the value of the pervious state object aswell for the updated ones 
        currentUser: payload
      }
    default:
      throw new Error(`Unhandled type ${type}  in userReducer`)
  }
};



export const UserProvider = ({ children }) => {
  const [{currrentUser}, dispatch] = useReducer(userReducer, INTITAL_STATE);

 const setCurrentUser = (user) =>
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, currentUser: user });


  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  console.log(currentUser);

  const value = {
    currentUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
