import React from "react";
import DashboardAnatomy from "./DashboardAnatomy";
import Activity from "./Activity";
import { FaSearch, FaPlus } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import Calendar from "./Calendar";
import Appointment from "./Appointment";
const Dashboard = () => (
    <div className="flex gap-6 p-6 w-full">

        {/* Left body anatomy */}
        <div className="w-[50%] h-auto bg-white p-4 rounded-3xl shadow-md">
            <div className="relative w-full border-outline-none mb-2">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full px-4 py-2  rounded-full focus:outline-none focus:ring-1 ml-2"
                />
                <FaSearch className="absolute top-3 left-2 text-gray-500" />
                <IoNotifications className="absolute top-3 right-3 text-blue-700" size={20} />
            </div>
            <DashboardAnatomy />
            <div className="mt-4">
                <Activity />
            </div>

            {/* Add Lungs/Teeth/Bone Cards */}
        </div>

        {/* Right Calendar and Schedule */}
        <div className="w-[50%] bg-[#f6faff] p-4 rounded-xl shadow-md">
            <div className=" flex justify-end gap-4">
                <button className="w-10 h-10 p-2 bg-purple-600 rounded-lg  text-white flex items-center justify-center">
                    <FaPlus />
                </button>
                <img
                    src="https://i.pravatar.cc/40"
                    alt="profile"
                    className="w-10 h-10 rounded-lg"
                />
            </div>
            <div className='mt-2'>
                <Calendar/>
            </div>
            <div className='mt-2'> 
               <Appointment/>
            </div>
            
        </div>
    </div>
);

export default Dashboard;
