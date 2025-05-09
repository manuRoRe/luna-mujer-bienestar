
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-luna-light-purple/30 pt-12 pb-8">
      <div className="luna-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-luna-purple">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-luna-purple to-luna-pink flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-white"></div>
              </div>
              <span className="font-bold text-xl">Luna</span>
            </div>
            <p className="text-sm text-foreground/70">
              Plataforma dedicada al bienestar integral femenino y seguimiento personalizado del ciclo menstrual.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-luna-purple">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-foreground/70 hover:text-luna-purple transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/calendar" className="text-foreground/70 hover:text-luna-purple transition-colors">
                  Calendario
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-foreground/70 hover:text-luna-purple transition-colors">
                  Perfil
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-luna-purple">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="#" className="text-foreground/70 hover:text-luna-purple transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="text-foreground/70 hover:text-luna-purple transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link to="#" className="text-foreground/70 hover:text-luna-purple transition-colors">
                  Soporte
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-luna-purple">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="#" className="text-foreground/70 hover:text-luna-purple transition-colors">
                  Términos de Uso
                </Link>
              </li>
              <li>
                <Link to="#" className="text-foreground/70 hover:text-luna-purple transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="#" className="text-foreground/70 hover:text-luna-purple transition-colors">
                  Aviso Legal
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-luna-light-purple/30 pt-6 text-center text-sm text-foreground/60">
          <p>© {new Date().getFullYear()} Luna - Mujer Bienestar. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
