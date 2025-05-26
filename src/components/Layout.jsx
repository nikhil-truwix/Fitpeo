import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import { useState } from "react";

const Layout = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const renderContent = () => {
    switch (activeMenu) {
      case "Dashboard":
        return <Dashboard />;
      default:
        return (
          <div className="p-6 ">
            <h1 className="text-2xl font-bold">{activeMenu}</h1>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-[#f6f9fc] m-2 shadow-3xl rounded-[40px]">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="flex-1 flex flex-col">
        
        {renderContent()}
      </div>
    </div>
  );
};

export default Layout;
