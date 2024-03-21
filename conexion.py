import mysql.connector as mysql #pip install mysql-connector-python

db = mysql.connect(user = "root", password = "", host = "localhost", database = "si_ecommerce") #conexion con bd
cursor = db.cursor()


cursor.execute("SHOW DATABASES") 
dbs = cursor.fetchall()
for i in dbs:
    print(i)

admin = "SELECT * FROM usuario WHERE rol = 'admin'"
cursor.execute(admin)
admin = cursor.fetchall()
for i in admin:
    print(i)