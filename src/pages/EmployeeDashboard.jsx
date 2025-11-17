import React from "react";
import { useAuth } from "../context/authContext.jsx";

function EmployeeDashboard() {
  const { user } = useAuth();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 text-2xl font-semibold">
      {user ? `${user.name}'s Employee Dashboard` : "Loading..."}
    </div>
  );
}

export default EmployeeDashboard;
