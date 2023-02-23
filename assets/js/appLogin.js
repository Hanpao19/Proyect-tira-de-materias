


const registrarUsuario= async()=>{
    var nombre=document.querySelector("#nombre").value;
    var apellidos=document.querySelector("#apellidos").value;
    var fecha=document.querySelector("#fecha").value;
    var nss=document.querySelector("#nss").value;
    var password=document.querySelector("#password").value;
    var carrera=document.querySelector("#carrera").value;
    var generacion=document.querySelector("#generacion").value;
    var grupo=document.querySelector("#grupo").value;
    var aula=document.querySelector("#aula").value;

    if(nombre.trim()=="" ||
    apellidos.trim()=="" ||
    fecha.trim()=="" ||
    nss.trim()=="" ||
    password.trim()=="" ||
    carrera.trim()=="" ||
    generacion.trim()=="" ||
    grupo.trim()=="" ||
    aula.trim()=="" ){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algun campo esta vacio aun',
            footer: 'Registrarse fallido'
          })
          return;
    }

//INSERTAR A LA BASE DE DATOS

const datos=new FormData();
datos.append("nombre",nombre);
datos.append("apellidos",apellidos);
datos.append("fecha",fecha);
datos.append("nss",nss);
datos.append("password",password);
datos.append("carrera",carrera);
datos.append("generacion",generacion);
datos.append("grupo",grupo);
datos.append("aula",aula);

var respuesta=await fetch("php/usuario/registrarUsuario.php",{
    method:'POST',
    body:datos
});
Swal.fire({
    icon: 'success',
    title: 'EXITO',
    text: 'RESPUESTA'+respuesta,
    footer: 'INSCRIPCION'
  });

  var resultado=await respuesta.json();

  if(resultado.success==true){
    Swal.fire({
        icon: 'success',
        title: 'EXITO',
        text: resultado.mensaje,
        footer: 'INSCRIPCION'
      })
      document.querySelector("#formregistrar").reset();
      setTimeout(()=>{
        window.location.href="menu.html";
      },10000);
  }else{
    Swal.fire({
        icon: 'error',
        title: 'ERROR',
        text: resultado.mensaje,
        footer: 'INSCRIPCION'
      })
  }

}



//LOGIN---------------

const loginUsuario= async()=>{
  var matricula=document.querySelector("#matricula").value;
  var password=document.querySelector("#password").value;
  
  

  if(
  matricula.trim()=="" ||
  password.trim()==""
  ){
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Verifica que tus datos sean correctos',
          footer: 'Registrarse fallido'
        })

  }



  //INSERTAR A LA BASE DE DATOS

const datos=new FormData();
datos.append("matricula",matricula);
datos.append("password",password);


var respuesta=await fetch("php/usuario/loginUsuario.php",{
    method:'POST',
    body:datos
});

  var resultado=await respuesta.json();

  if(resultado.success==true){
    Swal.fire({
        icon: 'success',
        title: 'EXITO',
        text: resultado.mensaje,
        footer: 'REINSCRIPCION'
      })
      document.querySelector("#formIniciar").reset();
      setTimeout(()=>{
        window.location.href="inicio.html";
      },2000);
  }else{
    Swal.fire({
        icon: 'error',
        title: 'ERROR',
        text: resultado.mensaje,
        footer: 'REINSCRIPCION'
      })
  }
}
 