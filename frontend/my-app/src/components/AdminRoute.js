import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {

    const { userInfo } = useSelector((state) => state.signIn);
    console.log("UserInfo", userInfo)
    return userInfo && userInfo.role === 1 ? children : <Navigate to="/" />;
}

export default AdminRoute
