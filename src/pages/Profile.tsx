
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendarClock, CalendarDays, User, Bell, Heart, MoodHappy } from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 bg-gradient-to-b from-white to-luna-light-blue/10">
        <div className="luna-container">
          <h1 className="luna-heading mb-6 text-center">Mi Perfil</h1>
          
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 w-full max-w-md mx-auto mb-8">
              <TabsTrigger value="personal" className="data-[state=active]:bg-luna-light-purple data-[state=active]:text-luna-purple">
                Personal
              </TabsTrigger>
              <TabsTrigger value="cycle" className="data-[state=active]:bg-luna-light-purple data-[state=active]:text-luna-purple">
                Mi Ciclo
              </TabsTrigger>
              <TabsTrigger value="notifications" className="data-[state=active]:bg-luna-light-purple data-[state=active]:text-luna-purple">
                Notificaciones
              </TabsTrigger>
            </TabsList>

            {/* Personal Information Tab */}
            <TabsContent value="personal">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="luna-card md:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5 text-luna-purple" />
                      Información Personal
                    </CardTitle>
                    <CardDescription>
                      Actualiza tu información de perfil
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nombre</Label>
                          <Input id="name" placeholder="Tu nombre" className="luna-input" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastname">Apellidos</Label>
                          <Input id="lastname" placeholder="Tus apellidos" className="luna-input" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Correo Electrónico</Label>
                        <Input id="email" type="email" placeholder="tu@correo.com" className="luna-input" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="birth">Fecha de Nacimiento</Label>
                        <Input id="birth" type="date" className="luna-input" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="height">Altura (cm)</Label>
                        <Input id="height" type="number" placeholder="165" className="luna-input" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="weight">Peso (kg)</Label>
                        <Input id="weight" type="number" placeholder="60" className="luna-input" />
                      </div>
                      
                      <Button className="luna-button-primary">
                        Guardar Cambios
                      </Button>
                    </form>
                  </CardContent>
                </Card>
                
                <div className="space-y-6">
                  <Card className="luna-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MoodHappy className="h-5 w-5 text-luna-purple" />
                        Resumen
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center border-b pb-2 border-luna-light-purple/30">
                          <span className="text-sm text-foreground/70">Ciclos registrados</span>
                          <span className="font-medium">3</span>
                        </div>
                        <div className="flex justify-between items-center border-b pb-2 border-luna-light-purple/30">
                          <span className="text-sm text-foreground/70">Duración promedio</span>
                          <span className="font-medium">28 días</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-foreground/70">Periodo promedio</span>
                          <span className="font-medium">5 días</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="luna-card bg-gradient-to-br from-luna-light-purple to-luna-light-pink">
                    <CardContent className="p-6">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 mx-auto rounded-full bg-white/80 flex items-center justify-center">
                          <Heart className="h-8 w-8 text-luna-purple" />
                        </div>
                        <h3 className="font-bold text-luna-purple">Consulta Médica</h3>
                        <p className="text-sm text-foreground/70">
                          Conecta con profesionales de salud para resolver tus dudas.
                        </p>
                        <Button variant="outline" className="border-luna-purple text-luna-purple bg-white">
                          Próximamente
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            {/* Cycle Information Tab */}
            <TabsContent value="cycle">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="luna-card md:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CalendarDays className="h-5 w-5 text-luna-purple" />
                      Configuración del Ciclo
                    </CardTitle>
                    <CardDescription>
                      Ajusta la información de tu ciclo menstrual
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cycle-length">Duración del ciclo (días)</Label>
                        <Input id="cycle-length" type="number" placeholder="28" className="luna-input" />
                        <p className="text-xs text-foreground/70">La duración promedio de un ciclo completo es de 28 días.</p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="period-length">Duración del periodo (días)</Label>
                        <Input id="period-length" type="number" placeholder="5" className="luna-input" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="last-period">Fecha del último periodo</Label>
                        <Input id="last-period" type="date" className="luna-input" />
                      </div>
                      
                      <div className="space-y-3">
                        <Label>Síntomas habituales</Label>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="flex items-center space-x-2">
                            <Switch id="symptom1" />
                            <Label htmlFor="symptom1">Cólicos</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="symptom2" />
                            <Label htmlFor="symptom2">Dolor de cabeza</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="symptom3" />
                            <Label htmlFor="symptom3">Cambios de humor</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="symptom4" />
                            <Label htmlFor="symptom4">Fatiga</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="symptom5" />
                            <Label htmlFor="symptom5">Hinchazón</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="symptom6" />
                            <Label htmlFor="symptom6">Sensibilidad</Label>
                          </div>
                        </div>
                      </div>
                      
                      <Button className="luna-button-primary">
                        Guardar Configuración
                      </Button>
                    </form>
                  </CardContent>
                </Card>
                
                <Card className="luna-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CalendarClock className="h-5 w-5 text-luna-purple" />
                      Métodos Anticonceptivos
                    </CardTitle>
                    <CardDescription>
                      Registra la información de tu método anticonceptivo
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="method">Método actual</Label>
                        <select id="method" className="luna-input w-full">
                          <option value="">Selecciona un método</option>
                          <option value="none">Ninguno</option>
                          <option value="pill">Píldora</option>
                          <option value="condom">Preservativo</option>
                          <option value="iud">DIU</option>
                          <option value="patch">Parche</option>
                          <option value="implant">Implante</option>
                          <option value="ring">Anillo vaginal</option>
                          <option value="injection">Inyección</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="start-date">Fecha de inicio</Label>
                        <Input id="start-date" type="date" className="luna-input" />
                      </div>
                      
                      <div className="flex items-center space-x-2 mt-4">
                        <Switch id="reminder" />
                        <Label htmlFor="reminder">
                          Activar recordatorio
                        </Label>
                      </div>
                      
                      <Button className="luna-button-secondary w-full mt-4">
                        Guardar Método
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Notifications Tab */}
            <TabsContent value="notifications">
              <Card className="luna-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5 text-luna-purple" />
                    Configuración de Notificaciones
                  </CardTitle>
                  <CardDescription>
                    Personaliza cuándo y cómo quieres recibir recordatorios
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border-b pb-4 border-luna-light-purple/30">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-medium">Recordatorio de Periodo</h3>
                          <p className="text-sm text-foreground/70">Te avisamos cuando se acerque tu próximo periodo</p>
                        </div>
                        <Switch id="period-notification" />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="period-days">Días de anticipación</Label>
                          <select id="period-days" className="luna-input w-full">
                            <option value="1">1 día antes</option>
                            <option value="2">2 días antes</option>
                            <option value="3">3 días antes</option>
                            <option value="7">1 semana antes</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="period-time">Hora</Label>
                          <Input id="period-time" type="time" className="luna-input" defaultValue="09:00" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-b pb-4 border-luna-light-purple/30">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-medium">Recordatorio de Ovulación</h3>
                          <p className="text-sm text-foreground/70">Te avisamos cuando estés en tus días fértiles</p>
                        </div>
                        <Switch id="ovulation-notification" />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="ovulation-days">Días de anticipación</Label>
                          <select id="ovulation-days" className="luna-input w-full">
                            <option value="1">1 día antes</option>
                            <option value="2">2 días antes</option>
                            <option value="3">3 días antes</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="ovulation-time">Hora</Label>
                          <Input id="ovulation-time" type="time" className="luna-input" defaultValue="09:00" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-b pb-4 border-luna-light-purple/30">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-medium">Registro de Síntomas</h3>
                          <p className="text-sm text-foreground/70">Te recordamos registrar cómo te sientes cada día</p>
                        </div>
                        <Switch id="symptoms-notification" />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="symptoms-frequency">Frecuencia</Label>
                          <select id="symptoms-frequency" className="luna-input w-full">
                            <option value="daily">Diariamente</option>
                            <option value="period">Solo durante el periodo</option>
                            <option value="custom">Personalizado</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="symptoms-time">Hora</Label>
                          <Input id="symptoms-time" type="time" className="luna-input" defaultValue="20:00" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Switch id="email-notification" />
                      <div>
                        <Label htmlFor="email-notification" className="block">
                          Notificaciones por correo electrónico
                        </Label>
                        <p className="text-sm text-foreground/70">
                          Recibe recordatorios en tu correo además de en la app
                        </p>
                      </div>
                    </div>
                    
                    <Button className="luna-button-primary">
                      Guardar Preferencias
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
