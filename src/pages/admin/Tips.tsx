
import { useState } from "react";
import { 
  Table, TableHeader, TableBody, TableHead, TableRow, TableCell 
} from "@/components/ui/table";
import { 
  Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious 
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Edit, Heart, MessageSquare, Trash } from "lucide-react";

// Interfaz para los consejos
interface Tip {
  id: number;
  title: string;
  category: string;
  content: string;
  image: string;
  favorites: number;
  createdAt: string;
}

// Datos de ejemplo
const mockTips: Tip[] = [
  {
    id: 1,
    title: "Cómo aliviar el dolor menstrual naturalmente",
    category: "Salud reproductiva",
    content: "El dolor menstrual puede ser aliviado con compresas calientes, té de jengibre, y ejercicios suaves como yoga o estiramientos.",
    image: "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    favorites: 78,
    createdAt: "2023-03-15"
  },
  {
    id: 2,
    title: "Hábitos alimenticios para equilibrar hormonas",
    category: "Salud reproductiva",
    content: "Una alimentación rica en fibra, grasas saludables y proteínas puede ayudar a equilibrar tus hormonas y reducir los síntomas del síndrome premenstrual.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    favorites: 65,
    createdAt: "2023-04-02"
  },
  {
    id: 3,
    title: "Ejercicios recomendados durante el período",
    category: "Salud reproductiva",
    content: "Durante tu período, los ejercicios de baja intensidad como caminar, nadar o yoga pueden ayudar a reducir molestias y mejorar tu estado de ánimo.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    favorites: 58,
    createdAt: "2023-03-28"
  },
  {
    id: 4,
    title: "Mitos y verdades sobre el ciclo menstrual",
    category: "Salud reproductiva",
    content: "Hay muchos mitos sobre el ciclo menstrual. En este artículo desmitificamos creencias populares y te explicamos cómo funciona realmente tu ciclo.",
    image: "https://images.unsplash.com/photo-1617039570999-baacb54ab68a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    favorites: 42,
    createdAt: "2023-02-14"
  },
  {
    id: 5,
    title: "Mejorando la comunicación en la intimidad",
    category: "Sexo",
    content: "La comunicación es clave para una vida sexual satisfactoria. Aquí te compartimos consejos para hablar con tu pareja sobre tus necesidades y deseos.",
    image: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    favorites: 37,
    createdAt: "2023-04-10"
  },
  {
    id: 6,
    title: "Manejo del estrés y ansiedad premenstrual",
    category: "Salud reproductiva",
    content: "Los cambios hormonales pueden incrementar los niveles de estrés y ansiedad. Te ofrecemos técnicas de respiración y mindfulness para controlar estos síntomas.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    favorites: 47,
    createdAt: "2023-03-05"
  }
];

// Array con todas las categorías para el filtro
const categories = Array.from(new Set(mockTips.map(tip => tip.category)));

const AdminTips = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  
  // Filtrar consejos
  const filteredTips = mockTips.filter(tip => 
    (tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     tip.content.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategory === "" || tip.category === selectedCategory)
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">Gestión de Consejos</h1>
          <p className="text-gray-300">Administra los consejos y tips publicados</p>
        </div>
        <Button className="bg-luna-purple hover:bg-luna-purple/90">
          <MessageSquare className="mr-2 h-4 w-4" /> Nuevo Consejo
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="w-full sm:w-64">
          <Input
            placeholder="Buscar consejo..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/10 text-white border-white/20"
          />
        </div>
        
        <div className="flex gap-2">
          <select 
            className="rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Todas las categorías</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="rounded-md border border-white/20 shadow bg-black">
        <Table>
          <TableHeader className="bg-white/5">
            <TableRow className="border-white/10 hover:bg-white/5">
              <TableHead className="w-12 text-white"></TableHead>
              <TableHead className="text-white">Título</TableHead>
              <TableHead className="text-white">Categoría</TableHead>
              <TableHead className="hidden md:table-cell text-white">Creado</TableHead>
              <TableHead className="text-center text-white">
                <Heart className="h-4 w-4 inline" />
              </TableHead>
              <TableHead className="text-white">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTips.map((tip) => (
              <TableRow key={tip.id} className="border-white/10 hover:bg-white/5">
                <TableCell>
                  <div 
                    className="w-10 h-10 rounded bg-cover bg-center border border-white/20" 
                    style={{ backgroundImage: `url(${tip.image})` }}
                  ></div>
                </TableCell>
                <TableCell className="font-medium text-white">{tip.title}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    tip.category === "Salud reproductiva" 
                      ? "bg-purple-900/60 text-purple-200" 
                      : "bg-blue-900/60 text-blue-200"
                  }`}>
                    {tip.category}
                  </span>
                </TableCell>
                <TableCell className="hidden md:table-cell text-gray-300">{tip.createdAt}</TableCell>
                <TableCell className="text-center text-white">
                  <span className="font-medium">{tip.favorites}</span>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:text-luna-purple hover:bg-white/10">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:bg-white/10">
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
        <PaginationContent className="text-white">
          <PaginationItem>
            <PaginationPrevious href="#" className="text-white hover:text-luna-purple" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive className="bg-luna-purple text-white border-white/20">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="text-white hover:bg-white/10 border-white/20">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" className="text-white hover:text-luna-purple" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default AdminTips;
