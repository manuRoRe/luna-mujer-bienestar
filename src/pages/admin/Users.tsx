
import { useState } from "react";
import { 
  Table, TableHeader, TableBody, TableHead, TableRow, TableCell 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious 
} from "@/components/ui/pagination";
import { Edit, Trash, User, Users } from "lucide-react";

// Tipos de usuario
type UserType = "Normal" | "Admin" | "Pareja";

// Interfaz para el usuario
interface User {
  id: number;
  name: string;
  email: string;
  birthdate: string;
  weight: number;
  height: number;
  type: UserType;
  createdAt: string;
}

// Datos de ejemplo
const mockUsers: User[] = [
  {
    id: 1,
    name: "María García",
    email: "maria@example.com",
    birthdate: "1992-05-15",
    weight: 65,
    height: 168,
    type: "Normal",
    createdAt: "2023-01-15"
  },
  {
    id: 2,
    name: "Ana López",
    email: "ana@example.com",
    birthdate: "1995-08-22",
    weight: 58,
    height: 160,
    type: "Normal",
    createdAt: "2023-02-10"
  },
  {
    id: 3,
    name: "Carlos Rodríguez",
    email: "carlos@example.com",
    birthdate: "1990-11-08",
    weight: 80,
    height: 178,
    type: "Pareja",
    createdAt: "2023-03-05"
  },
  {
    id: 4,
    name: "Laura Martínez",
    email: "admin@luna.com",
    birthdate: "1988-04-25",
    weight: 62,
    height: 165,
    type: "Admin",
    createdAt: "2022-12-01"
  },
  {
    id: 5,
    name: "Sofia Fernandez",
    email: "sofia@example.com",
    birthdate: "1993-07-12",
    weight: 60,
    height: 163,
    type: "Normal",
    createdAt: "2023-04-18"
  },
];

const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<UserType | "">("");
  
  // Filtrar usuarios
  const filteredUsers = mockUsers.filter(user => 
    (user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     user.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedType === "" || user.type === selectedType)
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Gestión de Usuarios</h1>
          <p className="text-muted-foreground">Administra los usuarios registrados en la plataforma</p>
        </div>
        <Button className="bg-luna-purple hover:bg-luna-purple/90">
          <User className="mr-2 h-4 w-4" /> Nuevo Usuario
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="w-full sm:w-64">
          <Input
            placeholder="Buscar usuario..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        
        <div className="flex gap-2 w-full sm:w-auto">
          <select 
            className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" 
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value as UserType | "")}
          >
            <option value="">Todos los tipos</option>
            <option value="Normal">Normal</option>
            <option value="Admin">Admin</option>
            <option value="Pareja">Pareja</option>
          </select>
        </div>
      </div>

      <div className="rounded-md border shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="hidden md:table-cell">Fecha Nac.</TableHead>
              <TableHead className="hidden lg:table-cell">Peso (kg)</TableHead>
              <TableHead className="hidden lg:table-cell">Altura (cm)</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="hidden md:table-cell">{user.birthdate}</TableCell>
                <TableCell className="hidden lg:table-cell">{user.weight}</TableCell>
                <TableCell className="hidden lg:table-cell">{user.height}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    user.type === "Admin" 
                      ? "bg-blue-100 text-blue-800" 
                      : user.type === "Pareja" 
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}>
                    {user.type}
                  </span>
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
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default AdminUsers;
