import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Card, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Editar = () => {
  const { id } = useParams();

  const [ids, setIds] = useState(id);
  const [dataUpdate, setDataUpdate] = useState({});

  useEffect(() => {

    axios
      .get(`http://localhost/producto/?consultar=${ids}`)
      .then((response) => {
        setDataUpdate(response.data[0]);
      })
      .catch((error) => {
        Swal.fire({
          icon: "Error",
          title: "Ops there was an error, try again",
          ConfirmButton: "Ok",
        });
      });
  }, []);

  //petition update
  const updateProduct = (dataUpdate) => {
    axios
      .post("http://localhost/producto/?actualizar=1", dataUpdate)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Product Update successfully",
          ConfirmButton: "Ok",
        }).then((result) => {
          window.location.href = "/";
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "Error",
          title: "Ops there was an error, try again",
          ConfirmButton: "Ok",
        });
      });
  };

  //onSubmit
  const handlOnSubmit = (e) => {
    e.preventDefault();
    const { nombre, precio, id } = dataUpdate;
    let formData = {id: id, nombre: nombre, precio: precio };
    updateProduct(formData);
  };

  return (
    <>
      {dataUpdate !== "" ? (
        <>
          <h1 style={{ textAlign: "center" }}>Edit Product</h1>
          <div className="formCreate">
            <Card style={{ padding: "5%" }}>
              <Form onSubmit={handlOnSubmit}>
                <Form.Group className="mb-3" controlId="nombreEdit">
                  <Form.Label>Id Product</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name Product"
                    disabled
                    value={dataUpdate?.id}
                    name="id"
                    onChange={(e) => {
                      setDataUpdate({
                        nombre: dataUpdate.nombre,
                        precio: dataUpdate.precio,
                        id: e.target.value,
                      });
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="nombreEdit">
                  <Form.Label>Nombre</Form.Label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Name Product"
                    name="nombre"
                    value={dataUpdate?.nombre}
                    required
                    onChange={(e) => {
                        setDataUpdate({
                          nombre: e.target.value,
                          precio: dataUpdate.precio,
                          id: dataUpdate.id
                        })
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="precioEdit">
                  <label>Precio</label>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Price Product"
                    name="precio"
                    value={dataUpdate?.precio}
                    required
                    onChange={(e) => {
                      setDataUpdate({
                        nombre: dataUpdate.nombre,
                        precio: e.target.value,
                        id: dataUpdate.id
                      });
                    }}
                  />
                </Form.Group>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>

                  <Link to={"/"} className="btnBack">
                    Back
                  </Link>
                </div>
              </Form>
            </Card>
          </div>
        </>
      ) : (
        <div>
          <h1>cargando...</h1>
        </div>
      )}
    </>
  );
};

export default Editar;
