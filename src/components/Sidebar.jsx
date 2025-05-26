import {
  FaThLarge,
  FaCalendarAlt,
  FaClipboardList,
  FaFileInvoice,
  FaFolder,
  FaUserFriends,
  FaInbox,
  FaQuestionCircle,
  FaHistory,
  FaChartBar,
  FaComments,
  FaCog,
} from "react-icons/fa";

const menuItems = [
  { name: "Dashboard", icon: <FaThLarge /> },
  { name: "History", icon: <FaHistory /> },
  { name: "Calendar", icon: <FaCalendarAlt /> },
  { name: "Appointments", icon: <FaClipboardList /> },
  { name: "Statistics", icon: <FaChartBar /> },
  { name: "Chat", icon: <FaComments /> },
  { name: "Support", icon: <FaInbox /> },
  { name: "Settings", icon: <FaCog /> },
];

const Sidebar = ({ activeMenu, setActiveMenu }) => (
  <div className="w-[250px] min-h-screen bg-[#f6faff] shadow-md rounded-2xl p-6 mt-4">
    <h2 className="text-xl font-bold text-[#4bbccc] mb-6 ">Health<span className="text-black">care.</span></h2>
    <div className="space-y-4">
      {menuItems.map((item) => (
        <div
          key={item.name}
          onClick={() => setActiveMenu(item.name)}
          className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer transition ${
            activeMenu === item.name ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <span className="text-lg">{item.icon}</span>
          <span className="text-sm">{item.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Sidebar;
