import React from "react";
import Footer from "../components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Detail from "../pages/detail/Detail";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* <Route path="/about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>
        <Route path="/detail/:id" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />
        </Route> */}

        <Route element={<PrivateRouter />}>
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
