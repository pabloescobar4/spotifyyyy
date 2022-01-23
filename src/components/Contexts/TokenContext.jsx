import React from "react";

export const TokenContext = React.createContext();

export const TokenContextProvider = ({ children }) => {
    const [token, setToken] = React.useState("");
    const handleToken = (token) => {
        console.log(token,"token");
        document.cookie = `access_token=[${token}]`;
        localStorage.setItem("token",token);
        setToken("BQDUbPQVuNDBXNCoCDCZ4iZUXVPl2Eopi-f4WvMI5O7oNER627bp0QGg2HdfEUkbLpi14ceW8-cjR1V-Or_FU2dO70e4KpZK2eC6E_nPoI7Owi7C-mawKxI3Sda0Avf_n2Rj05QdZXOSIKaxTDazzYW6g6HFxVp-UTtOlLEliE6MrTZL3kPMr5qR3L7vZe61iCVtjaDPiy4NcQxpYeR2zQ");
    }
    return(
    <TokenContext.Provider value={{token,handleToken}}>{children}</TokenContext.Provider>)
}
