import React from "react";


const Register = React.lazy(() => import("../apps/auth/register/Register"));
const Login = React.lazy(() => import("../apps/auth/login/Login"));

export const AuthPages = {
    Register,
    Login
};