import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 text-sm py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Redes sociales */}
          <div className="flex flex-col h-full justify-start">
            <h3 className="text-lg font-bold mb-2 text-gray-900">Redes sociales</h3>
            <div className="flex space-x-3">
              <a href="#" aria-label="Facebook" className="bg-gray-200 hover:bg-blue-600 p-2 rounded-lg transition-colors text-gray-700 hover:text-white">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="bg-gray-200 hover:bg-blue-600 p-2 rounded-lg transition-colors text-gray-700 hover:text-white">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Información de contacto */}
          <div className="flex flex-col h-full justify-start">
            <h3 className="text-lg font-bold mb-2 text-gray-900">Información de contacto</h3>
            <div className="space-y-0.5">
              <div className="flex items-center pb-2">
                <Mail className="w-4 h-4 mr-2 text-blue-600" />
                <span className="font-semibold mr-2">Email:</span>
                <span>pazlego3capital@juslarioja.gov.ar</span>
              </div>
              <div className="flex items-center pb-2">
                <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                <span className="font-semibold mr-2">Ubicación:</span>
                <span>Edificio Cepar Sur, Ortiz de Ocampo 2247</span>
              </div>
            </div>
            <div className="mt-1 flex items-center">
              <Clock className="w-4 h-4 mr-2 text-blue-600" />
              <span className="font-semibold mr-2">Horario de atención:</span>
              <span className="leading-tight">Lunes a viernes: 7:00 a 13:00</span>
            </div>
          </div>

          {/* Formulario */}
          <div className="space-y-2 flex flex-col h-full justify-start">
            <h3 className="text-lg font-bold mb-2 text-gray-900">¡Escribinos!</h3>
            <p className="mb-4 text-gray-700">Dejá tus datos y nos pondremos en contacto con vos.</p>
            <form 
              action="https://formsubmit.co/pazlego3capital@juslarioja.gov.ar" 
              method="POST"
              target="_blank"
            >
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                className="w-full p-2 mb-3 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 mb-3 border border-gray-300 rounded-md"
              />
              <input
                type="tel"
                name="telefono"
                placeholder="Teléfono"
                className="w-full p-2 mb-3 border border-gray-300 rounded-md"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>

        {/* Línea inferior con enlaces */}
        <div className="flex flex-wrap justify-between border-t border-gray-300 mt-6 pt-4">
          <p className="text-gray-500 text-sm">
            Todos los derechos reservados 2025 &copy; Juzgado de Paz Lego N°3
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="text-gray-700 hover:text-blue-600 text-xs transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 text-xs transition-colors">
              Términos de Servicio
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 text-xs transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
