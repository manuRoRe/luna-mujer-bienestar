
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-luna-light-pink/30 py-16 md:py-24">
      <div className="luna-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="luna-heading">
              <span className="text-luna-purple">Luna:</span> Tu Compañera de Bienestar Femenino
            </h1>
            <p className="text-lg text-foreground/80">
              Seguimiento personalizado de tu ciclo menstrual, información sobre tu salud y conexión con profesionales médicos en una sola plataforma.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link to="/calendar">
                <Button className="luna-button-primary">Comenzar Seguimiento</Button>
              </Link>
              <Button variant="outline" className="border-luna-purple text-luna-purple hover:bg-luna-light-purple/20">
                Saber Más
              </Button>
            </div>
          </div>

          <div className="relative h-[300px] md:h-[400px] flex items-center justify-center">
            <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-luna-purple/10 animate-pulse-gentle"></div>
            <div className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full bg-luna-pink/20 animate-pulse-gentle" style={{ animationDelay: "1s" }}></div>
            <div className="absolute w-36 h-36 md:w-48 md:h-48 rounded-full bg-luna-blue/30 animate-pulse-gentle" style={{ animationDelay: "2s" }}></div>
            <div className="z-10 p-6 luna-card bg-white/80 backdrop-blur-sm w-64 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-luna-purple to-luna-pink flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white"></div>
                </div>
              </div>
              <h3 className="font-bold text-luna-purple mb-2">Luna App</h3>
              <p className="text-sm">Tu ciclo menstrual, organizado y personalizado</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-luna-light-blue opacity-40 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-luna-light-pink opacity-40 blur-3xl"></div>
    </div>
  );
};

export default Hero;
