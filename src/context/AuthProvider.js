import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContxt = createContext(null)

const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    return (
        <AuthContxt.Provider value={allContext}>
            {children}
        </AuthContxt.Provider>
    );
};

export default AuthProvider;