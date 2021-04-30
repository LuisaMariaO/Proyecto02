//Declaracion de Headers

let headers = new Headers()
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('GET', 'POST', 'OPTIONS','PUT','DELETE');
/*
//Carga de Medicamentos disponibles
let text="";
text=` 
` 

fetch('http://localhost:5000/obtenermedicamentos')
.then(response => response.json())
.then(data =>{
    var i;
    
    for(i=0;i<data.length;i++){
      
        text+= ` 
        <div class="col-sm-4 col-md-4 col-lg-4">
        <div class="card">
        <div class="card-body">
        <h4 class="card-title">${data[i].nombre}</h4>
        <p class="card-text">Q${data[i].precio}</p>
        <h5 class="card-text">Descripción</h5>
        <p class="card-text">${data[i].descripcion}</p>
        <button href="#" class="btn btn-danger">Agregar</button>
        </div>
        </div>
        </div>
       `
    
}
    
    document.getElementById("tienda").innerHTML = text;
});


*/



   
    
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var fecha = document.getElementById("fecha");
    var sexo = document.getElementById("sexo");
    var usuario = document.getElementById("usuario");
    var pass = document.getElementById("password")
    var telefono = document.getElementById("telefono");
    let viejo_user='';

    fetch(`http://localhost:5000/getloguser`) //Buscando el usuario seleccionado
    .then(response => response.json())
    .then(data => {
   viejo_user=data.user;
   nombre.value=data.nombre;
   apellido.value=data.apellido;
   fecha.value=data.fecha;
   sexo.value=data.sexo;
   usuario.value=data.user;
   pass.value=data.password;
   telefono.value=data.telefono;
    })
    .then(
     
    )
    function actualizar(){ 
     
        let reque = `{
        "nombre":"${nombre.value}",
        "apellido":"${apellido.value}",
        "fecha":"${fecha.value}",
        "sexo":"${sexo.value}",
        "user":"${usuario.value}",
        "password":"${pass.value}",
        "telefono":"${telefono.value}"
      }`
    
      fetch('http://localhost:5000/actualizacion/'+viejo_user, {
        method: 'PUT',
        headers,
        body: reque,
      })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
        alert("¡Perfil actualizado!")
        
      })
      .catch(error => {
        console.error('Error:', error);
      });
       }