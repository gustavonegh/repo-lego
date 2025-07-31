interface MapaProps {
  id?: string;
}

export default function Mapa({id}: MapaProps) {
  return (
    <div id={id} className="w-full max-w-3xl mx-auto px-10 py-16">
      <div className="text-center mb-6" data-aos="zoom-in-up" data-aos-duration="800">
        <h2 className="text-4xl md:text-5xl font-bold"> Nuestra Ubicación </h2>
        <div className="flex flex-col gap-2 text-sm text-gray-800 mt-3">
          <p>Encuéntranos en el Edificio del Cepar Sur, Ortiz de Ocampo 2247, La Rioja.</p>
          <p>Nuestro horario de atención es de lunes a viernes, de 7:00 a 13:00 horas.</p>
        </div>
      </div>
      <div className="w-full h-96" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
        {/* iframe: Es el elemento de GoogleMaps que carga el mapa */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.679446771314!2d-66.86205232422417!3d-29.43816390342806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9427d97e4629c275%3A0xd561b48f0fa3d25b!2sCEPAR%20Sur!5e0!3m2!1ses!2sar!4v1745363942153!5m2!1ses!2sar"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          // Permite que el iframe se muestre en pantalla completa si el usuario lo solicita
          allowFullScreen={true} 
          // Se carga solo cuando el usuario va a esa parte
          loading="lazy"
          // Controla cómo se envía la información del referente al servidor iframe
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}


