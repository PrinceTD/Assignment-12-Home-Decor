import { useEffect, useState } from "react";
import initilizeFirebase from "../componets/Page/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";


initilizeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false)

    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    const registerUser = (name, email, password, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                setAuthError("");
                const newUse = { password, email, displayName: name };
                setUser(newUse);
                saveuser(email, name, 'POST')
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
                saveuser(user.email, user.displayName, "PUT")
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


    useEffect(() => {
        fetch(`https://tranquil-ridge-16978.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {

        }).catch((error) => {
            // An error happened.
        })
            .finally(setIsLoading(false));
    }

    const saveuser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://tranquil-ridge-16978.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }


    return {
        user,
        isLoading,
        admin,
        registerUser,
        logOut,
        loginUser,
        authError,
        signInWithGoogle

    }
}
export default useFirebase