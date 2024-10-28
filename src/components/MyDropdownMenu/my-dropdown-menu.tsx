// src/components/DropdownMenu.tsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

export default function MyDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-blue-500 text-white px-4 py-2 rounded">
        MENU
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white shadow-lg rounded-md w-48">
        <DropdownMenuItem>
          <a
            href="#o-museu"
            className="block px-4 py-2 text-gray-700 uppercase"
          >
            O MUSEU
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="#visite" className="block px-4 py-2 text-gray-700 uppercase">
            VISITE
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a
            href="#visita-guiada"
            className="block px-4 py-2 text-gray-700 uppercase"
          >
            VISITA GUIADA
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a
            href="#contato"
            className="block px-4 py-2 text-gray-700 uppercase"
          >
            CONTATO
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
