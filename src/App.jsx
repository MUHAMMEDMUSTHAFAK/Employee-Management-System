import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import EmployeeDashboard from "./pages/EmployeeDashboard.jsx";
import PrivetRoutes from "./utils/privetRoutes.jsx";
import { ProtectedRoutes } from "./utils/ProtectedRoutes.jsx";
import AdminSummury from "./components/Dashboard/AdminSummury.jsx";
import DepartmentList from "./components/Departments/DepartmentList.jsx";
import { AddDepartment } from "./components/Departments/AddDepartment.jsx";
import { EditDepartment } from "./components/Departments/EditDepartment.jsx";
import List from "./components/Employee/list.jsx";
import Add from "./components/Employee/Add.jsx"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={
          <PrivetRoutes>
            <ProtectedRoutes requiredRole={"admin"}>
              <AdminDashboard />
            </ProtectedRoutes>
          </PrivetRoutes>
        } >
          <Route index element={<AdminSummury />} />
          <Route path="departments" element={<DepartmentList />}></Route>
          <Route path="add-department" element={<AddDepartment />}></Route>
          <Route path="department/:id" element={<EditDepartment />}></Route>
          <Route path="/admin-dashboard/employees" element={<List />}></Route>
          <Route path="add-employee" element={<Add />}></Route>




        </Route>
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
