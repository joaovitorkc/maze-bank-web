// React
import { useState, useEffect, useCallback, useContext } from "react";

// React router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Payments from "./pages/payments/payments";
import DashBoard from "./components/DashBoard";
import Users from "./pages/users/users";

const AppRoutes = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />}>
            <Route path="/gerenciar-pagamentos" element={<Payments  />} />
            <Route path="/gerenciar-usuarios" element={<Users  />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;

// React
