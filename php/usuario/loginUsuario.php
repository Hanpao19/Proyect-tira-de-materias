<?php

require_once '../config.php';
$valido['success']=array('success'=>false, 'mensaje'=>"", 'nombre'=>"");
if($_POST){
    $matricula=$_POST["matricula"];
    $password=$_POST["password"];
 

    //echo $apellidos;

    $sql="SELECT * FROM alumnos WHERE matricula='$matricula' AND password='$password'";
    $resultado=$cx->query($sql);
    $n=$resultado->num_rows;

    if($n>0){
            $row=$resultado->fetch_array();
            $valido['success']=true;
            $valido['mensaje']="BIENVENIDO ".$row['nombre'];
            $valido['nombre']=$row['nombre'];

        }else{
            $valido['success']=false;
            $valido['mensaje']="ERROR: DATOS INEXISTENTES";
        }

    }else{
        $valido['success']=false;
        $valido['mensaje']="EL NSS YA EXISTE";

}

echo json_encode($valido);



?>