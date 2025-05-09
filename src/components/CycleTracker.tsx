
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Heart, ThermometerSun } from "lucide-react";
import { Link } from "react-router-dom";

const CycleTracker = () => {
  // Sample cycle phase information, in a real app this would be calculated dynamically
  const cyclePhases = [
    {
      name: "Periodo",
      description: "Durante tu menstruación, es normal experimentar cambios físicos y emocionales.",
      icon: <CalendarDays className="h-5 w-5 text-red-500" />,
      color: "bg-luna-pink",
      colorLight: "bg-luna-light-pink",
      current: false,
    },
    {
      name: "Fase Folicular",
      description: "Tu cuerpo se prepara para la ovulación con un aumento de estrógeno.",
      icon: <ThermometerSun className="h-5 w-5 text-yellow-500" />,
      color: "bg-luna-blue",
      colorLight: "bg-luna-light-blue",
      current: true,
    },
    {
      name: "Ovulación",
      description: "Máxima fertilidad. Tu cuerpo libera un óvulo maduro del ovario.",
      icon: <Heart className="h-5 w-5 text-luna-purple" />,
      color: "bg-luna-purple",
      colorLight: "bg-luna-light-purple",
      current: false,
    },
    {
      name: "Fase Lútea",
      description: "Tu cuerpo se prepara para un posible embarazo o el próximo ciclo.",
      icon: <CalendarDays className="h-5 w-5 text-blue-500" />,
      color: "bg-blue-500",
      colorLight: "bg-blue-100",
      current: false,
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="luna-container">
        <div className="text-center mb-12">
          <h2 className="luna-heading mb-4">Conoce Tu Ciclo</h2>
          <p className="luna-subheading max-w-3xl mx-auto">
            Comprende las diferentes fases de tu ciclo menstrual y cómo afectan a tu cuerpo y bienestar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cyclePhases.map((phase, index) => (
            <Card 
              key={index}
              className={`overflow-hidden border ${phase.current ? 'ring-2 ring-luna-purple shadow-lg' : ''}`}
            >
              <div className={`h-2 w-full ${phase.color}`}></div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  {phase.icon}
                  {phase.current && (
                    <span className="px-2 py-1 bg-luna-light-purple text-luna-purple text-xs rounded-full">Actual</span>
                  )}
                </div>
                <CardTitle className="text-lg">{phase.name}</CardTitle>
                <CardDescription>{phase.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className={`p-3 rounded-lg text-sm ${phase.colorLight} text-foreground/80`}>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Escucha a tu cuerpo</li>
                    <li>Registra tus síntomas</li>
                    <li>Adapta tus actividades</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/calendar">
            <Button className="luna-button-primary">
              Ir a Mi Calendario
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CycleTracker;
