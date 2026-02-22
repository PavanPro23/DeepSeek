<<<<<<< HEAD
'use client';

import { useUser } from "@clerk/nextjs";
import { createContext, useContext } from "react";

export const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext)
}

export const AppContextProvider = ({children}) => {
    const {user} = useUser();

    const value = {user};

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
=======
'use client';

import { useUser } from "@clerk/nextjs";
import { createContext, useContext } from "react";

export const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext)
}

export const AppContextProvider = ({children}) => {
    const {user} = useUser();

    const value = {user};

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
>>>>>>> 51cb7ee5885c7274b002008fe5438767c3e0650e
}