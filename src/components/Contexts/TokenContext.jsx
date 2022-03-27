import React from "react";

export const TokenContext = React.createContext();

export const TokenContextProvider = ({ children }) => {
    const [token, setToken] = React.useState("");
    const handleToken = (token) => {
        console.log(token,"token");
        document.cookie = `access_token=[${token}]`;
        localStorage.setItem("token",token);
        setToken("BQBUoRUFI_DGH4w0NBDDPoLaZ8TA5DPnQl09Q-SX_l_oX8jAgNZJNOum5G7lPnwN2YUTyzfmzAeq2byO4_5qswZ2SRTf2uIXUH1dBooyjaaT-tUWA0kah6PEnGV8sKRGFF1Ivk-PBMuzom2lQMrXjJuR95tyzHZKosAs-BfRToDKpZhLBkSM45ZK0lZ9SCc43hgWQ92DX39CNRGA8DiJoQ");
    }
    return(
    <TokenContext.Provider value={{token,handleToken}}>{children}</TokenContext.Provider>)
}
