document.getElementById("medicos").innerHTML='';
    let textm=""
    textm = `
    <select id="opciones" name="lineas">
    `
    
    fetch('http://34.71.5.108:5000/obtenermedicos')
.then(response => response.json())
.then(data =>{
    var i;
    var valor;
    
    for(i=0;i<data.length;i++){
      valor=`${data[i].user}`
     
    
        textm+= `
                
                <option value="${data[i].user}"> ${data[i].nombre} ${data[i].apellido}</option>
                
               
                `

                
                

        
       
}
    textm+=`</selection>
            `
        document.getElementById("medicos").innerHTML = textm;
});
function facturar(){
let total=0.00;
    total= document.getElementById("total");
    let costo1= parseFloat(document.getElementById("costoo").value);
    let costo2=parseFloat(document.getElementById("costoi").value);
    let suma=0;
    suma=(costo1+costo2);
    total.value=suma.toFixed(2);
    print(document.getElementById('Hola'))
}