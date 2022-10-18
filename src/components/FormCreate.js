import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const FormCreate = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombre: "",
      precio: 0,
    },
  });

  //peticion POST for create product
  const createProduct = (data) => {
    axios
      .post("http://localhost/producto/?insertar=1", data)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Product Created successfully",
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
  const onSubmit = (formData) => {
    createProduct(formData);
    reset();
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Create New Product</h1>
      <div className="formCreate">
        <Card style={{ padding: "5%" }}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name Product"
                {...register("nombre", { required: true })}
              />
            </Form.Group>
            {errors.nombre && <span>This field is required</span>}

            <Form.Group className="mb-3" controlId="precio">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="Price Product"
                {...register("precio", { required: true })}
              />
            </Form.Group>
            {errors.precio && <span>This field is required</span>}

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
  );
};

export default FormCreate;
