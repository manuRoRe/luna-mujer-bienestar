
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Mail } from "lucide-react";

const EmailVerification = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-luna-light-purple/30 to-white p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-luna-purple to-luna-pink flex items-center justify-center shadow-lg">
            <div className="w-10 h-10 rounded-full bg-white"></div>
          </div>
        </div>

        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-luna-purple">Verifica tu Email</h1>
          <p className="text-foreground/70 text-lg">
            Te hemos enviado un enlace de verificación a tu correo electrónico
          </p>
        </div>

        {/* Illustration */}
        <div className="my-8 p-8 bg-white rounded-2xl shadow-md border border-luna-light-purple/30">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Mail className="w-16 h-16 text-luna-purple" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-luna-pink rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-luna-purple" />
              </div>
            </div>
          </div>
          <p className="text-foreground/60">
            Revisa tu bandeja de entrada y haz clic en el enlace para activar tu cuenta
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-4">
          <Button className="luna-button-primary w-full">
            Reenviar Email de Verificación
          </Button>
          
          <p className="text-sm text-foreground/60">
            ¿No recibiste el email? Revisa tu carpeta de spam
          </p>
          
          <Link to="/login" className="block">
            <Button variant="outline" className="w-full border-luna-purple text-luna-purple hover:bg-luna-light-purple/20">
              Volver al Inicio de Sesión
            </Button>
          </Link>
        </div>

        {/* Footer */}
        <div className="pt-8">
          <p className="text-xs text-foreground/50">
            Si tienes problemas, contacta con nuestro soporte
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
