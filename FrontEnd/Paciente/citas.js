let headers = new Headers()
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('GET', 'POST', 'OPTIONS','PUT','DELETE');
usuario='';

fetch(`http://localhost:5000/getloguser`) //Buscando el usuario seleccionado
    .then(response => response.json())
    .then(data => {
   usuario=data.user;

    })

function generar_cita(){
    var fecha = document.getElementById("fecha");
    var hora = document.getElementById("hora");
    var motivo= document.getElementById("motivo");
             
    fetch('http://localhost:5000/nuevacita',
    {
        method:'POST',
        headers,
        body: `{
                "paciente":"${usuario}",
                "fecha":"${fecha.value}",
                "hora":"${hora.value}",
                "motivo":"${motivo.value}",
                "estado":"pendiente"
                }`
    })
    .then(response => response.json())
    .then(
        result => {
            
            alert('Cita solicitada')
            window.location.href="../Paciente/inicio.html"
          }
    )
    .catch(
        error => {
            console.error('Error:', error);
            fecha.value=''
            hora.value=''
            motivo.value=''
            alert('Hubo un generando la solicitud')
          }
    )
    
        
     
}