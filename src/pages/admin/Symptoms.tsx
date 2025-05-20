
import { useState } from "react";
import { 
  Table, TableHeader, TableBody, TableHead, TableRow, TableCell 
} from "@/components/ui/table";
import { 
  Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious 
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ListCheck } from "lucide-react";

// Tipo para la intensidad del síntoma
type SymptomIntensity = "Leve" | "Moderado" | "Severo";

// Interfaz para el síntoma
interface Symptom {
  id: number;
  userId: number;
  userName: string;
  date: string;
  name: string;
  intensity: SymptomIntensity;
  description?: string;
}

// Datos de ejemplo
const mockSymptoms: Symptom[] = [
  {
    id: 1,
    userId: 1,
    userName: "María García",
    date: "2023-05-10",
    name: "Dolor de cabeza",
    intensity: "Moderado"
  },
  {
    id: 2,
    userId: 1,
    userName: "María García",
    date: "2023-05-11",
    name: "Cólicos",
    intensity: "Severo",
    description: "Dolor abdominal intenso que requirió medicación"
  },
  {
    id: 3,
    userId: 2,
    userName: "Ana López",
    date: "2023-05-06",
    name: "Sensibilidad en los pechos",
    intensity: "Moderado"
  },
  {
    id: 4,
    userId: 5,
    userName: "Sofia Fernandez",
    date: "2023-05-09",
    name: "Cambios de humor",
    intensity: "Severo",
    description: "Episodios de irritabilidad y llanto"
  },
  {
    id: 5,
    userId: 2,
    userName: "Ana López",
    date: "2023-05-07",
    name: "Fatiga",
    intensity: "Leve"
  },
  {
    id: 6,
    userId: 5,
    userName: "Sofia Fernandez",
    date: "2023-05-10",
    name: "Dolor de cabeza",
    intensity: "Leve"
  },
];

// Array con todos los nombres de síntomas para el filtro
const symptomNames = Array.from(new Set(mockSymptoms.map(s => s.name)));

const AdminSymptoms = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSymptom, setSelectedSymptom] = useState("");
  const [selectedIntensity, setSelectedIntensity] = useState<SymptomIntensity | "">("");
  
  // Filtrar síntomas
  const filteredSymptoms = mockSymptoms.filter(symptom => 
    (symptom.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    symptom.date.includes(searchTerm)) &&
    (selectedSymptom === "" || symptom.name === selectedSymptom) &&
    (selectedIntensity === "" || symptom.intensity === selectedIntensity)
  );
  
  // Conteo de síntomas por tipo
  const symptomCounts = symptomNames.map(name => {
    const count = mockSymptoms.filter(s => s.name === name).length;
    return { name, count };
  }).sort((a, b) => b.count - a.count);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Gestión de Síntomas</h1>
        <p className="text-muted-foreground">Visualiza y analiza los síntomas reportados por las usuarias</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="bg-white rounded-lg shadow p-6 border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Síntomas Más Comunes</h2>
            <div className="flex items-center">
              <ListCheck className="h-5 w-5 text-luna-purple mr-1" />
              <span className="text-sm font-medium">{mockSymptoms.length} reportes</span>
            </div>
          </div>
          <div className="space-y-4">
            {symptomCounts.slice(0, 5).map((symptom, index) => (
              <div key={index} className="flex items-center justify-between">
                <span>{symptom.name}</span>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">{symptom.count}</span>
                  <div className="h-2 w-32 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-luna-purple" 
                      style={{ width: `${(symptom.count / symptomCounts[0].count) * 100}%` }} 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border">
          <h2 className="text-lg font-semibold mb-4">Distribución por Intensidad</h2>
          <div className="flex justify-around items-end h-40 pt-4">
            {["Leve", "Moderado", "Severo"].map((intensity) => {
              const count = mockSymptoms.filter(s => s.intensity === intensity).length;
              const percentage = Math.round((count / mockSymptoms.length) * 100);
              const height = `${Math.max(percentage, 10)}%`;
              
              return (
                <div key={intensity} className="flex flex-col items-center">
                  <div className="text-sm font-medium">{count}</div>
                  <div 
                    className={`w-16 mt-2 rounded-t-lg ${
                      intensity === "Leve" ? "bg-green-400" : 
                      intensity === "Moderado" ? "bg-yellow-400" : "bg-red-400"
                    }`}
                    style={{ height }}
                  ></div>
                  <div className="text-xs mt-2">{intensity}</div>
                  <div className="text-xs text-gray-500">{percentage}%</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="w-full sm:w-64">
          <Input
            placeholder="Buscar por usuario o fecha..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        
        <div className="flex gap-2 flex-wrap">
          <select 
            className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" 
            value={selectedSymptom}
            onChange={(e) => setSelectedSymptom(e.target.value)}
          >
            <option value="">Todos los síntomas</option>
            {symptomNames.map((name, index) => (
              <option key={index} value={name}>{name}</option>
            ))}
          </select>
          
          <select 
            className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" 
            value={selectedIntensity}
            onChange={(e) => setSelectedIntensity(e.target.value as SymptomIntensity | "")}
          >
            <option value="">Todas las intensidades</option>
            <option value="Leve">Leve</option>
            <option value="Moderado">Moderado</option>
            <option value="Severo">Severo</option>
          </select>
        </div>
      </div>

      <div className="rounded-md border shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Usuario</TableHead>
              <TableHead>Fecha</TableHead>
              <TableHead>Síntoma</TableHead>
              <TableHead>Intensidad</TableHead>
              <TableHead className="hidden md:table-cell">Descripción</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSymptoms.map((symptom) => (
              <TableRow key={symptom.id}>
                <TableCell className="font-medium">{symptom.userName}</TableCell>
                <TableCell>{symptom.date}</TableCell>
                <TableCell>{symptom.name}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    symptom.intensity === "Leve" 
                      ? "bg-green-100 text-green-800" 
                      : symptom.intensity === "Moderado" 
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}>
                    {symptom.intensity}
                  </span>
                </TableCell>
                <TableCell className="hidden md:table-cell max-w-[300px] truncate">
                  {symptom.description || "-"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default AdminSymptoms;
