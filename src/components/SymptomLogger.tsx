
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MoodHappy, ThermometerSun, Heart, CalendarHeart } from "lucide-react";

const SymptomLogger = () => {
  // Sample symptoms - would be dynamically populated in a real app
  const symptoms = [
    {
      category: "Estado de Ánimo",
      icon: <MoodHappy className="h-5 w-5 text-yellow-500" />,
      options: ["Feliz", "Tranquila", "Ansiosa", "Irritable", "Triste"],
      color: "bg-yellow-100"
    },
    {
      category: "Síntomas Físicos",
      icon: <ThermometerSun className="h-5 w-5 text-red-500" />,
      options: ["Cólicos", "Dolor de Cabeza", "Hinchazón", "Fatiga", "Náuseas"],
      color: "bg-red-100"
    },
    {
      category: "Energía",
      icon: <Heart className="h-5 w-5 text-green-500" />,
      options: ["Alta", "Normal", "Baja", "Muy Baja"],
      color: "bg-green-100"
    },
    {
      category: "Ciclo",
      icon: <CalendarHeart className="h-5 w-5 text-luna-purple" />,
      options: ["Periodo", "Flujo Ligero", "Flujo Moderado", "Flujo Intenso", "Sin Periodo"],
      color: "bg-luna-light-purple"
    }
  ];

  return (
    <div className="py-16 bg-luna-light-pink/30">
      <div className="luna-container">
        <div className="text-center mb-12">
          <h2 className="luna-heading mb-4">Registra Tus Síntomas</h2>
          <p className="luna-subheading max-w-3xl mx-auto">
            Mantén un seguimiento personalizado de tu bienestar físico y emocional durante todo tu ciclo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {symptoms.map((symptom, index) => (
                <Card key={index} className="luna-card h-full">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`rounded-full p-2 ${symptom.color}`}>
                        {symptom.icon}
                      </div>
                      <h3 className="font-medium">{symptom.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {symptom.options.map((option, i) => (
                        <Button 
                          key={i} 
                          variant="outline" 
                          size="sm"
                          className="rounded-full text-xs border-luna-light-purple/50 hover:bg-luna-light-purple/20 hover:text-luna-purple"
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 text-center sm:text-left">
              <Button className="luna-button-secondary">
                Registrar Síntomas Hoy
              </Button>
            </div>
          </div>
          <div className="luna-card bg-white/80 backdrop-blur-sm flex flex-col justify-center h-full">
            <div className="text-center p-6">
              <h3 className="text-xl font-bold text-luna-purple mb-4">Beneficios del Seguimiento</h3>
              <ul className="space-y-4 text-left">
                <li className="flex items-start gap-3">
                  <div className="rounded-full h-6 w-6 mt-1 flex items-center justify-center bg-luna-light-purple text-luna-purple font-bold text-sm">1</div>
                  <div>
                    <p className="font-medium">Comprende tu ciclo único</p>
                    <p className="text-sm text-foreground/70">Identifica patrones personales y aprende a anticipar cambios hormonales.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full h-6 w-6 mt-1 flex items-center justify-center bg-luna-light-purple text-luna-purple font-bold text-sm">2</div>
                  <div>
                    <p className="font-medium">Mejora conversaciones médicas</p>
                    <p className="text-sm text-foreground/70">Comparte un historial preciso con los profesionales de salud.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full h-6 w-6 mt-1 flex items-center justify-center bg-luna-light-purple text-luna-purple font-bold text-sm">3</div>
                  <div>
                    <p className="font-medium">Optimiza tu bienestar</p>
                    <p className="text-sm text-foreground/70">Adapta tu alimentación, ejercicio y descanso según la fase de tu ciclo.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymptomLogger;
