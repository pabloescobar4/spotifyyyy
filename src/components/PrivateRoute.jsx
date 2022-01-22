import React from "react";
import { Navigate } from "react-router-dom";
import {useSelector} from"react-redux";
// import {TokenContext} from "./Contexts/TokenContext";

export const PrivateRoute = ({children}) => {
    //  const { token } = useSelector((state) => ({ token: state.token }));
    // const { token } = React.useContext(TokenContext);
    localStorage.setItem("token","abcd")
    const token = localStorage.getItem("token");
    //  console.log("cookie", window.cookies.access_token);
    if (token.length === 0) {
        // console.log(token);
        return <Navigate to={"/welcome"}/>
    }
    return children;
}
