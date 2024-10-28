import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function MuseumTopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <header className="bg-white text-black border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Nome do Museu */}
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            <span className="text-2xl font-bold text-[#ffcd01]">
              Nome do Museu
            </span>
          </div>

          {/* Navegação para telas maiores */}
          <nav className="hidden md:flex space-x-4">
            <Button
              variant="ghost"
              className="text-black hover:text-[#ffcd01] font-semibold transition-colors duration-300"
              onClick={() => handleNavigation("/o-museu")}
            >
              O MUSEU
            </Button>
            <Button
              variant="ghost"
              className="text-black hover:text-[#ffcd01] font-semibold transition-colors duration-300"
              onClick={() => handleNavigation("/visite")}
            >
              VISITE
            </Button>
            <Button
              variant="ghost"
              className="text-black hover:text-[#ffcd01] font-semibold transition-colors duration-300"
              onClick={() => handleNavigation("/visita-guiada")}
            >
              VISITA GUIADA
            </Button>
            <Button
              variant="ghost"
              className="text-black hover:text-[#ffcd01] font-semibold transition-colors duration-300"
              onClick={() => handleNavigation("/contato")}
            >
              CONTATO
            </Button>
          </nav>

          {/* Ícone de menu para telas menores */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              className="text-black hover:text-[#ffcd01]"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Menu para telas menores */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          <Button
            variant="ghost"
            className="w-full text-left text-black hover:text-[#ffcd01] font-semibold transition-colors duration-300"
            onClick={() => handleNavigation("/o-museu")}
          >
            O MUSEU
          </Button>
          <Button
            variant="ghost"
            className="w-full text-left text-black hover:text-[#ffcd01] font-semibold transition-colors duration-300"
            onClick={() => handleNavigation("/visite")}
          >
            VISITE
          </Button>
          <Button
            variant="ghost"
            className="w-full text-left text-black hover:text-[#ffcd01] font-semibold transition-colors duration-300"
            onClick={() => handleNavigation("/visita-guiada")}
          >
            VISITA GUIADA
          </Button>
          <Button
            variant="ghost"
            className="w-full text-left text-black hover:text-[#ffcd01] font-semibold transition-colors duration-300"
            onClick={() => handleNavigation("/contato")}
          >
            CONTATO
          </Button>
        </div>
      </div>
    </header>
  );
}
