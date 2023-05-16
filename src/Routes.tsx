import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHome from "./components/Pages/MainHome";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={MainHome} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;
