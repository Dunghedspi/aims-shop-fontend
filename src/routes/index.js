/* eslint-disable react/display-name */
import HomeSection from "pages/HomePage/Sections/HomeSection";
import React from "react";

import HomePage from "../pages/HomePage";
import ResetPassPage from "../pages/ResetPassPage";
import SignIn from "../pages/SignInPage";
import SignUp from "../pages/SignUpPage";
import CartPage from "pages/CartPage";
import ProductPage from "pages/ProductPage";
import ProductDetailPage from "pages/ProductDetailPage";
import OrderPage from "pages/OrderPage";
import OrderListPage from "pages/OrderListPage";
import AccountPage from "pages/AccountPage";
export const MainRoute = [
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
	{
		name: "homePage",
		path: "/",
		exact: false,
		component: () => <HomePage />,
	},
];

export const HomeRouter = [
	{
		name: "CartPage",
		path: "/cart",
		exact: true,
		component: () => <CartPage />,
	},
	{
		name: "HomePage",
		path: "/",
		exact: true,
		component: () => <HomeSection />,
	},
	{
		name: "ProductPage",
		path: "/product",
		exact: true,
		component: () => <ProductPage />,
	},
	{
		name: "ProductsDetail",
		path: "/productDetail",
		exact: true,
		component: () => <ProductDetailPage />,
	},
	{
		name: "checkout",
		path: "/checkout",
		exact: true,
		component: () => <OrderPage />,
	},
	{
		name: "orders",
		path: "/orders",
		exact: false,
		component: () => <OrderListPage />,
	},
	{
		name: "account",
		path: "/user/setting",
		exact: false,
		component: () => <AccountPage />,
	},
];
