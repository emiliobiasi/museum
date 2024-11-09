import { Book } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function VisitaGuiadaSection() {
  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    window.scrollTo(0, 0); // Rola a página para o topo
    navigate(path);
  };

  return (
    <section className="pt-12 bg-[#ffffff]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          <div className="w-full ">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#000000] rounded-full p-2">
                  <Book className="w-8 h-8 text-[#ffffff]" />
                </div>
                <h2 className="text-3xl font-bold text-[#000000]">
                  O Museu de História Natural de Campinas
                </h2>
              </div>
              <hr className="border-t-2 border-[#f1c40f] my-4" />
              <p className="text-[#4a4a4a] font-medium">
                O Museu de História Natural, um dos cartões postais da cidade,
                integra o Aquário e a Casa dos Animais Interessantes. Em sua
                visita, você descobrirá a riqueza dos fósseis, os biomas
                brasileiros (Amazônia, Mata Atlântica, Pantanal, Cerrado,
                Caatinga e Pampa), a diversidade dos vertebrados, as espécies em
                extinção, botânica, insetos e a biodiversidade de São Paulo.
                Confira os áudios da visita guiada para conhecer ainda mais
                sobre o acervo!
              </p>
            </div>
            <div>
              <button
                className="bg-[#f1c40f] text-[#000000] font-bold py-2 px-4 rounded hover:bg-[#f39c12] transition-colors"
                onClick={() => handleNavigation("/visita-guiada")}
              >
                ESCUTAR A VISITA GUIADA
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
