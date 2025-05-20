
import { useState } from "react";
import { 
  Table, TableHeader, TableBody, TableHead, TableRow, TableCell 
} from "@/components/ui/table";
import { 
  Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious 
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Calendar, Edit, Trash } from "lucide-react";

// Tipo para los tipos de recordatorio
type ReminderType = "pills" | "appointment" | "other";

// Interfaz para el recordatorio
interface Reminder {
  id: number;
  userId: number;
  userName: string;
  title: string;
  type: ReminderType;
  date: string;
  time?: string;
  completed: boolean;
  notes?: string;
}

// Función para formatear el tipo de recordatorio
const formatReminderType = (type: ReminderType): string => {
  switch(type) {
    case "pills": return "Pastillas";
    case "appointment": return "Cita médica";
    case "other": return "Otro";
  }
};

// Datos de ejemplo
const mockReminders: Reminder[] = [
  {
    id: 1,
    userId: 1,
    userName: "María García",
    title: "Tomar anticonceptivo",
    type: "pills",
    date: "2023-05-20",
    time: "09:00",
    completed: false,
    notes: "Repetición diaria"
  },
  {
    id: 2,
    userId: 2,
    userName: "Ana López",
    title: "Cita ginecológica",
    type: "appointment",
    date: "2023-05-25",
    time: "16:30",
    completed: false,
    notes: "Hospital Universitario"
  },
  {
    id: 3,
    userId: 5,
    userName: "Sofia Fernandez",
    title: "Cambiar tampón",
    type: "other",
    date: "2023-05-18",
    time: "14:00",
    completed: true
  },
  {
    id: 4,
    userId: 1,
    userName: "María García",
    title: "Tomar suplemento de hierro",
    type: "pills",
    date: "2023-05-19",
    time: "20:00",
    completed: false,
    notes: "Con las comidas"
  },
  {
    id: 5,
    userId: 2,
    userName: "Ana López",
    title: "Comprar toallas sanitarias",
    type: "other",
    date: "2023-05-22",
    completed: true
  },
  {
    id: 6,
    userId: 5,
    userName: "Sofia Fernandez",
    title: "Análisis de sangre",
    type: "appointment",
    date: "2023-06-05",
    time: "08:30",
    completed: false,
    notes: "Ayuno de 8 horas"
  },
];

const AdminReminders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<ReminderType | "">("");
  const [showCompleted, setShowCompleted] = useState<boolean | null>(null);
  
  // Filtrar recordatorios
  const filteredReminders = mockReminders.filter(reminder => 
    (reminder.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
     reminder.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedType === "" || reminder.type === selectedType) &&
    (showCompleted === null || reminder.completed === showCompleted)
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Gestión de Recordatorios</h1>
          <p className="text-muted-foreground">Administra los recordatorios de las usuarias</p>
        </div>
        <Button className="bg-luna-purple hover:bg-luna-purple/90">
          <Bell className="mr-2 h-4 w-4" /> Nuevo Recordatorio
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="w-full sm:w-64">
          <Input
            placeholder="Buscar recordatorio..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        
        <div className="flex gap-2 flex-wrap">
          <select 
            className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" 
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value as ReminderType | "")}
          >
            <option value="">Todos los tipos</option>
            <option value="pills">Pastillas</option>
            <option value="appointment">Citas médicas</option>
            <option value="other">Otros</option>
          </select>
          
          <select 
            className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" 
            value={showCompleted === null ? "" : showCompleted ? "completed" : "pending"}
            onChange={(e) => {
              if(e.target.value === "") setShowCompleted(null);
              else setShowCompleted(e.target.value === "completed");
            }}
          >
            <option value="">Todos los estados</option>
            <option value="completed">Completados</option>
            <option value="pending">Pendientes</option>
          </select>
          
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" /> Filtrar por fecha
          </Button>
        </div>
      </div>

      <div className="rounded-md border shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Usuario</TableHead>
              <TableHead>Título</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Fecha</TableHead>
              <TableHead className="hidden md:table-cell">Hora</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="hidden lg:table-cell">Notas</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredReminders.map((reminder) => (
              <TableRow key={reminder.id} className={reminder.completed ? "bg-muted/40" : ""}>
                <TableCell className="font-medium">{reminder.userName}</TableCell>
                <TableCell>{reminder.title}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    reminder.type === "pills" 
                      ? "bg-blue-100 text-blue-800" 
                      : reminder.type === "appointment" 
                      ? "bg-purple-100 text-purple-800"
                      : "bg-gray-100 text-gray-800"
                  }`}>
                    {formatReminderType(reminder.type)}
                  </span>
                </TableCell>
                <TableCell>{reminder.date}</TableCell>
                <TableCell className="hidden md:table-cell">{reminder.time || "-"}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    reminder.completed 
                      ? "bg-green-100 text-green-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {reminder.completed ? "Completado" : "Pendiente"}
                  </span>
                </TableCell>
                <TableCell className="hidden lg:table-cell max-w-[200px] truncate">
                  {reminder.notes || "-"}
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

export default AdminReminders;
