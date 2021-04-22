//Carga de Pacientes
let text=""
text = `<table class="table" style="margin=10px">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Nombre</th>
<th scope="col">Apellido</th>
<th scope="col">Usuario</th>
<th scope="col">Contraseña</th>
<th scope="col">Opciones</th>
</tr>
</thead>
<tbody>`

fetch('http://localhost:5000/obtenerusuarios')
.then(response => response.json())
.then(data =>{
    var i;

    
    for(i=0;i<data.length;i++){
        if(data[i].user!="admin"){
        text+= `
                <tr>
                <th scope="row">${i}</th>
                <td>${data[i].nombre}</td>
                <td>${data[i].apellido}</td>
                <td>${data[i].user}</td>
                <td>${data[i].password}</td> 
                </tr>
                `
    }
}
    text+=`</tbody>
            </table>`
    document.getElementById("tablausers").innerHTML = text;
});

//Carga de Médicos
let text2=""
text2 = `<table class="table" style="margin=10px">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Nombre</th>
<th scope="col">Apellido</th>
<th scope="col">Especialidad</th>
<th scope="col">Opciones</th>
</tr>
</thead>
<tbody>`

fetch('http://localhost:5000/obtenermedicos')
.then(response => response.json())
.then(data =>{
    var i;

    
    for(i=0;i<data.length;i++){
        text2+= `
                <tr>
                <th scope="row">${i+1}</th>
                <td>${data[i].nombre}</td>
                <td>${data[i].apellido}</td>
                <td>${data[i].especialidad}</td>
                </tr>
                `
    
}
    text2+=`</tbody>
            </table>`
    document.getElementById("tablamedicos").innerHTML = text2;
});
//Carga de Enfermeras
let text3=""
text3 = `<table class="table" style="margin=10px">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Nombre</th>
<th scope="col">Apellido</th>
<th scope="col">Usuario</th>
<th scope="col">Contraseña</th>
<th scope="col">Opciones</th>
</tr>
</thead>
<tbody>`

fetch('http://localhost:5000/obtenerenfermeras')
.then(response => response.json())
.then(data =>{
    var i;

    
    for(i=0;i<data.length;i++){
  
        text3+= `
                <tr>
                <th scope="row">${i+1}</th>
                <td>${data[i].nombre}</td>
                <td>${data[i].apellido}</td>
                <td>${data[i].user}</td>
                <td>${data[i].password}</td> 
                </tr>
                `
    
}
    text3+=`</tbody>
            </table>`
    document.getElementById("tablaenfermeras").innerHTML = text3;
});
//Carga de Medicamentos
let text4=""
text4 = `<table class="table" style="margin=10px">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Nombre</th>
<th scope="col">Precio (Q)</th>
<th scope="col">Descripción</th>
<th scope="col">Cantidad</th>
</tr>
</thead>
<tbody>`

fetch('http://localhost:5000/obtenermedicamentos')
.then(response => response.json())
.then(data =>{
    var i;

    
    for(i=0;i<data.length;i++){
  
        text4+= `
                <tr>
                <th scope="row">${i+1}</th>
                <td>${data[i].nombre}</td>
                <td>${data[i].precio}</td>
                <td>${data[i].descripcion}</td>
                <td>${data[i].cantidad}</td> 
                </tr>
                `
    
}
    text4+=`</tbody>
            </table>`
    document.getElementById("tablamedicamentos").innerHTML = text4;
});