import React, { useEffect, useState } from 'react';
import Authcontex from './AuthContext';
import auth from '../FireBase/Firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const Authprovider = ({children}) => {
const [user, setUser] = useState(null)
const [loding, setLoding] = useState(true)
const provider = new GoogleAuthProvider () 

const createUser = (email, password ) =>{
    setLoding(true)
    return createUserWithEmailAndPassword(auth, email, password )
}

const signInUder = (email, password) =>{
return signInWithEmailAndPassword(auth, email, password)    
}

const signinWithGoogle = () =>{
return signInWithPopup(auth, provider)
}


const signout = () =>{
    setLoding(true)
    signOut(auth)
}
useEffect(()=>{
    const unsubcrib = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        setLoding(false)
    })
    return() =>{
        unsubcrib()
    }
},[])


const authInfo = {
    user,
    loding,
    createUser,
    signInUder,
    signout,
    signinWithGoogle,


}
    return (
        <Authcontex.Provider value={authInfo} >
            {children}
        </Authcontex.Provider>
    );
};

export default Authprovider;