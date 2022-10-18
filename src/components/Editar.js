import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Editar = () => {
  const { id } = useParams();

  const [ids, setIds] = useState(id);
  const [dataUpdate, setDataUpdate] = useState([]);

  useEffect(() => {
    // updateProduct()

    axios
      .get(`http://localhost/producto/?consultar=${ids}`)
      .then((response) => {
        setDataUpdate(response.data[0])
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
  const updateProduct = (e) => {
    Swal.fire({
      text: "Are you sure you want to update the product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update Product!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post(`http://localhost/producto/?consultar=${ids}`)
          .then((response) => {
            setDataUpdate(response[0]);

            Swal.fire({
              icon: "success",
              title: "Product update successfully",
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
      }
    });
  };

  return (
    <>
      {dataUpdate !== '' ? (
        <div>
          <h1>Empleado</h1>

          <div>
            <h5>{dataUpdate?.id}</h5>
            <h5>{dataUpdate?.nombre}</h5>
            <h5>{dataUpdate?.precio}</h5>
          </div>
        </div>
      ) : (
        <div>
          <h1>cargando...</h1>
        </div>
      )}
    </>
  );
};

export default Editar;
