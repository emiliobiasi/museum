import BannerImage from "@/assets/images/louvre-interno.png";

export function MuseumBanner() {
  return (
    <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
      <img
        src={BannerImage}
        alt="Fachada do Museu de História Natural da Campinas"
        className="absolute inset-0 z-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="relative z-20 h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-2xl">
          Bem-vindo ao Museu de História Natural da Campinas
        </h1>
      </div>
    </div>
  );
}
