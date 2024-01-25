import React,{useState} from 'react';
import {AuthContext} from './AuthContext.js';
export const Provider = ({children})=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const [books,setBooks]=useState([]);
    return(
        <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn,books,setBooks}}>
            {children}
        </AuthContext.Provider>
    )
}