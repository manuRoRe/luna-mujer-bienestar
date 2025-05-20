
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Bookmark, 
  BookmarkCheck, 
  MessageSquare, 
  Heart, 
  Calendar, 
  Baby 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Tipo para los consejos
interface Consejo {
  id: number;
  categoria: string;
  titulo: string;
  descripcionCorta: string;
  contenido: string;
  imagen: string;
}

// Datos de muestra para los consejos
const consejosData: Consejo[] = [
  {
    id: 1,
    categoria: "Salud reproductiva",
    titulo: "Por qué no debes lavarte la vagina",
    descripcionCorta: "La limpieza vaginal puede alterar el pH y eliminar bacterias beneficiosas.",
    contenido: "La vagina tiene la capacidad de limpiarse por sí sola gracias a las secreciones naturales que ayudan a mantener el pH adecuado y protegen contra infecciones. Usar jabones o duchas vaginales puede alterar este equilibrio y aumentar el riesgo de infecciones. Es recomendable lavar solo la parte externa con agua y jabón neutro.",
    imagen: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: 2,
    categoria: "Salud reproductiva",
    titulo: "Primeras señales de embarazo",
    descripcionCorta: "Detecta los primeros signos de un posible embarazo.",
    contenido: "Las primeras señales de embarazo suelen incluir retraso menstrual, sensibilidad en los senos, náuseas matutinas, fatiga, cambios de humor y aumento de la frecuencia urinaria. Estos síntomas pueden aparecer tan pronto como una semana después de la concepción. Un test de embarazo casero puede confirmar tus sospechas a partir del primer día de retraso menstrual.",
    imagen: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: 3,
    categoria: "Sexo",
    titulo: "Nueve buenos consejos para mejorar tu vida sexual",
    descripcionCorta: "Mejora tu intimidad con estos consejos prácticos.",
    contenido: "1. Comunica tus deseos y límites. 2. Explora nuevas fantasías juntos. 3. Dedica tiempo a los preliminares. 4. Usa lubricante para mayor comodidad. 5. Practica la atención plena durante el sexo. 6. Experimenta con diferentes posiciones. 7. Incorpora juguetes si ambos están de acuerdo. 8. Cuida tu salud física para mejorar la resistencia. 9. Mantén expectativas realistas sobre la intimidad.",
    imagen: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: 4,
    categoria: "Sexo",
    titulo: "Domina tu orgasmo",
    descripcionCorta: "Aprende a conocer y disfrutar mejor tu cuerpo.",
    contenido: "Conocer tu propio cuerpo es fundamental para disfrutar plenamente de tu sexualidad. Dedica tiempo a explorar qué te gusta mediante la masturbación, identifica tus zonas erógenas más sensibles y comunica estas preferencias a tu pareja. La relajación, la respiración consciente y eliminar las distracciones pueden ayudarte a estar más presente durante las relaciones sexuales, facilitando alcanzar el orgasmo.",
    imagen: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=300",
  },
];

// Categorías para los iconos de navegación superior
const categorias = [
  { id: "embarazo", nombre: "¿Estoy embarazada?", icono: Baby },
  { id: "orgasmo", nombre: "Orgasmos y placer", icono: Heart },
  { id: "flujo", nombre: "Flujo vaginal", icono: MessageSquare },
];

