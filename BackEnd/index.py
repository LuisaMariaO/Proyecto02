#Importaciones de Flask

from flask import Flask,request,jsonify
from flask_cors import CORS
from Gestor import Gestor
#from Gestor import Gestor
#Crear la app

app = Flask(__name__)
app.config["DEBUG"] = True

CORS(app)
gestor = Gestor()
#gestor = Gestor()

# EndPoints
@app.route('/login/<user>/<password>')
def login(user,password):
    return gestor.iniciar_sesion(user,password)

@app.route('/',methods=['GET'])
def home():
    return 'SERVER IS WORKING!!'




#INICIAR EL SERVIDOR

if __name__ == "__main__":
    app.run(host="0.0.0.0",debug=True)