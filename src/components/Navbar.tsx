
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  User,
  Menu,
  X,
  MessageSquare,
  LayoutDashboard,
  Users,
  ListCheck,
  Bell,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Admin navigation links
  const adminNavigationItems = [
    { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
    { name: "Usuarios", path: "/admin/users", icon: Users },
    { name: "Periodos", path: "/admin/periods", icon: CalendarDays },
    { name: "Síntomas", path: "/admin/symptoms", icon: ListCheck },
    { name: "Recordatorios", path: "/admin/reminders", icon: Bell },
    { name: "Consejos", path: "/admin/tips", icon: MessageSquare },
  ];

  // Regular navigation items
  const regularNavigationItems = [
    { name: "Inicio", path: "/", icon: null },
    { name: "Calendario", path: "/calendar", icon: CalendarDays },
    { name: "Consejos", path: "/consejos", icon: MessageSquare },
    { name: "Perfil", path: "/profile", icon: User },
  ];

  // Choose the right navigation items based on the route
  const navigationItems = isAdminRoute ? adminNavigationItems : regularNavigationItems;

  return (
    <nav className={`w-full ${isAdminRoute ? 'bg-black/80 text-white' : 'bg-white/80 text-foreground'} backdrop-blur-sm shadow-sm sticky top-0 z-50 py-3`}>
      <div className="luna-container flex justify-between items-center">
        <Link to={isAdminRoute ? "/admin" : "/"} className={`flex items-center space-x-2 ${isAdminRoute ? 'text-white' : 'text-luna-purple'}`}>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-luna-purple to-luna-pink flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-white"></div>
          </div>
          <span className="font-bold text-xl hidden sm:block">{isAdminRoute ? "Luna Admin" : "Luna"}</span>
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className={isAdminRoute ? 'text-white' : ''}
          >
            {isMenuOpen ? (
              <X className={`h-5 w-5 ${isAdminRoute ? 'text-white' : 'text-luna-purple'}`} />
            ) : (
              <Menu className={`h-5 w-5 ${isAdminRoute ? 'text-white' : 'text-luna-purple'}`} />
            )}
          </Button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={`${isAdminRoute ? 'text-white hover:text-luna-purple' : 'text-foreground hover:text-luna-purple'} transition-colors flex items-center gap-1`}
            >
              {item.icon && <item.icon className="h-4 w-4" />}
              <span>{item.name}</span>
            </Link>
          ))}
          {!isAdminRoute && (
            <Link to="/login">
              <Button className="luna-button-primary">
                Iniciar Sesión
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className={`md:hidden absolute top-16 left-0 right-0 ${isAdminRoute ? 'bg-black text-white' : 'bg-white text-foreground'} shadow-lg rounded-b-lg p-4 z-50 border-t ${isAdminRoute ? 'border-white/10' : 'border-luna-light-purple/30'} flex flex-col space-y-3`}>
            {navigationItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 py-2 px-4 ${
                  isAdminRoute 
                    ? 'text-white hover:text-luna-purple hover:bg-white/10' 
                    : 'text-foreground hover:text-luna-purple hover:bg-luna-light-purple/20'
                } rounded-md transition-colors`}
                onClick={toggleMenu}
              >
                {item.icon && <item.icon className="h-4 w-4" />}
                <span>{item.name}</span>
              </Link>
            ))}
            {!isAdminRoute && (
              <Link 
                to="/login"
                onClick={toggleMenu}
                className="w-full"
              >
                <Button className="luna-button-primary w-full justify-center">
                  Iniciar Sesión
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
