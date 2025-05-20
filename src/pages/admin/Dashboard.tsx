
import { Users, Calendar, ListCheck, MessageSquare } from "lucide-react";
import StatsCard from "@/components/admin/StatsCard";

// Mock data for charts
const periodsThisMonth = 145;
const usersRegistered = 326;
const newUsersThisMonth = 42;
const symptomsReported = 687;
const tipsPublished = 56;
const tipsFavorited = 248;

// Common symptoms (mock data)
const commonSymptoms = [
  { name: "Dolor de cabeza", count: 167 },
  { name: "Cólicos", count: 143 },
  { name: "Fatiga", count: 118 },
  { name: "Cambios de humor", count: 102 },
  { name: "Sensibilidad en los pechos", count: 89 },
];

// Most favorited tips (mock data)
const topTips = [
  { title: "Cómo aliviar el dolor menstrual naturalmente", favorites: 78 },
  { title: "Hábitos alimenticios para equilibrar hormonas", favorites: 65 },
  { title: "Ejercicios recomendados durante el período", favorites: 58 },
  { title: "Manejo del estrés y ansiedad premenstrual", favorites: 47 },
];

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Panel de Administración</h1>
        <p className="text-gray-300">Estadísticas generales del sistema Luna</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard 
          title="Usuarios Registrados" 
          value={usersRegistered} 
          icon={<Users className="h-5 w-5" />} 
          trend={{ value: `+${newUsersThisMonth}`, positive: true }} 
        />
        <StatsCard 
          title="Periodos Registrados" 
          value={periodsThisMonth} 
          icon={<Calendar className="h-5 w-5" />} 
          trend={{ value: "+12%", positive: true }} 
        />
        <StatsCard 
          title="Síntomas Reportados" 
          value={symptomsReported} 
          icon={<ListCheck className="h-5 w-5" />} 
          trend={{ value: "+8%", positive: true }} 
        />
        <StatsCard 
          title="Consejos Publicados" 
          value={tipsPublished} 
          icon={<MessageSquare className="h-5 w-5" />} 
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Top Symptoms Card */}
        <div className="bg-black rounded-lg shadow p-6 border border-white/20">
          <h2 className="text-lg font-semibold mb-4 text-white">Síntomas Más Comunes</h2>
          <div className="space-y-4">
            {commonSymptoms.map((symptom, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-200">{symptom.name}</span>
                <div className="flex items-center">
                  <span className="font-semibold mr-2 text-white">{symptom.count}</span>
                  <div className="h-2 w-32 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-luna-purple" 
                      style={{ width: `${(symptom.count / commonSymptoms[0].count) * 100}%` }} 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Most Favorited Tips */}
        <div className="bg-black rounded-lg shadow p-6 border border-white/20">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-white">Consejos Más Guardados</h2>
            <span className="text-sm text-luna-purple">{tipsFavorited} favoritos totales</span>
          </div>
          <div className="space-y-4">
            {topTips.map((tip, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="truncate pr-4 flex-1 text-gray-200">{tip.title}</span>
                <span className="bg-luna-purple/30 text-luna-purple px-2 py-1 rounded-full text-xs font-semibold">
                  {tip.favorites} ❤
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
