import React from 'react'
import { Link } from 'react-router-dom'

 const List = () => {
  return (
    <div className="w-full flex flex-col items-center bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 py-8 min-h-screen">
         <div className="bg-white rounded-xl shadow-lg px-6 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between w-11/12 max-w-5xl mb-6 space-y-4 md:space-y-0">
            <h3 className="text-xl font-semibold text-blue-700">Manage Employees</h3>

            <input
              type="text"
              placeholder="Search By Employee Name"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <Link
              to="/admin-dashboard/add-employee"
              className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Add New Employee
            </Link>
          </div>
    </div>
  )
}
export default List