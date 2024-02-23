// React
import { useState, useEffect, useCallback, useContext } from "react";

// React router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Payments from "./pages/payments/payments";
import DashBoard from "./components/DashBoard";
import Users from "./pages/users/users";
import UpdateUser from "./pages/users/update-user";

const AppRoutes = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />}>
            <Route path="/gerenciar-pagamentos" element={<Payments  />} />
            <Route path="/gerenciar-usuarios" element={<Users  />} />
            <Route path="/gerenciar-usuarios/editar/:userId" element={<UpdateUser  />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;

// React
