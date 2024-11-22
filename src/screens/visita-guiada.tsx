import Image from "@/assets/images/Guiada.jpg";
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

      {/* Visita Guiada */}
      <div className="bg-white pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-black leading-relaxed space-y-8">
        <div>
          <p className="text-gray-700">
            Escute nossa visita guiada, com elementos de audiodescrição, sobre
            os <strong>6 biomas brasileiros</strong> e aprenda mais sobre os
            animais presentes em cada um!
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
