import React, {createContext, useContext, useReducer} from "react";


const UserContext = createContext(undefined);

const UserDataProvider = ({ setUser, initialState, children }) => (
    <UserContext.Provider value={useReducer(setUser, initialState)}>
        {children}
    </UserContext.Provider>
);

const useUser = () => useContext(UserContext);

export { UserDataProvider, UserContext, useUser};

// How to use :
// const [basket, dispatch] = useBasket();