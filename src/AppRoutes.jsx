// React
import { useState, useEffect, useCallback, useContext } from "react";

// React router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Payments from "./pages/payments/payments";
import DashBoard from "./components/DashBoard";

const AppRoutes = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />}>
            <Route path="/gerenciar-pagamentos" element={<Payments  />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;

// React
