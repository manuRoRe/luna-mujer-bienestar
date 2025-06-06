
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Calendar,
  ListCheck,
  Bell,
  MessageSquare
} from "lucide-react";

const AdminSidebar = () => {
  const location = useLocation();
  const path = location.pathname;

  const navigationItems = [
    { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
    { name: "Usuarios", path: "/admin/users", icon: Users },
    { name: "Periodos", path: "/admin/periods", icon: Calendar },
    { name: "Síntomas", path: "/admin/symptoms", icon: ListCheck },
    { name: "Recordatorios", path: "/admin/reminders", icon: Bell },
    { name: "Consejos", path: "/admin/tips", icon: MessageSquare },
  ];

  return (
    <aside className="w-64 bg-black shadow-md flex-shrink-0 h-full border-r border-white/10">
      <div className="flex items-center justify-center h-16 border-b border-white/10">
        <Link to="/admin" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-luna-purple to-luna-pink flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-white"></div>
          </div>
          <span className="font-bold text-xl text-white">Luna Admin</span>
        </Link>
      </div>
      <nav className="mt-6 px-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const isActive = path === item.path || 
              (item.path !== "/admin" && path.startsWith(item.path));
            
            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center p-3 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
