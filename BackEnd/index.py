#Importaciones de Flask

from flask import Flask,request,jsonify
from flask_cors import CORS
from Gestor import Gestor

#Crear la app

app = Flask(__name__)
app.config["DEBUG"] = True

CORS(app)

gestor = Gestor()

# EndPoints
@app.route('/',methods=['GET'])
def home():
    return 'SERVER IS WORKING!!'
#Obtiene pacientes
@app.route('/obtenerusuarios')
def obtenerusuarios():
    return gestor.obtener_usuarios()
#Obtiene medicos
@app.route('/obtenermedicos')
def obtenermedicos():
    return gestor.obtener_medicos()
#Obtiene enfermeras
@app.route('/obtenerenfermeras')
def obtenerenfermeras():
    return gestor.obtener_enfermeras()
#Obtiene medicamentos
@app.route('/obtenermedicamentos')
def obtenermedicamentos():
    return gestor.obtener_medicamentos()
#Login de pacientes
@app.route('/login/<user>/<password>')
def login(user,password):
    return gestor.iniciar_sesion(user,password)
#Login de medicos
@app.route('/loginmedico/<user>/<password>')
def loginmedico(user,password):
    return gestor.iniciar_sesionmedico(user,password)
#Login de enfermeras
@app.route('/loginenfermera/<user>/<password>')
def loginenfermera(user,password):
    return gestor.iniciar_sesionenfermera(user,password)
#Busca un paciente
@app.route('/pacientes/<user>')
def buscapacientes(user):
    return gestor.buscar_pacientes(user)       

@app.route('/registro',methods=['POST'])
def registrar():
    dato = request.json
    gestor.registrar_usuario(dato['nombre'],dato['apellido'],dato['fecha'],dato['sexo'],dato['user'],dato['password'],dato['telefono'])    
    return '{"data":"Creado"}'

@app.route('/cargapacientes',methods=['POST'])
def cargap():
    dato = request.json
    gestor.cargamasiva(dato['data'])
    return '{"data":"Cargados"}'


#INICIAR EL SERVIDOR

if __name__ == "__main__":
    app.run(host="0.0.0.0",debug=True)