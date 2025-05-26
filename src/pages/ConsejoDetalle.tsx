
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Bookmark, BookmarkCheck } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

// Tipo para los consejos
interface Consejo {
  id: number;
  categoria: string;
  titulo: string;
  descripcionCorta: string;
  contenido: string;
  imagen: string;
}

// Datos de muestra para los consejos (mismos datos que en ConsejosPage)
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

const ConsejoDetallePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [favoritos, setFavoritos] = useState<number[]>([]);

  // Encontrar el consejo por ID
  const consejo = consejosData.find(c => c.id === parseInt(id || "0"));

  // Si no se encuentra el consejo, mostrar error
  if (!consejo) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="luna-container px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Consejo no encontrado</h1>
            <Link to="/consejos">
              <Button className="luna-button-primary">
                Volver a consejos
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Función para alternar favorito
  const toggleFavorito = (consejoId: number) => {
    if (favoritos.includes(consejoId)) {
      setFavoritos(favoritos.filter((favId) => favId !== consejoId));
    } else {
      setFavoritos([...favoritos, consejoId]);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="luna-container px-4 py-6">
        {/* Botón de volver */}
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/consejos")}
            className="flex items-center gap-2 text-luna-purple hover:text-luna-purple/80"
          >
            <ArrowLeft size={20} />
            Volver a consejos
          </Button>
        </div>

        {/* Contenido del consejo */}
        <div className="max-w-4xl mx-auto">
          {/* Imagen principal */}
          <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden mb-6">
            <img 
              src={consejo.imagen} 
              alt={consejo.titulo}
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Encabezado */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 bg-luna-light-purple/20 text-luna-purple rounded-full text-sm font-medium mb-3">
                {consejo.categoria}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {consejo.titulo}
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                {consejo.descripcionCorta}
              </p>
            </div>
            
            {/* Botón de favorito */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => toggleFavorito(consejo.id)}
              className="ml-4 border-luna-purple text-luna-purple hover:bg-luna-purple hover:text-white"
            >
              {favoritos.includes(consejo.id) ? (
                <BookmarkCheck size={20} />
              ) : (
                <Bookmark size={20} />
              )}
            </Button>
          </div>

          {/* Contenido del artículo */}
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-800 leading-relaxed text-lg whitespace-pre-line">
              {consejo.contenido}
            </div>
          </div>

          {/* Botón de navegación inferior */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link to="/consejos">
              <Button className="luna-button-primary">
                Ver más consejos
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ConsejoDetallePage;
