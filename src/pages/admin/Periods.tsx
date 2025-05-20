
import { useState } from "react";
import { 
  Table, TableHeader, TableBody, TableHead, TableRow, TableCell 
} from "@/components/ui/table";
import { 
  Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious 
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Edit, Trash } from "lucide-react";

// Interfaz para el período
interface Period {
  id: number;
  userId: number;
  userName: string;
  startDate: string;
  endDate: string;
  duration: number;
  symptoms: string[];
  notes: string;
}

// Datos de ejemplo
const mockPeriods: Period[] = [
  {
    id: 1,
    userId: 1,
    userName: "María García",
    startDate: "2023-05-10",
    endDate: "2023-05-15",
    duration: 6,
    symptoms: ["Dolor de cabeza", "Cólicos", "Fatiga"],
    notes: "Ciclo normal, dolor moderado"
  },
  {
    id: 2,
    userId: 2,
    userName: "Ana López",
    startDate: "2023-05-05",
    endDate: "2023-05-10",
    duration: 6,
    symptoms: ["Cólicos", "Sensibilidad en los pechos"],
    notes: "Dolor intenso el primer día"
  },
  {
    id: 3,
    userId: 1,
    userName: "María García",
    startDate: "2023-04-12",
    endDate: "2023-04-17",
    duration: 6,
    symptoms: ["Dolor de cabeza", "Fatiga"],
    notes: "Ciclo más corto de lo normal"
  },
  {
    id: 4,
    userId: 5,
    userName: "Sofia Fernandez",
    startDate: "2023-05-08",
    endDate: "2023-05-12",
    duration: 5,
    symptoms: ["Cambios de humor", "Cólicos"],
    notes: ""
  },
  {
    id: 5,
    userId: 2,
    userName: "Ana López",
    startDate: "2023-04-03",
    endDate: "2023-04-08",
    duration: 6,
    symptoms: ["Dolor de cabeza", "Cólicos", "Cambios de humor"],
    notes: "Más intenso que el ciclo anterior"
  },
];

const AdminPeriods = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filtrar periodos
  const filteredPeriods = mockPeriods.filter(period => 
    period.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    period.startDate.includes(searchTerm) ||
    period.endDate.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Gestión de Periodos</h1>
        <p className="text-muted-foreground">Administra los registros de periodos de las usuarias</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="w-full sm:w-64">
          <Input
            placeholder="Buscar por usuario o fecha..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" /> Filtrar por fecha
          </Button>
        </div>
      </div>

      <div className="rounded-md border shadow overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Usuario</TableHead>
              <TableHead>Fecha Inicio</TableHead>
              <TableHead>Fecha Fin</TableHead>
              <TableHead>Duración</TableHead>
              <TableHead className="hidden md:table-cell">Síntomas</TableHead>
              <TableHead className="hidden lg:table-cell">Notas</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPeriods.map((period) => (
              <TableRow key={period.id}>
                <TableCell className="font-medium">{period.userName}</TableCell>
                <TableCell>{period.startDate}</TableCell>
                <TableCell>{period.endDate}</TableCell>
                <TableCell>{period.duration} días</TableCell>
                <TableCell className="hidden md:table-cell">
                  <div className="flex flex-wrap gap-1">
                    {period.symptoms.map((symptom, index) => (
                      <span 
                        key={index} 
                        className="bg-luna-light-purple/30 text-luna-purple text-xs px-2 py-0.5 rounded-full"
                      >
                        {symptom}
                      </span>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="hidden lg:table-cell max-w-[200px] truncate">
                  {period.notes || "-"}
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500">
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
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

export default AdminPeriods;
