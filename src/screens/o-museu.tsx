import Image from "@/assets/images/louvre-o-museu.png";

export default function OMuseu() {
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
      <div className="bg-white py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-black leading-relaxed">
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
    </div>
  );
}
