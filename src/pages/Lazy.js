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
const Profile = React.lazy(() => import("../apps/layout/profile/Profile"));
const Users = React.lazy(() => import("../apps/layout/users/Users"));
const Subscribers = React.lazy(() => import("../apps/layout/subscribers/Subscribers"))

export const LayoutPages = {
    Home,
    Profile,
    Users,
    Subscribers
};