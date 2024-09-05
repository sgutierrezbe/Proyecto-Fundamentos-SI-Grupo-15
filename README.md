# Proyecto-Fundamentos-SI-Grupo-15

Se hara seguimiento de las versiones del programa donde se hara un modulo de registro de inventario, realizado en Python, un frontend de React JS, y base de datos en SQL

## Como correr el proyecto

### Back-end

asegurate de que tienes instalado flask y flask-cors con los siguientes commandos:

```
pip install flask
pip install flask-cors
```

cambia la ruta del archivo csv en la linea 42 por la ruta en tu computadora completa (ej:csv_file_path = r'C:\Unal tareas\FDSI\Proyecto-Fundamentos-SI-Grupo-15\Backend python\gpus.csv')

```
csv_file_path = r'' // pega donde esta ubicado el archivo csv
```

endpoints:
GET: /products
POST: /changeStock

### Front-end

entra en la carpeta de /frontend-ecommerce en la terminal y corre estos comandos para instalar los npm y iniciar el localhost (asegurarse de que tiene node instalado en una version reciente). El backend debe de estar ejecutandose para abrir correctamente el frontend.

```
npm i
npm run dev
```

entra en el localhost que dice en la consola en tu navegador (usualmente localhost:5173)

para probrar la aplicación entra los datos en el login:

indentifier: test@test.com
password: secret
