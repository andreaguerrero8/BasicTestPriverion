import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, ListGroup, Table } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

const List = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/producto/")
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);

  return (
    <>
      {data.length > 0 ? (
        <Card style={{ marginTop: "3%" }}>
          <Card.Body>
            <h1 style={{ paddingBottom: "2%" }}>Product List</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((d, index) => (
                  <tr key={index}>
                    <td>{d.id}</td>
                    <td>{d.nombre}</td>
                    <td>{d.precio}</td>
                    <td>
                      <div
                        className="btnsList"
                      >
                        <Link className="btnEdit" to={"/edit"}>
                          Edit <FiEdit />
                        </Link>
                        <Link className="btnDelete" to={"/"}>
                          Delete <FaTrashAlt />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
          <Card.Footer style={{padding:'3%'}}>
            <Link to={"/create"} className="btnAdd">
              Add Product
            </Link>
          </Card.Footer>
        </Card>
      ) : (
        <div>
          <h1>cargando...</h1>
        </div>
      )}
    </>
  );
};

export default List;
