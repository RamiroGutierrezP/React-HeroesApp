import { useContext } from "react";
import Proptypes from 'prop-types';
import { AuthContext } from "../auth";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );

    return (logged)
            ? <Navigate to='/marvel'/>
            : children;
}

PublicRoute.propTypes = {
    children: Proptypes.node.isRequired
}