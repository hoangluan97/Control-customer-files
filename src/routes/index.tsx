import HomePage from "pages/home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// no lazy loading for auth pages to avoid flickering

import LoginPage from "../pages/login";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Control-customer-files" index element={<HomePage />} />
        <Route path="/Control-customer-files/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
