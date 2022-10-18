import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

const List = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://example.com/users/")
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
        <>
          <h1 style={{ paddingBottom: "3%" }}>Product List</h1>
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
              <tr>
                <td>1</td>
                <td>Milk</td>
                <td>5000</td>
                <td>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Link className="btnEdit" to={"/edit"}>
                      Edit <FiEdit />
                    </Link>
                    <Link className="btnDelete" to={"/"}>
                      Delete <FaTrashAlt />
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </>
      ) : (
        <div>
          <h1>cargando...</h1>
        </div>
      )}
    </>
  );
};

export default List;
