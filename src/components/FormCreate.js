import React from "react";
import { Card, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const FormCreate = () => {
  const handleOnsubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Create New Product</h1>
      <div className="formCreate">
        <Card style={{ padding: "5%" }}>
          <Form onSubmit={handleOnsubmit}>
            <Form.Group className="mb-3" controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Name Product" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="precio">
              <Form.Label>Precio</Form.Label>
              <Form.Control type="text" placeholder="Price Product" />
            </Form.Group>
          </Form>

          <div style={{ display: "flex", alignItems: "center" }}>
            <Button variant="primary" type="submit">
              Submit
            </Button>

            <Link to={"/"} className="btnBack">
              Back
            </Link>
          </div>
        </Card>
      </div>
    </>
  );
};

export default FormCreate;
