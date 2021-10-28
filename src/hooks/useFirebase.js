import firebaseInitialization from "../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword , signOut , onAuthStateChanged , createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

firebaseInitialization()
const useFirebase = () => {
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () =>{
        setIsLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>{
        setIsLoading(true)
        onAuthStateChanged(auth, user=>{
            if (user) {
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false)
        })
    },[auth])
    
    const newRegistration = (auth,email,password) =>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInExistUser = (auth,email,password) =>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUserInfo = (auth,info) =>{
        setIsLoading(true)
        updateProfile(auth,info)
        .then(()=>{
            // alert("ok updated")
            setIsLoading(false)
            })
    }
    const logOut = () =>{
        setIsLoading(true)
        signOut(auth)
            .then(result=>{
                setUser({})
                setIsLoading(false)
            })
    } 
    return {
        user,
        isLoading,
        auth,
        setIsLoading,
        logOut,
        signInWithGoogle,
        newRegistration,
        updateUserInfo,
        signInExistUser
    }
};

export default useFirebase;