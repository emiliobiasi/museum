import Image from "@/assets/images/louvre-o-museu.png";
import { useNavigate } from "react-router-dom";

export default function OMuseu() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    window.scrollTo(0, 0); // Rola a página para o topo
    navigate(path);
  };

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
              <span className="block">NOSSA</span>
              <span className="block">HISTÓRIA</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Texto informativo */}
      <div className="bg-white pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-black leading-relaxed">
        <p className="mb-6">
          Fundado em 1938, o Museu de História Natural de Campinas passou por
          duas grandes revitalizações. Em 1987, foram feitas adequações com base
          num conceito mais moderno de museu de História Natural, numa parceria
          com a Unicamp e patrocínio da Rhodia, passando a dar ênfase à difusão
          de conhecimentos sobre fauna e flora e conservação ambiental, com o
          desenvolvimento de um programa de educação ambiental.
        </p>
        <p className="mb-6">
          Em 2019-2020, foram realizadas intervenções de manutenção do prédio e
          melhorias diversas, com atualização científica de alguns itens e o
          cuidadoso planejamento de novas exposições, num trabalho viabilizado
          pela atuação conjunta dos funcionários do Museu e de profissionais do
          Departamento de Zoologia do Instituto de Biologia da Unicamp.
        </p>
        <p className="font-semibold mt-4">
          Para mais informações e curiosidades sobre a história do museu,
          confira o{" "}
          <a
            href="/path/to/ebook.pdf" // Substitua pelo caminho real do PDF
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            e-book
          </a>
          .
        </p>
      </div>

      {/* Texto informativo com seções de Acervo, Exposições e Visita Guiada */}
      <div className="bg-white py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-black leading-relaxed space-y-8">
        {/* Acervo */}
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold text-[#e76f51]">ACERVO</h2>
          <p className="text-gray-700">
            Atualmente, o acervo é composto por mais de mil peças. Começou na
            própria casa do fundador, Sr. Max Wunsche, na rua Itu n° 290. A
            maioria das primeiras peças do acervo foram capturadas na natureza,
            pois na época a caça era permitida.
          </p>
          <p className="text-gray-700">
            Ao longo do tempo, muitas outras peças foram incorporadas por meio
            de doações de particulares, como a coleção de insetos, minerais e
            fósseis doada pelo espólio do Sr. Alcides Pinheiro, ou provenientes
            de zoológicos e da Polícia Ambiental.
          </p>
          <p className="text-gray-700">
            Vale ressaltar que hoje em dia, nenhum animal é caçado com a
            finalidade específica de figurar em museu!
          </p>
        </div>

        {/* Exposições */}
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold text-[#e76f51]">EXPOSIÇÕES</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Biomas brasileiros</li>
            <li>Fósseis</li>
            <li>Biodiversidade</li>
            <li>O que é espécie</li>
            <li>Extinção</li>
            <li>Árvore da vida</li>
            <li>Insetos</li>
            <li>Vertebrados</li>
            <li>Interações ecológicas</li>
          </ul>
        </div>

        {/* Visita Guiada */}
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold text-[#e76f51]">
            VISITA GUIADA
          </h2>
          <p className="text-gray-700">
            Escute nossa{" "}
            <span
              className="font-bold text-blue-600 cursor-pointer hover:underline"
              onClick={() => handleNavigation("/visita-guiada")}
            >
              visita guiada
            </span>{" "}
            com elementos de audiodescrição sobre os 6 biomas brasileiros e
            aprenda mais sobre os animais presentes em cada um!
          </p>
        </div>
      </div>
    </div>
  );
}
