import React from "react";
import { Card, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const FormCreate = () => {
  return (
    <>
      <h1 style={{textAlign:'center'}}>Create New Product</h1>
      <div className="formCreate">
        <Card style={{ padding: "5%" }}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Precio</Form.Label>
              <Form.Control type="text" placeholder="Precio" />
            </Form.Group>
          </Form>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Card>
      </div>
    </>
  );
};

export default FormCreate;
