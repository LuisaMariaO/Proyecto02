from Usuarios import Usuario
import json

class Gestor:
    def __init__(self):
        self.usuarios =[]
        self.usuarios.append(Usuario("Herbert","Reyes",None,"Masculino","admin","1234",None))
    #Create

    #Read

    #Update

    #Delete

    #Inciarsesion
    def iniciar_sesion(self,user,password):
        for x in self.usuarios:
            if x.password==password and x.user ==user:
                return json.dumps(x.__dict__)
        return '{"nombre":"false"}'