import Marquee from '@/components/ui/marquee'
//import Clinica1 from '../assets/Cllinica1.png';
//import Clinica2 from '../assets/Cllinica2.png';
import img1 from '../assets/l1.jpg'
//import img1 from '../assets/c1.jpg';
//import img2 from '../assets/c2.jpg';




export function MarqueeFrases() {

  return (
    <section className="relative flex h-[260px] w-full flex-col items-center justify-center overflow-hidden bg-gray-50 ">
      <div className="flex flex-col items-center text-center max-w-96 md:max-w-none px-2 ">
        <p className="text-p md:text-p-desktop mb-3 text-gray-800"> Justicia al Alcance de Todos  </p>
        <h3 className="text-3xl md:text-h2-desktop font-bold mb-6 "> Tu Derecho, Nuestra Prioridad </h3>
      </div>
      
      <Marquee pauseOnHover className="[--duration:20s]">
      <div className="flex items-center gap-4 mx-8">
        <img src={img1} alt="CEPAR Sur" className="w-16 h-16 object-cover rounded-full" />
        <p className="text-lg"> Comprometidos con la Justicia Comunitaria en La Rioja </p>
      </div>

      <div className="flex items-center gap-4 mx-8">
        <img src={img1} alt="CEPAR Sur" className="w-16 h-16 object-cover rounded-full" />
        <p className="text-lg"> Asesoramiento legal gratuito para resolver tus inquietudes </p>
      </div>

      <div className="flex items-center gap-4 mx-8">
        <img src={img1} alt="CEPAR Sur" className="w-16 h-16 object-cover rounded-full" />
        <p className="text-lg md:text-xl"> Trabajamos para fortalecer la paz y la justicia en tu barrio </p>
      </div>
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </section>
  );
}
