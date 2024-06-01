import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import noFoto from "../../../assets/img/noDisponible.png";

import { TallasCamisas } from "../../modelos/TallasCamisas";
import { ARREGLO_CAMISAS_TALLA } from "../../utilidades/dominios/DomTallas";
import { useFormulario } from "../../utilidades/misHooks/useFormulario";
import { Camisas } from "../../modelos/Camisas";
import { useNavigate } from "react-router-dom";
import { ARREGLO_CAMISAS } from "../../mocks/Camisas-mocks";
import { ConvertirBase64 } from "../../utilidades/funciones/ConvertirBase64";

export const CamiCrear = () => {
  const irsePara = useNavigate();

  type formHtml = React.FormEvent<HTMLFormElement>;
  const [enProceso, setEnProceso] = useState<boolean>(false);
  const [imgBase64, setImgBase64] = useState<any>();
  const [imgMiniatura, setimgMiniatura] = useState<any>(noFoto);

  const [arrCamisas] = useState<Camisas[]>(ARREGLO_CAMISAS);
  const [arrTallas] = useState<TallasCamisas[]>(ARREGLO_CAMISAS_TALLA);

  let {
    marcaCamisas,
    colorCamisas,
    TallaCamisas,
    imagenCamisas,
    dobleEnlace,
    objeto,
  } = useFormulario<Camisas>(new Camisas(0, "", "", "", "", ""));

  const enviarForm = (objForm: formHtml) => {
    objForm.preventDefault();
    const formulario = objForm.currentTarget;

    if (formulario.checkValidity() === false) {
      objForm.preventDefault();
      objForm.stopPropagation();
      setEnProceso(true);
    } else {
      const ultimaPeli = arrCamisas[arrCamisas.length - 1];
      const nuevoCod = ultimaPeli.Camisass + 1;
      objeto.Camisass = nuevoCod;
      objeto.imagenCamisas = imagenCamisas.substring(imagenCamisas.lastIndexOf("\\") + 1);
      objeto.imagenCamisasBase64 = imgBase64;
      arrCamisas.push(objeto);
      setEnProceso(false);
      irsePara("/clistar");
    }
  };

  const cargarImagen = async (e: any) => {
    const archivos = e.target.files;
    const imagen = archivos[0];
    setimgMiniatura(URL.createObjectURL(imagen));
    dobleEnlace(e);
    const base64 = await ConvertirBase64(imagen);
    setImgBase64(base64);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="col-md-5 mt-5 pb-4">
        <Form noValidate validated={enProceso} onSubmit={enviarForm}>
          <div className="card">
            <div className="card-header">
              <h5 className=" rojito">Formulario creación</h5>
            </div>

            <div className="card-body">
              <div className="mb-3">
                <Form.Group controlId="nom">
                  <Form.Label>
                    <span className="rojito">*</span> Marca camisa
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    required
                    type="text"
                    name="marcaCamisas"
                    value={marcaCamisas}
                    onChange={dobleEnlace}
                  />
                </Form.Group>
              </div>

              <div className="mb-3">
                <Form.Group controlId="ColorCamisa">
                  <Form.Label>
                    <span className="rojito">*</span> Color Camisa
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    required
                    type="text"
                    name="colorCamisas"
                    value={colorCamisas}
                    onChange={dobleEnlace}
                  />
                </Form.Group>
              </div>

              <div className="mb-3">
                <Form.Group controlId="gen">
                  <Form.Label>
                    <span className="rojito">*</span> Talla
                  </Form.Label>

                  <Form.Select
                    size="sm"
                    required
                    name="codTallaCamisas"
                    value={codTallaCamisas}
                    onChange={dobleEnlace}
                  >
                    <option value="">Seleccione una Talla</option>

                    {arrTallas.map((miTalla: TallasCamisas) => (
                      <option
                        value={miTalla.codTallas}
                        key={miTalla.codTallas}
                      >
                        {miTalla.nombreTalla}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </div>

              <div className="mb-3">
                <Form.Group controlId="fot">
                  <Form.Label>
                    <span className="rojito">*</span> Modelo
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    required
                    type="file"
                    name="imagenCamisas"
                    value={imagenCamisas}
                    onChange={cargarImagen}
                  />
                </Form.Group>
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-center">
                  <img
                    src={imgMiniatura}
                    alt="no foto"
                    className="maximoTamanoCreacion"
                  />
                </div>
              </div>
            </div>

            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Crear Camisa
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
