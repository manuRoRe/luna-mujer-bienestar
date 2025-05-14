
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  User,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50 py-3">
      <div className="luna-container flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-luna-purple">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-luna-purple to-luna-pink flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-white"></div>
          </div>
          <span className="font-bold text-xl hidden sm:block">Luna</span>
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-luna-purple" />
            ) : (
              <Menu className="h-5 w-5 text-luna-purple" />
            )}
          </Button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-luna-purple transition-colors">
            Inicio
          </Link>
          <Link to="/calendar" className="text-foreground hover:text-luna-purple transition-colors flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            <span>Calendario</span>
          </Link>
          <Link to="/profile" className="text-foreground hover:text-luna-purple transition-colors flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>Perfil</span>
          </Link>
          <Link to="/login">
            <Button className="luna-button-primary">
              Iniciar Sesión
            </Button>
          </Link>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg rounded-b-lg p-4 z-50 border-t border-luna-light-purple/30 flex flex-col space-y-3">
            <Link 
              to="/" 
              className="block py-2 px-4 text-foreground hover:text-luna-purple hover:bg-luna-light-purple/20 rounded-md transition-colors"
              onClick={toggleMenu}
            >
              Inicio
            </Link>
            <Link 
              to="/calendar" 
              className="flex items-center gap-2 py-2 px-4 text-foreground hover:text-luna-purple hover:bg-luna-light-purple/20 rounded-md transition-colors"
              onClick={toggleMenu}
            >
              <CalendarDays className="h-4 w-4" />
              <span>Calendario</span>
            </Link>
            <Link 
              to="/profile" 
              className="flex items-center gap-2 py-2 px-4 text-foreground hover:text-luna-purple hover:bg-luna-light-purple/20 rounded-md transition-colors"
              onClick={toggleMenu}
            >
              <User className="h-4 w-4" />
              <span>Perfil</span>
            </Link>
            <Link 
              to="/login"
              onClick={toggleMenu}
              className="w-full"
            >
              <Button className="luna-button-primary w-full justify-center">
                Iniciar Sesión
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
