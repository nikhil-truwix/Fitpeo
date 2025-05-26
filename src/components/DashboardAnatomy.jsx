import React from "react";
import { FaHeart, FaLungs, FaTooth, FaBone } from "react-icons/fa";
import anatomy from "../assets/anatomy.webp";
const organData = [
  {
    icon: <FaLungs className="text-red-400 text-xl" />,
    title: "Lungs",
    date: "26 Okt 2021",
    progressColor: "bg-red-400",
    progressValue: "60%",
  },
  {
    icon: <FaTooth className="text-gray-400 text-xl" />,
    title: "Teeth",
    date: "26 Okt 2021",
    progressColor: "bg-green-300",
    progressValue: "90%",
  },
  {
    icon: <FaBone className="text-gray-500 text-xl" />,
    title: "Bone",
    date: "26 Okt 2021",
    progressColor: "bg-red-400",
    progressValue: "40%",
  },
];

export default function DashboardAnatomyPanel() {
  return (
    <div className="w-full flex flex-col xl:flex-row gap-6">
      {/* Anatomy Image Section */}
      <div className=" w-[60%] flex-1 bg-[#f6faff] rounded-3xl p-6 shadow-md relative flex justify-center items-center">
        <img
          src={anatomy}
          alt="Human Anatomy"
          className="w-[260px] h-[350px] object-contain"
        />

        {/* Healthy Heart Tag */}
        <div className="absolute top-[24%] right-[6%] bg-[#5528d1] text-white px-3 py-1 text-xs rounded-full flex items-center gap-1 shadow">
          <FaHeart className="text-red-300" />
          Healthy Heart
        </div>

        {/* Healthy Leg Tag */}
        <div className="absolute bottom-[29%] left-[16%] bg-[#22d3ee] text-white px-3 py-1 text-xs rounded-full shadow">
          Healthy Leg
        </div>
      </div>


      <div className="flex flex-col gap-4 w-[40%]">
        {organData.map((organ, index) => (
          <div
            key={index}
            className="bg-[#f6faff] shadow-sm rounded-2xl px-4 py-4  h-[140px] flex flex-col justify-between items-start"
          >
            <div className="flex flex-col items-center gap-1">
              <div>{organ.icon}</div>
              <h3 className="font-semibold text-gray-800">{organ.title}</h3>
              <p className="text-xs text-gray-400">Date: {organ.date}</p>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`${organ.progressColor} h-full rounded-full`}
                style={{ width: organ.progressValue }}
              ></div>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
}


