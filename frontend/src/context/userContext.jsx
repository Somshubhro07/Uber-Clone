/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import React from "react";

export const UserDataContext = createContext()

const UserContext = ({children}) =>{

    const [user, setUser] = useState({
        email:'',
        fullname:{
            firtname:'',
            lastname:'',
        }
    })

    return(
        <div>
            <UserDataContext.Provider value={[user, setUser]}>
                {children}
            </UserDataContext.Provider>
        </div>
    )
}

export default UserContext;