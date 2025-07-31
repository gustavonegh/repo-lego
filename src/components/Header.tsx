import { useState, useEffect } from "react";
import '../index.css'
//biblioteca embla-carousel
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import banner1 from'../assets/b2.jpg';
import banner2 from '../assets/f11.jpeg';





const Header = () => {

  const [api, setApi] = useState<CarouselApi>();                                              //api = es un objeto que proporciona métodos y propiedades que permiten interactuar con el carrusel,
  const [current, setCurrent] = useState(0);


  //selecciona el indice del elemento y lo actualiza.
  useEffect(() => {
    if (!api) return;

    api.on("select", () => {                                                                    // api.on = es API del carrusel y está diseñado para registrar listeners para eventos específicos.
      setCurrent(api.selectedScrollSnap())                                                     //selectedScrollSnap() = es un método del objeto api del carrusel que devuelve el índice del elemento actualmente seleccionado.                         
    })
  }, [api]);

  //permite desplazar el carrusel a un elemento específico basado en su índice.
  const handleSelect = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  }

  return (
    <>
      {/* Carousel = configura y renderiza */}
      <Carousel  
        setApi={setApi}
        plugins={[
          Autoplay({ delay: 4000, stopOnInteraction: false }),
          Fade()
        ]}
        opts={{ loop: true }}
        className='mb-8'
      >
        <CarouselContent> {/* contenedor para los elementos del carrusel */}
          <CarouselItem>
            <div className="relative flex flex-col items-start justify-center w-full h-[650px] md:h-[540px]">
              {/* Contenedor de texto */}
              <div className="max-w-md text-left relative z-20 p-7 md:p-0 md:ml-20">            
                <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
                  Juzgado de Paz Lego N°3
                </h1>
                <p className="md:text-gray-800 mb-4">
                  Bienvenidos al Juzgado de Paz Lego N°3. Aqui trabajamos para garantizar el acceso a la justicia para todos y todas. Estamos ubicados en el CEPAR Sur de la Rioja.
                </p>
                <button
                  className="mt-2 px-6 py-2 rounded-full bg-purple-700 text-white font-semibold shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
                  onClick={() => window.location.href = '#ubicacion'}
                >
                  Visítanos
                </button>
              </div>
              {/* Gradiente de tailwind, puedes especificar valores personalizados rgba con []. */}
              <div className=" absolute inset-0 w-full h-full bg-gradient-to-r from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0.2)] md:from-[rgba(255,255,255,0.8)] md:to-transparent z-10"></div>              
              <img src={banner1} alt="Banner 3" className="absolute inset-0 w-full h-full object-cover object-position-mobile-3" />
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="relative flex flex-col items-start justify-center w-full h-[650px] md:h-[540px]">
              {/* Contenedor de texto */}
              <div className="max-w-md text-left relative z-20 p-7 md:p-0 md:ml-20">            
                <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
                  Juzgado de Paz Lego N°3
                </h1>
                <p className="md:text-gray-800 mb-4">
                  Bienvenidos al Juzgado de Paz Lego N°3. Aqui trabajamos para garantizar el acceso a la justicia para todos y todas. Estamos ubicados en el CEPAR Sur de la Rioja.
                </p>
                <button
                  className="mt-2 px-6 py-2 rounded-full bg-purple-700 text-white font-semibold shadow-md hover:bg-purple-800 transition-colors duration-200"
                  onClick={() => window.location.href = '#ubicacion'}
                >
                  Visítanos
                </button>
              </div>
              {/* Gradiente de tailwind, puedes especificar valores personalizados rgba con []. */}
              <div className=" absolute inset-0 w-full h-full bg-gradient-to-r from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0.2)] md:from-[rgba(255,255,255,0.8)] md:to-transparent z-10"></div>              
              <img src={banner2} alt="Banner 3" className="absolute inset-0 w-full h-full object-cover object-position-mobile-3" />
            </div>
          </CarouselItem>


        </CarouselContent>

        {/* Botones de navegación del carrusel */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex justify-center space-x-2">
          {[0, 1].map((index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${current === index ? 'bg-white border border-dark-gray' : 'bg-dark-gray'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </>
  );
};

export default Header;
