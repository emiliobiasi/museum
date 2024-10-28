import Image from "@/assets/images/louvre-o-museu.png";
import AudioCard from "@/components/AudioCard/audio-card";
import audioData from "@/audioData";

export default function VisitaGuiada() {
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
              <span className="block">VISITA</span>
              <span className="block">GUIADA</span>
            </h1>
          </div>
        </div>
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
            Escute nossa visita guiada com elementos de audiodescrição sobre os
            6 biomas brasileiros e aprenda mais sobre os animais presentes em
            cada um!
          </p>
        </div>
      </div>

      {/* Mapeamento dos dados de áudio para exibir os cartões de áudio */}
      <div className="bg-white py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-6">
          {audioData.map((audio, index) => (
            <AudioCard
              key={index}
              title={audio.title}
              audioSrc={audio.audioSrc}
              transcriptionText={audio.transcriptionText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}