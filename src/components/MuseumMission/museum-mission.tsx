import { Book, Compass } from "lucide-react";
import Imagem from "@/assets/images/louvre-mission.png";

export function MuseumMission() {
  return (
    <section className="py-12 bg-[#ffffff]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          <div className="w-full lg:w-2/5">
            <div className="rounded-lg overflow-hidden shadow-lg h-full">
              <img
                src={Imagem}
                alt="Museu de História Natural de Campinas"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-3/5 bg-[#e9c46a] rounded-lg p-8 shadow-lg">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#000000] rounded-full p-2">
                  <Book className="w-8 h-8 text-[#e9c46a]" />
                </div>
                <h2 className="text-3xl font-bold text-[#000000]">SOBRE NÓS</h2>
              </div>
              <p className="text-[#000000] font-medium">
                Fundado em 1938, o Museu de História Natural de Campinas tem
                desempenhado um papel vital na preservação da fauna brasileira e
                na educação ambiental da cidade. Desde sua criação, o museu
                passou por muitas transformações, sempre com o objetivo de
                compartilhar o conhecimento científico com a comunidade e manter
                um acervo valioso de espécimes.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#000000] rounded-full p-2">
                  <Compass className="w-8 h-8 text-[#e9c46a]" />
                </div>
                <h3 className="text-3xl font-bold text-[#000000]">
                  NOSSA MISSÃO
                </h3>
              </div>
              <p className="text-[#000000] font-medium">
                Potencializar ações de educação ambiental para as mudanças
                culturais e sociais, apoiar a capacitação de recursos humanos
                para conservar o meio e promover ações de parceria com
                cooperação entre órgãos governamentais, instituições e
                associações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
