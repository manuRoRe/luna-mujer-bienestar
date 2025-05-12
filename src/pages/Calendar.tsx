import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendarDays, Heart, Smile, ThermometerSun } from "lucide-react";

const CalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedSymptom, setSelectedSymptom] = useState<string>("none");

  // Sample data for demonstration - would be dynamic in a real app
  const cycleData = {
    periodStart: new Date(new Date().setDate(new Date().getDate() - 10)),
    periodEnd: new Date(new Date().setDate(new Date().getDate() - 5)),
    ovulation: new Date(new Date().setDate(new Date().getDate() + 4)),
    nextPeriod: new Date(new Date().setDate(new Date().getDate() + 18)),
  };

  // Function to determine day colors in the calendar
  const getDayClassNames = (day: Date) => {
    const currentDate = day.setHours(0, 0, 0, 0);
    const periodStart = cycleData.periodStart.setHours(0, 0, 0, 0);
    const periodEnd = cycleData.periodEnd.setHours(0, 0, 0, 0);
    const ovulation = cycleData.ovulation.setHours(0, 0, 0, 0);

    if (currentDate === periodStart) {
      return "bg-luna-pink text-foreground rounded-full";
    }
    if (currentDate > periodStart && currentDate <= periodEnd) {
      return "bg-luna-light-pink text-foreground";
    }
    if (currentDate === ovulation) {
      return "bg-luna-purple text-white rounded-full";
    }
    if (currentDate === ovulation - 86400000 || currentDate === ovulation + 86400000) {
      return "bg-luna-light-purple text-foreground";
    }
    
    return "";
  };

  // Daily info based on selected date
  const getDayInfo = () => {
    if (!date) return null;
    
    const currentDate = date.setHours(0, 0, 0, 0);
    const periodStart = cycleData.periodStart.setHours(0, 0, 0, 0);
    const periodEnd = cycleData.periodEnd.setHours(0, 0, 0, 0);
    const ovulation = cycleData.ovulation.setHours(0, 0, 0, 0);
    
    if (currentDate === periodStart) {
      return {
        phase: "Inicio del Periodo",
        icon: <CalendarDays className="h-5 w-5 text-luna-pink" />,
        info: "Primer día de tu periodo. Es normal experimentar cólicos y cambios de humor."
      };
    }
    if (currentDate > periodStart && currentDate <= periodEnd) {
      return {
        phase: "Periodo",
        icon: <CalendarDays className="h-5 w-5 text-luna-pink" />,
        info: "Durante tu periodo, cuida tu descanso y alimentación."
      };
    }
    if (currentDate === ovulation) {
      return {
        phase: "Ovulación",
        icon: <Heart className="h-5 w-5 text-luna-purple" />,
        info: "Día de mayor fertilidad. Podrías sentir un ligero dolor en un lado del abdomen."
      };
    }
    if (currentDate === ovulation - 86400000 || currentDate === ovulation + 86400000) {
      return {
        phase: "Ventana Fértil",
        icon: <Heart className="h-5 w-5 text-luna-purple" />,
        info: "Días de alta fertilidad alrededor de la ovulación."
      };
    }
    if (currentDate > periodEnd && currentDate < ovulation) {
      return {
        phase: "Fase Folicular",
        icon: <ThermometerSun className="h-5 w-5 text-yellow-500" />,
        info: "Tus niveles de energía comienzan a aumentar. Buen momento para actividades físicas."
      };
    }
    if (currentDate > ovulation) {
      return {
        phase: "Fase Lútea",
        icon: <Smile className="h-5 w-5 text-blue-500" />,
        info: "Tu cuerpo se prepara para la menstruación o un posible embarazo."
      };
    }

    return {
      phase: "Día Regular",
      icon: <CalendarDays className="h-5 w-5 text-foreground" />,
      info: "Sin eventos especiales para este día."
    };
  };

  const dayInfo = getDayInfo();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 bg-gradient-to-b from-white to-luna-light-pink/10">
        <div className="luna-container">
          <h1 className="luna-heading mb-8 text-center">Mi Calendario</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="luna-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarDays className="h-5 w-5 text-luna-purple" />
                    Calendario del Ciclo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-white rounded-lg p-4 w-full">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="w-full"
                      modifiers={{
                        periodStart: cycleData.periodStart,
                        period: {
                          from: cycleData.periodStart,
                          to: cycleData.periodEnd
                        },
                        ovulation: cycleData.ovulation,
                        fertile: [
                          new Date(cycleData.ovulation.setDate(cycleData.ovulation.getDate() - 1)),
                          cycleData.ovulation,
                          new Date(cycleData.ovulation.setDate(cycleData.ovulation.getDate() + 1))
                        ]
                      }}
                      modifiersClassNames={{
                        periodStart: "bg-luna-pink text-foreground",
                        period: "bg-luna-light-pink text-foreground",
                        ovulation: "bg-luna-purple text-white",
                        fertile: "bg-luna-light-purple text-foreground"
                      }}
                      classNames={{
                        day_selected: "bg-luna-purple text-white",
                        day_today: "border border-luna-purple"
                      }}
                    />
                  </div>
                  
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-luna-pink"></div>
                      <span>Periodo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-luna-purple"></div>
                      <span>Ovulación</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-luna-light-purple"></div>
                      <span>Fase Fértil</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border-2 border-luna-purple"></div>
                      <span>Hoy</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="luna-card mb-6">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex justify-between items-center">
                    <span>Información del Día</span>
                    <span className="text-sm font-normal text-foreground/70">
                      {date ? date.toLocaleDateString("es-ES", { 
                        day: 'numeric', 
                        month: 'short' 
                      }) : ""}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {dayInfo && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        {dayInfo.icon}
                        <span className="font-medium">{dayInfo.phase}</span>
                      </div>
                      <p className="text-sm text-foreground/70">{dayInfo.info}</p>
                      
                      <div className="mt-6">
                        <h4 className="font-medium mb-2">Registrar para este día</h4>
                        <Select
                          value={selectedSymptom}
                          onValueChange={setSelectedSymptom}
                        >
                          <SelectTrigger className="w-full border-luna-light-purple/50">
                            <SelectValue placeholder="Seleccionar síntoma" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">Seleccionar síntoma</SelectItem>
                            <SelectItem value="cramps">Cólicos</SelectItem>
                            <SelectItem value="headache">Dolor de cabeza</SelectItem>
                            <SelectItem value="bloating">Hinchazón</SelectItem>
                            <SelectItem value="fatigue">Fatiga</SelectItem>
                            <SelectItem value="mood">Cambios de humor</SelectItem>
                          </SelectContent>
                        </Select>
                        
                        <Button className="luna-button-secondary w-full mt-4">
                          Guardar Registro
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              <Card className="luna-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Próximos eventos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-luna-light-pink">
                      <CalendarDays className="h-5 w-5 text-luna-pink" />
                      <div>
                        <p className="font-medium">Próximo periodo</p>
                        <p className="text-xs text-foreground/70">{cycleData.nextPeriod.toLocaleDateString("es-ES", { 
                          day: 'numeric', 
                          month: 'long' 
                        })}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-luna-light-purple">
                      <Heart className="h-5 w-5 text-luna-purple" />
                      <div>
                        <p className="font-medium">Próxima ovulación</p>
                        <p className="text-xs text-foreground/70">{cycleData.ovulation.toLocaleDateString("es-ES", { 
                          day: 'numeric', 
                          month: 'long' 
                        })}</p>
                      </div>
                    </div>
                    
                    <Button className="w-full luna-button-primary">
                      Configurar Recordatorios
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CalendarPage;
