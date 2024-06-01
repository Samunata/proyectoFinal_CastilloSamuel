import { useState } from "react";
import { ARREGLO_CAMISAS } from "../../mocks/Camisas-mocks";
import { Camisas } from "../../modelos/Camisas";
import { ARREGLO_CAMISAS_TALLA } from "../../utilidades/dominios/DomTallas";
import { NavLink } from "react-router-dom";
import { Button, Modal, ModalBody, ModalFooter } from "react-bootstrap";

export const CamiAdmin = () => {
  const [arrCamisas, setArrCamisas] =
    useState<Camisas[]>(ARREGLO_CAMISAS);
  const [objCami, setObjPeli] = useState<Camisas>(
    new Camisas(0, "", "", "", "", "")
  );
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => {
    setShow(false);
  };

  const obtenerNombreTalla = (valor: string) => {
    for (const objGen of ARREGLO_CAMISAS_TALLA) {
      if (objGen.codTallas === valor) {
        return objGen.nombreTalla;
      }
    }
  };

  const eliminarCamisa = (codigo: number) => {
    setArrCamisas(arrCamisas.filter((cami) => cami.Camisass !== codigo));
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-11 mt-4">
          <table className="table table-striped table-hover">
            <thead>
              <tr className="table-danger">
                <th style={{ width: "15%" }}>Codigo</th>
                <th style={{ width: "20%" }}>Marca</th>
                <th style={{ width: "20%" }}>Color</th>
                <th style={{ width: "15%" }}>Talla</th>
                <th style={{ width: "15%" }}>Modelo</th>
                <th style={{ width: "15%" }}>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {arrCamisas.map((miCami: Camisas) => (
                <tr className="align-middle" key={miCami.Camisass}>
                  <td>{miCami.Camisass}</td>
                  <td>{miCami.marcaCamisas}</td>
                  <td>{miCami.colorCamisas}</td>
                  <td>{obtenerNombreTalla(miCami.TallaCamisas)}</td>
                  <td>
                    <img
                      src={miCami.imagenCamisasBase64}
                      alt=""
                      className="imagenListado"
                    />
                    <div className="text-info">{miCami.imagenCamisas}</div>
                  </td>
                  <td className="text-center">
                    <a
                      href="/#"
                      onClick={(e) => {
                        e.preventDefault();
                        setShow(true);
                        setObjPeli(miCami);
                      }}
                    >
                      <i className="fa-solid fa-trash-can rojito"></i>
                    </a>
                    <NavLink to={"/cactual/" + miCami.Camisass}>
                      <i className="fa-regular fa-pen-to-square verde"></i>
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Eliminar Camisas</Modal.Title>
            </Modal.Header>
            <ModalBody>
              ¿Estas seguro de eliminar la Camisa {objCami.marcaCamisas}?
            </ModalBody>
            <ModalFooter>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  eliminarCamisa(objCami.Camisass);
                  setShow(false);
                }}
              >
                Eliminar
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </>
  );
};
