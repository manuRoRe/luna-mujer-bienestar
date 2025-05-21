
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";

const AdminLayout = () => {
  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <Navbar />
      <main className="flex-1 overflow-auto p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
