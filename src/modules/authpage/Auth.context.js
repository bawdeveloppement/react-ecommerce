import React from 'react';


const AuthContext = React.createContext({
    user: null
});

const AuthContextProvider = ({ children }) => {
    return <AuthContext.Provider>

    </AuthContext.Provider>
}

export default { AuthContextProvider,  AuthContext }

