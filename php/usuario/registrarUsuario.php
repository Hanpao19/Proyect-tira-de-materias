<?php

require_once '../config.php';

$valido['success']=array('success'=>false, 'mensaje'=>"");

if($_POST){
    $nombre=$_POST["nombre"];
    $apellidos=$_POST["apellidos"];
    $fecha=$_POST["fecha"];
    $nss=$_POST["nss"];
    $password=$_POST["password"];
    $carrera=$_POST["carrera"];
    $generacion=$_POST["generacion"];
    $grupo=$_POST["grupo"];
    $aula=$_POST["aula"];

    //echo $apellidos;

    $sql="SELECT * FROM alumnos WHERE nss='$nss'";
    $resultado=$cx->query($sql);
    $n=$resultado->num_rows;
    if($n==0){
        $sqlInsertar="INSERT INTO alumnos VALUES(null,'$nombre','$apellidos','$fecha','$nss','$password','$carrera','$generacion','$grupo','$aula')";
        if($cx->query($sqlInsertar)===true){
            $valido['success']=true;
            $valido['mensaje']="SE GUARDO CORRECTAMENTE";

        }else{
            $valido['success']=false;
            $valido['mensaje']="ERROR: NO SE GUARDO";
        }

    }else{
        $valido['success']=false;
        $valido['mensaje']="EL NSS YA FUE REGISTRADO";

    }

}else{
    $valido['success']=false;
    $valido['mensaje']="NO SE GUARDO";

}
echo json_encode($valido);



?>