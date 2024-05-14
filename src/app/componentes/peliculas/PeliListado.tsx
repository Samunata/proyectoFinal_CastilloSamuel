import { useState } from "react";
import { Pelicula } from "../../modelos/Pelicula";
import { ARREGLO_PELICULAS } from "../../mocks/Pelicula-mocks";
import { ARREGLO_PELICULA_GENERO } from "../../utilidades/dominios/DomGenero";

export const PeliListado = () => {
  const [arrPeliculas] = useState<Pelicula[]>(ARREGLO_PELICULAS);

  const obtenerNombreGenero = (Valor: string) => {
    for (const objGen of ARREGLO_PELICULA_GENERO) {
      if (objGen.codGenero == Valor) {
        return objGen.nombreGenero;
      }
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-11 mt-4">
          <table className="table table-striped table-hover">
            <thead>
              <tr className="table-danger">
                <th style={{ width: "10%" }}>Codigo</th>
                <th style={{ width: "30%" }}>Nombre</th>
                <th style={{ width: "20%" }}>Genero</th>
                <th style={{ width: "30%" }}>Protagonista</th>
                <th style={{ width: "10%" }}>Imagen</th>
              </tr>
            </thead>
            <tbody>
              {arrPeliculas.map((miPel: Pelicula) => (
                <tr className="align-middle" key={miPel.codPelicula}>
                  <td>{miPel.codPelicula}</td>
                  <td>{miPel.nombrePelicula}</td>
                  <td>{obtenerNombreGenero(miPel.codGeneroPelicula)}</td>
                  <td>{miPel.protagonistaPelicula}</td>                 
                  <td> 
                    <img src={miPel.imagenPeliculaBase64} alt="" className="imagenListado"/>
                    <div className="text-info">{miPel.imagenPelicula}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
