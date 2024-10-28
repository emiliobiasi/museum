import { MuseumFooter } from "@/components/MuseumFooter/museum-footer";
import { MuseumTopBar } from "@/components/MuseumTopBar/museum-top-bar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <MuseumTopBar />
      <Outlet />
      <MuseumFooter />
    </>
  );
}
