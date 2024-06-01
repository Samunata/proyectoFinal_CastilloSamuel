import { Route, Routes } from "react-router-dom";

import { AcercaDe } from "../../componentes/otros/AcercaDe";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { CamiCrear } from "../../componentes/camisas/CamiCrear";
import { CamiAdmin } from "../../componentes/camisas/CamiAdmin";
import { CamiListado } from "../../componentes/camisas/CamiListado";
import { CamiActualizar } from "../../componentes/camisas/CamiActualizar";

import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/ccrear" element={< CamiCrear />} />
      <Route path="/cadmin" element={< CamiAdmin />} />
      <Route path="/clistar" element={< CamiListado />} />
      <Route path="/cactual/:codigo" element={<CamiActualizar />} />

      <Route path="/acerca" element={<AcercaDe />} />

      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};
