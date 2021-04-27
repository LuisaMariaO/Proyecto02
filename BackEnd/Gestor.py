from Usuarios import Usuario
from Medicos import Medico
from Enfermeras import Enfermera
from Medicamentos import Medicamento
import json
import re
#Aloja el paciente a ver, modificar o eliminar
vpaciente=''  
#Aloja el medico a ver, modificar o eliminar
vmedico=''
#Aloja la enfermera a ver, modificar o eliminar
venfermera=''
#Aloja el medicamento a ver, modificar o eliminar
vmedicamento=''
class Gestor:
      
    def __init__(self):
        self.usuarios =[]
        self.medicos=[]
        self.enfermeras=[]
        self.medicamentos=[]
        
        self.usuarios.append(Usuario("Herbert","Reyes","None","M","admin","1234","m"))
        self.usuarios.append(Usuario("Alina","Starkov","None","F","invocasol","ben"," "))
        self.usuarios.append(Usuario("Mal","Orskov","None","M","idiota","rastreador"," "))
        #Medicos
        self.medicos.append(Medico("Shaun","Murphy","12/05/1997","M","shaunm","abcd","Cirujano",""))
        #Enfermeras
        self.enfermeras.append(Enfermera("Amy","Duncan","10/08/1977","F","amyd","charlie","45968745"))
        #Medicamentoss
        self.medicamentos.append(Medicamento("Loratadina","10.00","Antialérgico","100"))

        #Usuario seleccionado
        
        
    #Create

    #Read
    def obtener_usuarios(self):
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

    def iniciar_sesionmedico(self,user,password): 
        for x in self.medicos:
            if x.password==password and x.user == user:
                return json.dumps(x.__dict__)
        return '{"nombre":"false"}'   

    def iniciar_sesionenfermera(self,user,password): 
        for x in self.enfermeras:
            if x.password==password and x.user == user:
                return json.dumps(x.__dict__)
        return '{"nombre":"false"}'       

    #Registrar pacientes
    def registrar_usuario(self,nombre,apellido,fecha,sexo,user,password,telefono):
        self.usuarios.append(Usuario(nombre,apellido,fecha,sexo,user,password,telefono))
    #Registrar medicos
    def registrar_medico(self,nombre,apellido,fecha,sexo,user,password,especialidad,telefono):
        self.medicos.append(Medico(nombre,apellido,fecha,sexo,user,password,especialidad,telefono))
    #Registrar enfermeras
    def registrar_enfermera(self,nombre,apellido,fecha,sexo,user,password,telefono):
        self.enfermeras.append(Enfermera(nombre,apellido,fecha,sexo,user,password,telefono))
    #Registrar medicamentos
    def registrar_medicamento(self,nombre,precio,descripcion,cantidad):
        self.medicamentos.append(Medicamento(nombre,precio,descripcion,cantidad))         
    #Buscar pacientes
    def buscar_pacientes(self,user):
        for x in self.usuarios:
            if x.user==user:
                return json.dumps(x.__dict__)
        return '{"user":"false"}'    
    #Carga masiva de pacientes            
    def cargamasiva(self,data):
        hola = re.split('\n',data)
        print(hola[0])
        i=1
        while i < len(hola):
            texto = re.split(',',hola[i])
            self.registrar_usuario(texto[0],texto[1],texto[2],texto[3],texto[4],texto[5],texto[6])
            i = i+1 
    #Carga masiva médicos
    def cargamasivamed(self,data):
        hola = re.split('\n',data)
        print(hola[0])
        i=1
        while i < len(hola):
            texto = re.split(',',hola[i])
            self.registrar_medico(texto[0],texto[1],texto[2],texto[3],texto[4],texto[5],texto[6],texto[7])
            i = i+1 
    #Carga masiva enfermeras
    def cargamasivaenf(self,data):
        hola = re.split('\n',data)
        print(hola[0])
        i=1
        while i < len(hola):
            texto = re.split(',',hola[i])
            self.registrar_enfermera(texto[0],texto[1],texto[2],texto[3],texto[4],texto[5],texto[6])
            i = i+1 
    #Carga masiva medicamentos
    def cargamasivamedi(self,data):
        hola = re.split('\n',data)
        print(hola[0])
        i=1
        while i < len(hola):
            texto = re.split(',',hola[i])
            self.registrar_medicamento(texto[0],texto[1],texto[2],texto[3])
            i = i+1 
    #Dando valor a usuario seleccionado
    def setPaciente(self,paciente):
        global vpaciente
        vpaciente=paciente
        
    def getPaciente(self):
        global vpaciente
        for x in self.usuarios:
            if x.user==vpaciente:
                return json.dumps(x.__dict__)
        return '{"user":"false"}'
    def actualizar_usuario(self,usuarioviejo,nombre,apellido,fecha,sexo,usuarionuevo,password,telefono):
        for x in self.usuarios:
            if x.user==usuarioviejo:
                self.usuarios[self.usuarios.index(x)]=Usuario(nombre,apellido,fecha,sexo,usuarionuevo,password,telefono)
                return True
        return False
         
    def eliminar_usuario(self,user):
        print("Hola")
        for x in self.usuarios:
            if x.user==user:
                self.usuarios.remove(x)
                return True
        return False     
    #Update y delete de médicos
    #Dando valor a paciente seleccionado
    def setMedico(self,medico):
        global vmedico
        vmedico=medico
        
    def getMedico(self):
        global vmedico
        for x in self.medicos:
            if x.user==vmedico:
                return json.dumps(x.__dict__)
        return '{"user":"false"}'
    def actualizar_medico(self,usuarioviejo,nombre,apellido,fecha,sexo,usuarionuevo,password,especialidad,telefono):
        for x in self.medicos:
            if x.user==usuarioviejo:
                self.medicos[self.medicos.index(x)]=Medico(nombre,apellido,fecha,sexo,usuarionuevo,password,especialidad,telefono)
                return True
        return False
         
    def eliminar_medico(self,user):
        for x in self.medicos:
            if x.user==user:
                self.medicos.remove(x)
                return True
        return False     

    #Update y delete de enfermeras
    #Dando valor a paciente seleccionado
    def setEnfermera(self,enfermera):
        global venfermera
        venfermera=enfermera
        
    def getEnfermera(self):
        global venfermera
        for x in self.enfermeras:
            if x.user==venfermera:
                return json.dumps(x.__dict__)
        return '{"user":"false"}'
    def actualizar_enfermera(self,usuarioviejo,nombre,apellido,fecha,sexo,usuarionuevo,password,telefono):
        for x in self.enfermeras:
            if x.user==usuarioviejo:
                self.enfermeras[self.enfermeras.index(x)]=Enfermera(nombre,apellido,fecha,sexo,usuarionuevo,password,telefono)
                return True
        return False
         
    def eliminar_enfermera(self,user):
        for x in self.enfermeras:
            if x.user==user:
                self.enfermeras.remove(x)
                return True
        return False

    #Update y delete de medicamentos
    #Dando valor a medicamento seleccionado
    def setMedicamento(self,medicamento):
        global vmedicamento
        vmedicamento=medicamento
        
    def getMedicamento(self):
        global vmedicamento
        for x in self.medicamentos:
            if x.nombre==vmedicamento:
                return json.dumps(x.__dict__)
        return '{"nombre":"false"}'
    def actualizar_medicamento(self,nombreviejo,nombrenuevo,precio,descripcion,cantidad):
        for x in self.medicamentos:
            if x.nombre==nombreviejo:
                self.medicamentos[self.medicamentos.index(x)]=Medicamento(nombrenuevo,precio,descripcion,cantidad)
                return True
        return False
         
    def eliminar_medicamento(self,nombre):
        for x in self.medicamentos:
            if x.nombre==nombre:
                self.medicamentos.remove(x)
                return True
        return False                      