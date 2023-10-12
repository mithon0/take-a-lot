import React, { createContext, useState } from 'react';
export const UserAuth = createContext(null);
const Auth = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);





    const userInfo = {
        user,
        loading,
        // signUp,
        // signIn,
        // passReset,
        // googleIn,
        // updateUser,
        // userVerify,
        // logOut
    }
    return (
       <UserAuth.Provider value={userInfo}>
          {children}
       </UserAuth.Provider>
    );
};

export default Auth;