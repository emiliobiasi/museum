import Image from "@/assets/images/louvre-visite.png";
import { FaqAccordion } from "@/components/FAQAccordion/faq-accordion";

export default function Contato() {
  return (
    <div className="w-full">
      {/* Faixa colorida com imagem e título */}
      <div className="bg-[#e9c46a] flex justify-center items-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-end space-y-4 lg:space-y-0 lg:space-x-8 px-4 sm:px-8">
          <img
            src={Image}
            alt="Museu de História Natural de Campinas"
            className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 rounded shadow-lg object-cover transition-transform transform hover:scale-105 duration-300"
          />
          <div className="text-center lg:text-left self-center lg:self-end animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black uppercase leading-none tracking-wider">
              <span className="block">CONTATO</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Texto informativo com animações e seções destacadas */}
      <div className="bg-white py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-black leading-relaxed space-y-8">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold text-[#e76f51]">EMAIL</h2>
          <a
            href="mailto:museuaquario@campinas.sp.gov.br"
            className="text-blue-600 hover:underline"
          >
            museuaquario@campinas.sp.gov.br
          </a>
        </div>

        <div className="space-y-1">
          <h2 className="text-2xl font-semibold text-[#e76f51]">TELEFONE</h2>
          <p className="text-gray-700 font-medium">
            (19) 3295-5850 / (19) 3251-9849
          </p>
        </div>

        <FaqAccordion />
      </div>
    </div>
  );
}
