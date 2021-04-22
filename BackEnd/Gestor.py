from Usuarios import Usuario
from Medicos import Medico
from Enfermeras import Enfermera
from Medicamentos import Medicamento
import json

class Gestor:
    def __init__(self):
        self.usuarios =[]
        self.medicos=[]
        self.enfermeras=[]
        self.medicamentos=[]
        
        self.usuarios.append(Usuario("Herbert","Reyes","None","M","admin","1234","m"))
        self.usuarios.append(Usuario("Alina","Starkov","None","F","invocasol","ben"," "))
        #Medicos
        self.medicos.append(Medico("Shaun","Murphy","12/05/1997","M","shaunm","abcd","Cirujano",""))
        #Enfermeras
        self.enfermeras.append(Enfermera("Amy","Duncan","10/08/1977","F","amyd","charlie","45968745"))
        #Medicamentoss
        self.medicamentos.append(Medicamento("Loratadina","10.00","Antialérgico","100"))
        
    #Create

    #Read
    def obtener_usuarios(self):
        print("Llegué")
        return json.dumps([ob.__dict__ for ob in self.usuarios])
    
    def obtener_medicos(self):
        return json.dumps([ob.__dict__ for ob in self.medicos])

    def obtener_enfermeras(self):
        return json.dumps([ob.__dict__ for ob in self.enfermeras])
    
    def obtener_medicamentos(self):
        return json.dumps([ob.__dict__ for ob in self.medicamentos])
    #Update

    #Delete

    #Inciarsesion
    def iniciar_sesion(self,user,password): 
        for x in self.usuarios:
            if x.password==password and x.user == user:
                return json.dumps(x.__dict__)
        return '{"nombre":"false"}'

    #Registrar
    def registrar_usuario(self,nombre,apellido,fecha,sexo,user,password,telefono):
        self.usuarios.append(Usuario(nombre,apellido,fecha,sexo,user,password,telefono))