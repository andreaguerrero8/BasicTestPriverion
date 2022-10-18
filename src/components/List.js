import React from "react";
import { Table } from "react-bootstrap";

const List = () => {
  return (
    <>
    <h1 style={{paddingBottom:'3%'}}>Product List</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>otro</td>
        </tr>
      </tbody>
    </Table>

    </>
  );
};

export default List;
