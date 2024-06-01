import { useState } from "react";
import { Camisas } from "../../modelos/Camisas";
import { ARREGLO_CAMISAS } from "../../mocks/Camisas-mocks";
import { ARREGLO_CAMISAS_TALLA } from "../../utilidades/dominios/DomTallas";

export const CamiListado = () => {
  const [arrCamisas] = useState<Camisas[]>(ARREGLO_CAMISAS);

  const obtenerNombreTalla = (Valor: string) => {
    for (const objGen of ARREGLO_CAMISAS_TALLA) {
      if (objGen.codTallas == Valor) {
        return objGen.nombreTalla;
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
                <th style={{ width: "30%" }}>Marca</th>
                <th style={{ width: "20%" }}>Talla</th>
                <th style={{ width: "30%" }}>Color</th>
                <th style={{ width: "10%" }}>Imagen</th>
              </tr>
            </thead>
            <tbody>
              {arrCamisas.map((miCam: Camisas) => (
                <tr className="align-middle" key={miCam.Camisass}>
                  <td>{miCam.Camisass}</td>
                  <td>{miCam.marcaCamisas}</td>
                  <td>{obtenerNombreTalla(miCam.TallaCamisas)}</td>
                  <td>{miCam.colorCamisas}</td>                 
                  <td> 
                    <img src={miCam.imagenCamisasBase64} alt="" className="imagenListado"/>
                    <div className="text-info">{miCam.imagenCamisas}</div>
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
