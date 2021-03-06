/* eslint-disable react/jsx-no-undef */
import React from "react";
import MainLayout from "layouts/Main/index";
import AuthLayout from "layouts/Auth/index";
import HomePage from "pages/HomePage";
import SignInPage from "pages/SignInPage";
import { Navigate } from "react-router-dom";
import SignUpPage from "pages/SignUpPage";
import ResetPassPage from "pages/ResetPassPage";
import ProductPage from "pages/ProductPage";
import ProductDetails from "pages/ProductDetailPage";
import OrderPage from "pages/OrderPage";
import CartPage from "pages/CartPage";
import NotFoundView from "pages/errors/NotFoundView";
const routes = [
	{
		path: "/*",
		element: <MainLayout />,
		children: [
			{ path: "/", element: <HomePage /> },
			{ path: "/products/category/*", element: <ProductPage /> },
			{ path: "/product/details/*", element: <ProductDetails /> },
			{ path: "/cart", element: <CartPage /> },
			{ path: "/checkout", element: <OrderPage /> },
			{ path: "404", element: <NotFoundView /> },
			{ path: "*", element: <Navigate to="/404" /> },
		],
	},
	{
		path: "/auth/*",
		element: <AuthLayout />,
		children: [
			{ path: "/signin", element: <SignInPage /> },
			{ path: "/signup", element: <SignUpPage /> },
			{ path: "/reset-password", element: <ResetPassPage /> },
			{ path: "404", element: <NotFoundView /> },
			{ path: "*", element: <Navigate to="/404" /> },
		],
	},
];

export default routes;
