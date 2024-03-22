import mysql.connector as mysql #pip install mysql-connector-python

db = mysql.connect(user = "root", password = "", host = "localhost", database = "si_ecommerce") #conexion con bd
cursor = db.cursor()

columnas = "SHOW COLUMNS FROM usuario"
cursor.execute(columnas)
columnas = cursor.fetchall()
for i in columnas:
    print(i)
print("")

#login
usuario = "SELECT idusuario, nombre, correo, rol, direccion FROM usuario WHERE correo = %s AND password = %s"
correo = "admin@gmail.com" #se cambia por el input del form de login
password = "admin123"
cursor.execute(usuario,(correo,password))
usuario = cursor.fetchall()
print(usuario)

cursor.close()
db.close()