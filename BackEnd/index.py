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

@app.route('/obtenerusuarios')
def obtenerusuarios():
    return gestor.obtener_usuarios()

@app.route('/obtenermedicos')
def obtenermedicos():
    return gestor.obtener_medicos()

@app.route('/obtenerenfermeras')
def obtenerenfermeras():
    return gestor.obtener_enfermeras()

@app.route('/obtenermedicamentos')
def obtenermedicamentos():
    return gestor.obtener_medicamentos()

@app.route('/login/<user>/<password>')
def login(user,password):
    return gestor.iniciar_sesion(user,password)

@app.route('/registro',methods=['POST'])
def registrar():
    dato = request.json
    gestor.registrar_usuario(dato['nombre'],dato['apellido'],dato['fecha'],dato['sexo'],dato['user'],dato['password'],dato['telefono'])    
    return '{"data":"Creado"}'





#INICIAR EL SERVIDOR

if __name__ == "__main__":
    app.run(host="0.0.0.0",debug=True)