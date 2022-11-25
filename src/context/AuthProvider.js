import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext()
const auth = getAuth(app)

const provider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    // sign up or create user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // user login
    const login = (email, password) =>{
       return signInWithEmailAndPassword(auth, email, password)
    }


    // google login
    const googleLogIn = () =>{
        return signInWithPopup (auth, provider)
    }


    // Logout
    const logOut = () =>{
        return signOut(auth)
    }



    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user observing');
            setUser(currentUser)
        })

        return () => unsubscribe()
    },[])


    const authInfo = {createUser, login, googleLogIn, user, logOut}
    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;

