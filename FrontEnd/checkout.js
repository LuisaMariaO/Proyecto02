let headers = new Headers()
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('GET', 'POST', 'OPTIONS','PUT','DELETE');

document.getElementById("detalle").innerHTML='';
let text2=""
text2 = `
<table class="table" style="margin:10px">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Producto</th>
<th scope="col">Precio (Q)</th>
<th scope="col">Cantidad</th>
<th scope="col">Subtotal (Q)</th>
</tr>
</thead>
<tbody>`

fetch('http://34.71.5.108:5000/obtenerpedidos')
.then(response => response.json())
.then(data =>{
var i;
var  subtotal=0;
var mandacantidad=''
var canti=''
for(i=0;i<data.length;i++){
 subtotal=subtotal+(data[i].precio*data[i].cantidad)
 subtotals=subtotal.toFixed(2);
    text2+= `
            <tr>
            <td>${data[i].id}</td>
            <td>${data[i].producto}</td>
            <td>${data[i].precio}</td> `
            
            canti=data[i].id.toString();
            
            
            text2+= `<td><input type="number" value="${data[i].cantidad}" id="'${canti}'" Style="width:50px"`
           
            
            text2+=`onchange="edita('${data[i].producto}','${data[i].precio}','${data[i].cantidad}')"; onkeyup"edita()" ></td>
            <td>${subtotals}<td> `
           
       
            
           

            text2+=` 
            </td> 
           </tr>
         `
            
  
    
   
}


subtotal=subtotal.toFixed(2);
text2+=`</tbody>
        </table>
        <h3>Total: Q${subtotal}</h3>
        `
    document.getElementById("detalle").innerHTML = text2;
});

function termina(){
  print()
  
   fetch(`http://34.71.5.108:5000/eliminarpedidos`)
   .then(response => response.json())
   .then(data => {
   
     })

   
}

function edita(producto,precio,cantidad){
 
  /*
    let reque = `{
        "paciente":"${paciente}",
        "fecha":"${fecha}",
        "hora":"${hora}",
        "motivo":"${motivo}",
        "estado":"aceptada",
        "usermedico":"${usermedico}",
        "medico":"${medico}"
      }`
    
      fetch('http://34.71.5.108:5000/actualizacita/'+id, {
        method: 'PUT',
        headers,
        body: reque,
      })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
        alert("Cita aceptada")
        actualizacita()
       
      })
      .catch(error => {
        console.error('Error:', error);
      });
*/
}

function actualiza(){
    document.getElementById("detalle").innerHTML='';
    let text2=""
    text2 = `
    <table class="table" style="margin:10px">
    <thead>
    <tr>
    <th scope="col">#</th>
    <th scope="col">Producto</th>
    <th scope="col">Precio (Q)</th>
    <th scope="col">Cantidad</th>
    <th scope="col">Subtotal (Q)</th>
    </tr>
    </thead>
    <tbody>`
    
    fetch('http://34.71.5.108:5000/obtenerpedidos')
    .then(response => response.json())
    .then(data =>{
    var i;
    var  subtotal=0;
    
    for(i=0;i<data.length;i++){
     subtotal=subtotal+(data[i].precio*data[i].cantidad)
     subtotals=subtotal.toFixed(2);
        text2+= `
                <tr>
                <td>${data[i].id}</td>
                <td>${data[i].producto}</td>
                <td>${data[i].precio}</td>
                <td><input type="number" value="${data[i].cantidad}" Style="width:50px" onchange="edita()"; onkeyup"edita()"></td>
                <td>${subtotals}<td>
                `
           
                
               
    
                text2+=` 
                </td> 
               </tr>`
                
    
        
       
    }
    text2+=`</tbody>
            </table>`
        document.getElementById("detalle").innerHTML = text2;
    }); 
}