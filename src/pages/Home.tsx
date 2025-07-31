import Accordion from "../components/Accordion";
import Header from "../components/Header";
import {MarqueeFrases} from '../components/Marquee'
import ShiftControl from "@/components/Integrantes";
import Services from "../components/Services";
import Mapa from '../components/Mapa';

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Header />
      <MarqueeFrases />
      <Services id='servicios'/>
      <ShiftControl id='integrantes'/>
      <Mapa id='ubicacion'/>
      <Accordion id='consultas' />
    </div>
  );
}
