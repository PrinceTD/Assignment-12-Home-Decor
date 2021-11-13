import { useEffect, useState } from "react";
import initilizeFirebase from "../componets/Page/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";


initilizeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    const registerUser = (name, email, password, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                setAuthError("");
                const newUse = {password, email, displayName: name };
                setUser(newUse);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                })
                history.replace('/')
            })
            .catch((error) => {
                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        console.log(email, password);
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
       
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history?.replace(destination);
                setAuthError("");
                setUser(userCredential.user);

            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));

    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, GoogleProvider)
            .then((result) => {
                const destination = location?.state?.from || '/';
                history?.replace(destination);
                const user = result.user;
                setAuthError("");

            }).catch((error) => {
                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));

    }

    // observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(user)

            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unSubscribe;
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {

        }).catch((error) => {
            // An error happened.
        })
            .finally(setIsLoading(false));
    }
    return {
        user,
        isLoading,
        registerUser,
        logOut,
        loginUser,
        authError,
        signInWithGoogle

    }
}
export default useFirebase