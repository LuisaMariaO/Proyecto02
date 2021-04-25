//Declaracion de Headers

let headers = new Headers()
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('GET', 'POST', 'OPTIONS','PUT','DELETE');

function actualizarpacientes(){
    alert("Llego")
document.getElementById("tablausers")='';
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
    var cuentap=0;
    
    for(i=0;i<data.length;i++){
        cuentap++;
        if(data[i].user!="admin"){
        text+= `
                <tr>
                <th scope="row">${i}</th>
                <td>${data[i].nombre}</td>
                <td>${data[i].apellido}</td>
                <td>${data[i].user}</td>
                <td>${data[i].password}</td> 
                <td> <button class="ver bg-primary"><i class="uil-eye iboton" onclick="verusuario('${data[i].user}')"></i></button> 
                <button class="ver bg-success"><i class="uil-pen iboton"></i></button>
                <button class="ver bg-danger"><i class="uil-trash iboton" onclick=></i></button>
                </td>
                </tr>
                `
    }
}
    text+=`</tbody>
            </table>`
    document.getElementById("tablausers").innerHTML = text;
});
}

//Carga de Pacientes
let text=""
text = `
<table class="table" style="margin:10px">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Nombre</th>
<th scope="col">Apellido</th>
<th scope="col">Usuario</th>
<th scope="col">Contraseña </th>
<th scope="col"><span class="espacios"> </span>Opciones</th>
</tr>
</thead>
<tbody>`

fetch('http://localhost:5000/obtenerusuarios')
.then(response => response.json())
.then(data =>{
    var i;
    var cuentap=0;
    
    for(i=0;i<data.length;i++){
        cuentap++;
        if(data[i].user!="admin"){
        text+= `
                <tr>
                <th scope="row">${i}</th>
                <td>${data[i].nombre}</td>
                <td>${data[i].apellido}</td>
                <td>${data[i].user}</td>
                <td>${data[i].password}</td> 
                <td> <button class="ver bg-primary"><i class="uil-eye iboton" onclick="verusuario('${data[i].user}')"></i></button> 
                <button class="ver bg-success"><i class="uil-pen iboton"></i></button>
                <button class="ver bg-danger"><i class="uil-trash iboton" onclick=></i></button>
                </td>
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
text2 = `
<table class="table" style="margin:10px">
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
                <td> <button class="ver bg-primary"><i class="uil-eye iboton"></i></button> 
                    <button class="ver bg-success"><i class="uil-pen iboton"></i></button>
                    <button class="ver bg-danger"><i class="uil-trash iboton"></i></button>
                    </td>
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
                <td> <button class="ver bg-primary"><i class="uil-eye iboton"></i></button> 
                <button class="ver bg-success"><i class="uil-pen iboton"></i></button>
                <button class="ver bg-danger"><i class="uil-trash iboton"></i></button>
                </td> 
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
<th scoope="col">Opciones</th>
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
                <td> <button class="ver bg-primary"><i class="uil-eye iboton"></i></button> 
                <button class="ver bg-success"><i class="uil-pen iboton"></i></button>
                <button class="ver bg-danger"><i class="uil-trash iboton"></i></button>
                </td>
                </tr>
                `
    
}
    text4+=`</tbody>
            </table>`
    document.getElementById("tablamedicamentos").innerHTML = text4;
});

function verusuario(usuario){
    alert(usuario)
    
    let unu=""
    unu=`<h1>LOL</h1>`
    document.getElementById("Pasa").innerHTML=unu
    .then(
        window.open('../admin/Ver usuario/vista.html','winpop','width=240,height=100')
    )
   
   
        
}

function cargar(){
    let file = document.getElementById("carga").files[0];
    
    console.log(file)
    if (file) {
        let reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (evt) {
            let cuerpo = {
                data:evt.target.result
            }

            console.log(JSON.stringify(cuerpo))
            fetch('http://localhost:5000/cargapacientes', {
            method: 'POST',
            headers,
            body: JSON.stringify(cuerpo),
            })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                
            })
            .catch(error => {
                console.error('Error:', error);
          
            });

        }
        reader.onerror = function (evt) {
            
        }
    }
}


    
