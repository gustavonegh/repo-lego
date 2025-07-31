import * as Accordions from "@radix-ui/react-accordion";
import { MdChevronRight } from "react-icons/md";

interface AccordionProps {
  id?: string;
}


export default function Accordion({id}: AccordionProps) {
  return (
    <div id={id} className="w-full max-w-3xl mx-auto px-10 pt-16 pb-24">
      <div className="text-center mb-8">
        <p className="text-sm text-gray-800 mb-2">
          Estas son las preguntas frecuentes.
        </p>
        <h2 className="text-4xl md:text-5xl font-bold">¿Aún con dudas?</h2>
      </div>

      <Accordions.Root type="single" collapsible className="space-y-4">
        <AccordionsItem value="item-1" 
          question="¿Cuáles son los trámites que no podemos realizar?">
          No hacemos contratos de locación, boletos de compra-venta, certificado 08. Nada relacionado con compra o venta de viviendas, automotores, juicios sucesorios, juicios desalojos, convenios de familias o menores. Tampoco hacemos autorizaciones para salir del país con menores de edad.
        </AccordionsItem>

        <AccordionsItem
          value="item-2"
          question="¿Qué hacemos y cómo podemos ayudarte con tus trámites?"
        >
          Hacemos licencias de conducir, declaraciones juradas, certificación de firmas-copias, asuntos contenciosos y de jurisdición en materia civil y comercial hasta los 500mil pesos.
        </AccordionsItem>

        <AccordionsItem
          value="item-3"
          question="¿Cuáles son nuestros horarios de atención?"
        >
          Nuestro horario de atención es de lunes a viernes, de 7:00 a 13:00 horas. Estamos aquí para ayudarte con tus trámites y consultas.
        </AccordionsItem>
      </Accordions.Root>
    </div>
  );
}

function AccordionsItem({
  children,
  value,
  question,
}: {
  children: React.ReactNode;
  value: string;
  question: string;
}) {
  return (
    <Accordions.Item value={value} className="border-b border-gray-200">
      <Accordions.Trigger className="group flex w-full items-center justify-between py-4 text-left text-base font-medium transition-all duration-300 ease-in-out hover:text-blue-600">
        {question}
        <MdChevronRight className="h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-90" />
      </Accordions.Trigger>
      <Accordions.Content className="overflow-hidden transition-all duration-300 ease-in-out text-gray-500">
        <div className="pb-4 pt-1 transition-all duration-300 ease-in-out">{children}</div>
      </Accordions.Content>
    </Accordions.Item>
  );
}
