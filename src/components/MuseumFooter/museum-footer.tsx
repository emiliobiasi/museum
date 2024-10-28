import { Facebook, Instagram } from "lucide-react";

export function MuseumFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-2">
              MUSEU DE HISTÓRIA NATURAL DE CAMPINAS
            </h2>
            <p className="text-sm">
              Rua Cel Quirino, nº 2 – Bosque dos Jequitibás,
              <br />
              Campinas - SP, CEP 13025-004
            </p>
            <p className="text-sm mt-2">
              <strong>TELEFONE</strong>
              <br />
              (19) 3295-5850 / (19) 3251-9849
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/mhncampinas/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground/80 transition-colors"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/museuaquariocampinas/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground/80 transition-colors"
            >
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
