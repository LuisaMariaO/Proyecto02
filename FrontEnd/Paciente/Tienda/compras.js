
let headers = new Headers()
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('GET', 'POST', 'OPTIONS','PUT','DELETE');

//Carga de Medicamentos disponibles
let text="";
text=` 
` 

fetch('http://104.154.88.173:5000/obtenermedicamentos')
.then(response => response.json())
.then(data =>{
    var i;
    
    for(i=0;i<data.length;i++){
      
        text+= ` 
        <div class="col-sm-4 col-md-4 col-lg-4">
        <div class="card h-100">
        <div class="card-body " style="margin:10px; margin-top:10px">
        <h4 class="card-title">${data[i].nombre}</h4>
        <p class="card-text">Q${data[i].precio}</p>
        <h5 class="card-text">Descripción</h5>
        <p class="card-text">${data[i].descripcion}</p>
        </div>
        
       
        <button  class="btn btn-danger card-footer" style="margin-left:10px; margin-bottom:1px" onclick="pedido('${data[i].nombre}')"> <i class="fa fa-shopping-cart iboton"></i> Agregar</button>
  
        </div>
        </div>
        
       `
    
}
    
    document.getElementById("tienda").innerHTML = text;
});
function pedido(medicamento){

let lista=""
lista=`<li> ${medicamento} </li>`
document.getElementById("Lista").innerHTML+=lista;
}