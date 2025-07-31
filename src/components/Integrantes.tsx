import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { useState, useEffect } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import mercedes1 from '../assets/f12.jpeg';
import mercedes2 from '../assets/m2.png';
import mercedes3 from '../assets/f10.jpeg';
import mercedes4 from '../assets/f7.jpeg';

interface IntegrantesProps {
    id?: string;
  }
  

const ShiftControl = ({id}: IntegrantesProps) => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    const handleSelect = (index: number) => {
        if (api) {
            api.scrollTo(index);
        }
    };

    return (
        <div id={id} className="bg-primary pt-12 pb-14">
            <h3 className="font-roboto text-center text-p md:text-p-desktop mb-3 text-gray-800" data-aos="zoom-in-up" data-aos-duration="800"> Personas comprometidas con la justicia comunitaria </h3>
            <h2 className="font-poppins font-bold text-center text-3xl md:text-h2-desktop mb-8" data-aos="zoom-in-up" data-aos-duration="800"> ¿Quiénes lo integran? </h2>
            <Carousel
                setApi={setApi}
                plugins={[
                    Autoplay({
                        delay: 2500,
                        stopOnInteraction: false,
                    }),
                    Fade(),
                ]}
                opts={{
                    loop: true,
                }}
                className="mb-8"
                 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200"
            >
                <CarouselContent>
                    <CarouselItem>
                        <div className="flex justify-center items-center px-4">
                            <div className="flex flex-col md:flex-row max-w-[791px] w-full">
                                <div className="md:flex md:flex-row w-full md:shadow-2xl md:rounded-xl overflow-hidden">
                                    <div className="w-full md:w-[367px] h-[300px] md:h-[347px] rounded-xl shadow-xl overflow-hidden md:rounded-none md:shadow-none mb-4 md:mb-0">
                                        <img
                                            src={mercedes2}
                                            alt="Buena gestión de turnos"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex bg-secondary justify-center items-center w-full mx-auto md:w-[424px] p-10 md:p-8 rounded-xl shadow-xl md:rounded-none md:shadow-none -mt-12 md:mt-0 relative z-10 min-h-[320px] md:min-h-0">
                                        <div className="mt-3">
                                            <p className="font-roboto text-center text-base md:text-p-desktop mb-7 leading-tight">"Mi compromiso es garantizar que cada persona en nuestra comunidad tenga acceso a la justicia de manera rápida, cercana y efectiva."</p>  
                                            <p className="font-roboto text-center text-base md:text-p-desktop mb-4">Mercedes Negri</p>                                          
                                            <p className="font-roboto text-center text-p md:text-small-desktop"> Jueza de Paz Lego</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="flex justify-center items-center px-4">
                            <div className="flex flex-col md:flex-row max-w-[791px] w-full">
                                <div className="md:flex md:flex-row w-full md:shadow-2xl md:rounded-xl overflow-hidden">
                                    <div className="w-full md:w-[367px] h-[300px] md:h-[347px] rounded-xl shadow-xl overflow-hidden md:rounded-none md:shadow-none mb-4 md:mb-0">
                                        <img
                                            src={mercedes1}
                                            alt="Buena gestión de turnos"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex bg-secondary justify-center items-center w-full mx-auto md:w-[424px] p-10 md:p-8 rounded-xl shadow-xl md:rounded-none md:shadow-none -mt-12 md:mt-0 relative z-10 min-h-[320px] md:min-h-0" >
                                        <div className="mt-3">
                                            <p className="font-roboto text-center text-base md:text-p-desktop mb-7 leading-tight">"Mi compromiso es garantizar que cada persona en nuestra comunidad tenga acceso a la justicia de manera rápida, cercana y efectiva."</p>  
                                            <p className="font-roboto text-center text-base md:text-p-desktop mb-4">Mercedes Negri</p>                                          
                                            <p className="font-roboto text-center text-p md:text-small-desktop"> Jueza de Paz Lego</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="flex justify-center items-center px-4">
                            <div className="flex flex-col md:flex-row max-w-[791px] w-full">
                                <div className="md:flex md:flex-row w-full md:shadow-2xl md:rounded-xl overflow-hidden">
                                    <div className="w-full md:w-[367px] h-[300px] md:h-[347px] rounded-xl shadow-xl overflow-hidden md:rounded-none md:shadow-none mb-4 md:mb-0">
                                        <img
                                            src={mercedes3}
                                            alt="Buena gestión de turnos"
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                    <div className="flex bg-secondary justify-center items-center w-full mx-auto md:w-[424px] p-10 md:p-8 rounded-xl shadow-xl md:rounded-none md:shadow-none -mt-12 md:mt-0 relative z-10 min-h-[320px] md:min-h-0">
                                        <div className="mt-3">
                                            <p className="font-roboto text-center text-base md:text-p-desktop mb-7 leading-tight">"Mi compromiso es garantizar que cada persona en nuestra comunidad tenga acceso a la justicia de manera rápida, cercana y efectiva."</p>  
                                            <p className="font-roboto text-center text-base md:text-p-desktop mb-4">Mercedes Negri</p>                                          
                                            <p className="font-roboto text-center text-p md:text-small-desktop"> Jueza de Paz Lego</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="flex justify-center items-center px-4">
                            <div className="flex flex-col md:flex-row max-w-[791px] w-full">
                                <div className="md:flex md:flex-row w-full md:shadow-2xl md:rounded-xl overflow-hidden">
                                    <div className="w-full md:w-[367px] h-[300px] md:h-[347px] rounded-xl shadow-xl overflow-hidden md:rounded-none md:shadow-none mb-4 md:mb-0">
                                        <img
                                            src={mercedes4}
                                            alt="Buena gestión de turnos"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex bg-secondary justify-center items-center w-full mx-auto md:w-[424px] p-10 md:p-8 rounded-xl shadow-xl md:rounded-none md:shadow-none -mt-12 md:mt-0 relative z-10 min-h-[320px] md:min-h-0">
                                        <div className="mt-3">
                                            <p className="font-roboto text-center text-base md:text-p-desktop mb-7 leading-tight">"Mi compromiso es garantizar que cada persona en nuestra comunidad tenga acceso a la justicia de manera rápida, cercana y efectiva."</p>  
                                            <p className="font-roboto text-center text-base md:text-p-desktop mb-4">Mercedes Negri</p>                                          
                                            <p className="font-roboto text-center text-p md:text-small-desktop"> Jueza de Paz Lego</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
            <div className="flex justify-center space-x-2 mt-4">
                {[0, 1, 2, 3].map((index) => (
                    <button
                        key={index}
                        onClick={() => handleSelect(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${current === index
                            ? 'bg-white border border-dark-gray'
                            : 'bg-dark-gray'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ShiftControl;