import React from "react";

export const TokenContext = React.createContext();

export const TokenContextProvider = ({ children }) => {
    const [token, setToken] = React.useState("");
    const handleToken = (token) => {
        console.log(token,"token");
        document.cookie = `access_token=[${token}]`;
        localStorage.setItem("token",token);
        setToken(token);
    }
    return(
    <TokenContext.Provider value={{token,handleToken}}>{children}</TokenContext.Provider>)
}
