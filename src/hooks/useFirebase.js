import firebaseInitialization from "../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword , signOut , onAuthStateChanged , createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

firebaseInitialization()
const useFirebase = () => {
    const [user,setUser] = useState({});
    const [isLoading,setIsLoaging] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () =>{
        setIsLoaging(true);
        return signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>{
        setIsLoaging(true)
        onAuthStateChanged(auth, user=>{
            if (user) {
                setUser(user)
                setIsLoaging(false)
            }
        })
    },[auth])

    const newRegistration = (auth,email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInExistUser = (auth,email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUserInfo = (auth,info) =>{
        updateProfile(auth,info)
            .then(()=>{
                // alert("ok updated")
            })
    }
    const logOut = () =>{
        setIsLoaging(true)
        signOut(auth)
            .then(result=>{
                setUser({})
                setIsLoaging(false)
            })
    } 
    return {
        user,
        isLoading,
        auth,
        setIsLoaging,
        logOut,
        signInWithGoogle,
        newRegistration,
        updateUserInfo,
        signInExistUser
    }
};

export default useFirebase;