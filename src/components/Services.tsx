import img1 from '../assets/f3.jpg';
import img2 from '../assets/f4.jpg';
import img3 from '../assets/f5.jpg';
import img4 from '../assets/f6.jpg';

interface ServicesProps {
    id?: string;  
  }
  

//Ponemos el id para el nabvar
const Services = ({id}: ServicesProps) => {
    const services = [
        {
            name: "Resolución de Conflictos Civiles y Comerciales",
            img: img1,
            text:
                "\"Atendemos asuntos contenciosos y de jurisdicción en materia civil y comercial, brindando soluciones efectivas para casos cuyo monto no supere los $500.000.\"",
          
        },
        {
            name: "Certificación de Firmas y Copias",
            img: img2,
            text:
                "\"Autenticamos firmas y copias de documentos para garantizar su validez legal.\"",
        },
        {
            name: "Declaraciones Juradas",
            img: img3,
            text:
                "\"Recepción y certificación de declaraciones juradas para diversos trámites legales.\"",     
        },
        {
            name: "Autorizaciones de Licencias de Conducir",
            img: img4,
            text:
                "\"Realizamos autorizaciones de licencias de conducir para adolescentes de 16 a 17 años.\"",     
        },
    ];

    return (
        <section id={id} className="bg-primary max-w-full py-10 px-4" >
            <article className='max-w-full mx-auto mt-6 mb-10 px-4 text-center'>     
                <div className="flex flex-col gap-3 items-center pb-4">          
                    <h2 className="text-4xl md:text-5xl font-bold" data-aos="zoom-in-up" data-aos-duration="800"> Servicios que ofrecemos </h2>
                    <p className="max-w-md " data-aos="zoom-in-up" data-aos-duration="800">
                        Nuestro compromiso es servir a la comunidad. Estamos aqui para escucharte, asesorarte y acompañarte en tus tramites.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                    {services.map((services, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl shadow-lg bg-gray-50 transition-transform transform hover:scale-105 hover:shadow-2xl"
                        >
                            <img
                                src={services.img}
                                alt={`Logo de ${services.name}`}
                                className="w-60 h-40 mx-auto mb-4 object-contain"
                            />
                            <h3 className="text-h3 font-sans font-bold text-black-80">
                                {services.name}
                            </h3>
                            <p className="text-gray-600 italic mt-4">{services.text}</p>
                        
                        </div>
                    ))}
                </div>
            </article>
        </section>
    );
};

export default Services;