
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import CycleTracker from "@/components/CycleTracker";
import SymptomLogger from "@/components/SymptomLogger";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CycleTracker />
        <SymptomLogger />

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="luna-container">
            <div className="text-center mb-12">
              <h2 className="luna-heading mb-4">Características Principales</h2>
              <p className="luna-subheading max-w-3xl mx-auto">
                Todo lo que necesitas para cuidar tu salud menstrual
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="luna-card text-center p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-luna-light-purple">
                  <div className="w-8 h-8 rounded-full bg-luna-purple"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-luna-purple">Seguimiento de Ciclo</h3>
                <p className="text-foreground/70">
                  Registra tu periodo, síntomas y estado de ánimo para obtener predicciones personalizadas.
                </p>
              </div>

              <div className="luna-card text-center p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-luna-light-pink">
                  <div className="w-8 h-8 rounded-full bg-luna-pink"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-luna-purple">Informes Personalizados</h3>
                <p className="text-foreground/70">
                  Recibe análisis detallados sobre tus patrones y ciclo menstrual.
                </p>
              </div>

              <div className="luna-card text-center p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-luna-light-blue">
                  <div className="w-8 h-8 rounded-full bg-luna-blue"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-luna-purple">Consultas Médicas</h3>
                <p className="text-foreground/70">
                  Conecta con profesionales de salud especializados cuando lo necesites.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
