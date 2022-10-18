<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conecta a la base de datos  con usuario, contraseña y nombre de la BD
$server = "localhost"; $user = "root"; $password = ""; $db = "producto";
$conexionBD = new mysqli($server, $user, $password, $db);


// Consulta datos y recepciona una clave para consultar dichos datos con dicha clave
if (isset($_GET["consultar"])){
    $sqlProducto = mysqli_query($conexionBD,"SELECT * FROM producto WHERE id=".$_GET["consultar"]);
    if(mysqli_num_rows($sqlProducto) > 0){
        $empleaados = mysqli_fetch_all($sqlProducto,MYSQLI_ASSOC);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}
//borrar pero se le debe de enviar una clave ( para borrado )
if (isset($_GET["borrar"])){
    $sqlProducto = mysqli_query($conexionBD,"DELETE FROM producto WHERE id=".$_GET["borrar"]);
    if($sqlProducto){
        echo json_encode(["success"=>1]);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}
//Inserta un nuevo registro y recepciona en método post los datos de nombre y precio
if(isset($_GET["insertar"])){
    $data = json_decode(file_get_contents("php://input"));
    $nombre=$data->nombre;
    $precio=$data->precio;
        if(($precio!="")&&($nombre!="")){
            
    $sqlProducto = mysqli_query($conexionBD,"INSERT INTO producto(nombre,precio) VALUES('$nombre','$precio') ");
    echo json_encode(["success"=>1]);
        }
    exit();
}
// Actualiza datos pero recepciona datos de nombre, precio y una clave para realizar la actualización
if(isset($_GET["actualizar"])){
    
    $data = json_decode(file_get_contents("php://input"));

    $id=(isset($data->id))?$data->id:$_GET["actualizar"];
    $nombre=$data->nombre;
    $precio=$data->precio;
    
    $sqlProducto = mysqli_query($conexionBD,"UPDATE producto SET nombre='$nombre',precio='$precio' WHERE id='$id'");
    echo json_encode(["success"=>1]);
    exit();
}
// Consulta todos los registros de la tabla producto
$sqlProducto = mysqli_query($conexionBD,"SELECT * FROM producto ");
if(mysqli_num_rows($sqlProducto) > 0){
    $empleaados = mysqli_fetch_all($sqlProducto,MYSQLI_ASSOC);
    echo json_encode($empleaados);
}
else{ echo json_encode([["success"=>0]]); }


?>