import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ForgotPassword from "./components/fragments/ForgotPassword";
import ErrorRoute from './pages/errorRoute';
import { useState, useEffect } from 'react';
import Dashboard from "./pages/dashboard";
import Balance from './pages/balance';
import ExpensePage from './pages/expense';
import Goals from './pages/Goals';
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import { ThemeContextProvider } from './context/ThemeContext';

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  const myRouter = createBrowserRouter([
    {
      path: "/",
      // element: <ProtectedRoute element={<Dashboard />} />,
      element: <RequireAuth><Dashboard /></RequireAuth>,
      errorElement: < ErrorRoute />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/balance",
      element: <RequireAuth><Balance /></RequireAuth>,
    },
    {
      path: "/expense",
      element: <RequireAuth><ExpensePage /></RequireAuth>,
    },
    {
      path: "/goals",
      element: <RequireAuth><Goals /></RequireAuth>,
    },
  ]);

  return <RouterProvider router={myRouter} />;
};

export default App;