/* eslint-disable react/display-name */
import React from "react";

import HomePage from "../pages/HomePage";
import ResetPassPage from "../pages/ResetPassPage";
import SignIn from "../pages/SignInPage";
import SignUp from "../pages/SignUpPage";

export const MainRoute = [
	{
		name: "homePage",
		path: "/",
		exact: true,
		component: () => <HomePage />,
	},
	{
		name: "resetPassword",
		path: "/resetpassword",
		exact: true,
		component: () => <ResetPassPage />,
	},
	{
		name: "signInPage",
		path: "/signin",
		exact: true,
		component: () => <SignIn />,
	},
	{
		name: "signUpPage",
		path: "/signup",
		exact: true,
		component: () => <SignUp />,
	},
];
