import React, { useState } from "react";

type AudioCardProps = {
  title: string;
  audioSrc: string;
  transcriptionText: string;
};

const AudioCard: React.FC<AudioCardProps> = ({
  title,
  audioSrc,
  transcriptionText,
}) => {
  const [isTranscriptionVisible, setIsTranscriptionVisible] = useState(false);

  const toggleTranscription = () => {
    setIsTranscriptionVisible(!isTranscriptionVisible);
  };

  return (
    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-md">
      {/* Título */}
      <h2 className="text-lg font-semibold mb-3">{title}</h2>

      {/* Player de Áudio */}
      <audio
        controls
        src={audioSrc}
        className="w-full bg-gray-100 rounded-lg mb-4"
      >
        Seu navegador não suporta o elemento de áudio.
      </audio>

      {/* Botão de Transcrição */}
      <button
        onClick={toggleTranscription}
        className="w-full bg-teal-700 text-white font-semibold py-2 rounded-md hover:bg-teal-800 transition-colors"
      >
        TRANSCRIÇÃO DO ÁUDIO
      </button>

      {/* Texto de Transcrição */}
      {isTranscriptionVisible && (
        <div className="mt-4 p-3 bg-gray-50 text-gray-700 rounded-lg border border-gray-200 whitespace-pre-wrap">
          {transcriptionText}
        </div>
      )}
    </div>
  );
};

export default AudioCard;