const ConsejosPage = () => {
  const [favoritos, setFavoritos] = useState<number[]>([]);
  const [consejoSeleccionado, setConsejoSeleccionado] = useState<Consejo | null>(null);
  const [categoriaActiva, setCategoriaActiva] = useState<string>("todos");

  // Función para alternar un consejo como favorito
  const toggleFavorito = (id: number) => {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter((favId) => favId !== id));
    } else {
      setFavoritos([...favoritos, id]);
    }
  };

  // Filtrar consejos según la categoría seleccionada
  const consejosFiltrados = categoriaActiva === "favoritos"
    ? consejosData.filter(consejo => favoritos.includes(consejo.id))
    : categoriaActiva === "todos"
      ? consejosData
      : consejosData.filter(consejo => {
          const categoriaLowerCase = consejo.categoria.toLowerCase();
          return categoriaLowerCase.includes(categoriaActiva.toLowerCase());
        });

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar standard */}
      <Navbar />

      <div className="pt-6 pb-20">
        {/* Navegación por categorías */}
        <div className="luna-container px-4 pt-4 pb-6">
          <div className="flex justify-between gap-2 items-center">
            {categorias.map((categoria) => (
              <div 
                key={categoria.id}
                onClick={() => setCategoriaActiva(categoria.id)}
                className="flex flex-col items-center cursor-pointer w-1/3"
              >
                <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center mb-2 ${
                  categoriaActiva === categoria.id ? "border-luna-purple" : "border-gray-300"
                }`}>
                  <categoria.icono size={24} className={categoriaActiva === categoria.id ? "text-luna-purple" : "text-gray-600"} />
                </div>
                <p className="text-xs text-center font-medium">
                  {categoria.nombre}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pestaña principal para mostrar todos/favoritos */}
        <div className="luna-container px-4">
          <Tabs defaultValue="todos" className="w-full" value={categoriaActiva === "favoritos" ? "favoritos" : "todos"}>
            <TabsList className="w-full grid grid-cols-2 mb-6">
              <TabsTrigger 
                value="todos" 
                onClick={() => setCategoriaActiva("todos")}
                className={categoriaActiva !== "favoritos" ? "text-luna-purple font-medium" : ""}
              >
                Todos los consejos
              </TabsTrigger>
              <TabsTrigger 
                value="favoritos" 
                onClick={() => setCategoriaActiva("favoritos")}
                className={categoriaActiva === "favoritos" ? "text-luna-purple font-medium" : ""}
              >
                Mis favoritos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="todos" className="space-y-6">
              {/* Sección de consejos por categoría - Salud reproductiva */}
              <div>
                <h2 className="text-xl font-bold mb-4">Aspectos básicos de salud reproductiva</h2>
                <div className="grid grid-cols-3 gap-3">
                  {consejosData
                    .filter(consejo => consejo.categoria === "Salud reproductiva")
                    .map(consejo => (
                      <ConsejoCard 
                        key={consejo.id} 
                        consejo={consejo} 
                        esFavorito={favoritos.includes(consejo.id)}
                        onToggleFavorito={() => toggleFavorito(consejo.id)}
                        onClick={() => setConsejoSeleccionado(consejo)}
                      />
                    ))
                  }
                </div>
              </div>

              {/* Sección de consejos por categoría - Sexo */}
              <div>
                <h2 className="text-xl font-bold mb-4">Sexo</h2>
                <div className="grid grid-cols-3 gap-3">
                  {consejosData
                    .filter(consejo => consejo.categoria === "Sexo")
                    .map(consejo => (
                      <ConsejoCard 
                        key={consejo.id} 
                        consejo={consejo} 
                        esFavorito={favoritos.includes(consejo.id)}
                        onToggleFavorito={() => toggleFavorito(consejo.id)}
                        onClick={() => setConsejoSeleccionado(consejo)}
                      />
                    ))
                  }
                </div>
              </div>
            </TabsContent>

            <TabsContent value="favoritos" className="space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-4">Mis consejos favoritos</h2>
                {favoritos.length === 0 ? (
                  <div className="text-center py-8">
                    <Bookmark size={36} className="mx-auto text-gray-400 mb-2" />
                    <p className="text-gray-500">Aún no tienes consejos favoritos</p>
                    <p className="text-gray-500 text-sm mt-1">Agrega consejos a favoritos para acceder rápidamente a ellos</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-3">
                    {consejosData
                      .filter(consejo => favoritos.includes(consejo.id))
                      .map(consejo => (
                        <ConsejoCard 
                          key={consejo.id} 
                          consejo={consejo} 
                          esFavorito={true}
                          onToggleFavorito={() => toggleFavorito(consejo.id)}
                          onClick={() => setConsejoSeleccionado(consejo)}
                        />
                      ))
                    }
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Modal de detalle de consejo */}
        {consejoSeleccionado && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-auto">
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-xl font-semibold">{consejoSeleccionado.titulo}</h2>
                <button 
                  onClick={() => setConsejoSeleccionado(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  &times;
                </button>
              </div>
              <div className="p-4">
                <img 
                  src={consejoSeleccionado.imagen} 
                  alt={consejoSeleccionado.titulo}
                  className="w-full h-48 object-cover rounded-lg mb-4" 
                />
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">{consejoSeleccionado.categoria}</span>
                  <button 
                    onClick={() => toggleFavorito(consejoSeleccionado.id)}
                    className="text-luna-purple"
                  >
                    {favoritos.includes(consejoSeleccionado.id) ? (
                      <BookmarkCheck size={20} />
                    ) : (
                      <Bookmark size={20} />
                    )}
                  </button>
                </div>
                <p className="text-gray-800 whitespace-pre-line">{consejoSeleccionado.contenido}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

// Componente para tarjetas de consejos
interface ConsejoCardProps {
  consejo: Consejo;
  esFavorito: boolean;
  onToggleFavorito: () => void;
  onClick: () => void;
}

const ConsejoCard = ({ consejo, esFavorito, onToggleFavorito, onClick }: ConsejoCardProps) => {
  return (
    <Card className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow" onClick={onClick}>
      <CardContent className="p-0 relative">
        <img 
          src={consejo.imagen} 
          alt={consejo.titulo}
          className="w-full h-28 object-cover" 
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2">
          <h3 className="font-bold text-sm line-clamp-1">{consejo.titulo}</h3>
        </div>
        <button 
          className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorito();
          }}
        >
          {esFavorito ? (
            <BookmarkCheck size={14} className="text-luna-purple" />
          ) : (
            <Bookmark size={14} className="text-gray-600" />
          )}
        </button>
      </CardContent>
    </Card>
  );
};

export default ConsejosPage;
