import React from "react";

// AuthPages

const Register = React.lazy(() => import("../apps/auth/register/Register"));
const Login = React.lazy(() => import("../apps/auth/login/Login"));


export const AuthPages = {
    Register,
    Login
};

//LayoutPages


const Home = React.lazy(() => import("../apps/layout/home/Home"));

export const LayoutPages = {
    Home
};