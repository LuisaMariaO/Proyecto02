//Declaracion de Headers

let headers = new Headers()
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('GET', 'POST', 'OPTIONS','PUT','DELETE');

//Registrar usuarios
function CrearUsuario(){
    var existe=false;
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var fecha = document.getElementById("fecha");
    var sexo = document.getElementById("sexo");
    var usuario = document.getElementById("usuario");
    var pass = document.getElementById("pass")
    var telefono = document.getElementById("number");

    
    fetch(`http://localhost:5000/pacientes/${usuario.value}`) //Buscando usuarios repetidos
    // Convirtiendo de string a texto
    .then(response => response.json())
    .then(data => {
        if(data.user=="false"){
            existe=false;
            
        //Sí se puede crear el usuario   
       
        }else{
            alert(`El usario ${data.user} ya se encuentra en uso`)  
            existe=true;
        //No se puede crear el usuario
         
        }
    })
    
    
   
    if(pass.value.length>=8 && pass.value!=""){ 
         
    fetch('http://localhost:5000/registro',
    {
        method:'POST',
        headers,
        // El cuerpo, es decir los valores que vamos a mandar
        body: `{
                "nombre":"${nombre.value}",
                "apellido":"${apellido.value}",
                "fecha":"${fecha.value}",
                "sexo":"${sexo.value}",
                "user":"${usuario.value}",
                "password":"${pass.value}",
                "telefono":"${telefono.value}"
                }`
    })
    .then(response => response.json())
    .then(
        result => {
            console.log('Success:', result);
            nombre.value=''
            apellido.value=''
            fecha.value=''
            sexo.value=''
            usuario.value=''
            pass.value=''
            telefono.value=''
            alert('Usuario Creado')
          }
    )
    .catch(
        error => {
            console.error('Error:', error);
            nombre.value=''
            apellido.value=''
            fecha.value=''
            sexo.value=''
            usuario.value=''
            pass.value=''
            telefono.value=''
            alert('Hubo un error creando usuario')
          }
    )
    
        }
        else{
            alert("La contraseña debe mantener al menos 8 caracteres")
        }
      
    
}
// Funcion para Iniciar Sesion
function IniciarSesion(){
    let usuario = document.getElementById("iuser");
    let pass = document.getElementById("ipass");
    if(usuario.value=="admin" && pass.value=="1234"){
        alert(`Bienvenido Herbert`)
                window.location.href='../admin/inicio.html'
    }
    else{
        
        fetch(`http://localhost:5000/login/${usuario.value}/${pass.value}`)
        // Convirtiendo de string a texto
        .then(response => response.json())
        .then(data => {
            
            if(data.nombre=="false"){
                fetch(`http://localhost:5000/loginmedico/${usuario.value}/${pass.value}`) //Buscando doctores
                // Convirtiendo de string a texto
                .then(response => response.json())
                .then(data => {
                    
                    if(data.nombre=="false"){
                        fetch(`http://localhost:5000/loginenfermera/${usuario.value}/${pass.value}`) //Buscando enfermeras
                        // Convirtiendo de string a texto
                        .then(response => response.json())
                        .then(data => {
                            
                            if(data.nombre=="false"){
                            alert("Verifique sus iniciales")
                               usuario.value='';
                               pass.value='';
                            }else{
                                alert(`Bienvenido enfermera(o): ${data.nombre}`)
                                
                            }
                        })
                       
                    }else{
                        alert(`Bienvenido doctor(a): ${data.nombre}`)
                        
                    }
                })
               
            }else{
                alert(`Bienvenido ${data.nombre}`)
                
            }
        })
        
        }
        
    }
  
