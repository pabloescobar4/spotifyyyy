import React from "react";
import { Navigate } from "react-router-dom";
import {useSelector} from"react-redux";

export const PrivateRoute = ({children}) => {
    const { token } = useSelector((state) => ({ token: state.token }));
    if (token.length===0) {
        return <Navigate to={"/welcome"}/>
    }
    return children;
}
