let headers = new Headers()
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('GET', 'POST', 'OPTIONS','PUT','DELETE');
let padecimiento = document.getElementById("padecimiento")
function recetar(){
    fetch(`http://34.71.5.108:5000/padecimiento`, {
            method: 'POST',
            headers,
            body: `{
            "nombre":"${padecimiento.value}"
                                        
            }`,
            })
            .then(response => response.json())
            .then(result => {
            console.log('Success:', result);
            print(document.getElementById('Hola'))
                                   
                                  })
}