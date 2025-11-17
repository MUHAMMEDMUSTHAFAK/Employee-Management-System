import React from 'react'
import SummaryCard from './SummaryCard';
import { FaBuilding, FaCheckCircle, FaFileAlt, FaHourglassHalf, FaMoneyBillWave, FaTimesCircle, FaUsers } from 'react-icons/fa';

const AdminSummury = () => {
    return (
       <div className="p-6">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">
        Dashboard Overview
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <SummaryCard icon={<FaUsers />} text="Total Employees" number={13} />
        <SummaryCard icon={<FaBuilding />} text="Total Departments" number={5} />
        <SummaryCard icon={<FaMoneyBillWave />} text="Monthly Salary" number="₹654" />
      </div>

      <h4 className="text-xl font-semibold text-gray-800 mb-4">Leave Details</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard icon={<FaFileAlt />} text="Leave Applied" number={5} />
        <SummaryCard icon={<FaCheckCircle />} text="Leave Approved" number={2} />
        <SummaryCard icon={<FaHourglassHalf />} text="Leave Pending" number={4} />
        <SummaryCard icon={<FaTimesCircle />} text="Leave Rejected" number={1} />
      </div>
    </div>
    )
}
export default AdminSummury;
