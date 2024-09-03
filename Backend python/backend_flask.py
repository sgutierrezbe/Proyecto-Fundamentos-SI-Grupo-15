import csv
from flask import Flask, jsonify, request

# Se crea la clase Producto
class Product:
    def __init__(self, id, modelo, fabricante, marca, memoria, stock):
        self.id = int(id)
        self.modelo = modelo
        self.fabricante = fabricante
        self.marca = marca
        self.memoria = memoria
        self.stock = int(stock)
    
    def to_dict(self):
        return {
            'id': self.id,
            'modelo': self.modelo,
            'fabricante': self.fabricante,
            'marca': self.marca,
            'memoria': self.memoria,
            'stock': self.stock
        }

# Función para cargar productos desde un archivo CSV
def load_products_from_csv(file_path):
    products = []
    with open(file_path, mode='r', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        for row in reader:
            product = Product(
                id=row['id'],
                modelo=row['modelo'],
                fabricante=row['fabricante'],
                marca=row['marca'],
                memoria=row['memoria'],
                stock=row['stock']
            )
            products.append(product)
    return products

# Ruta al archivo CSV
csv_file_path = r'C:\Unal tareas\FDSI\Proyecto-Fundamentos-SI-Grupo-15\Backend python\gpus.csv' #caambia esto

# Cargar los productos desde el CSV
products = load_products_from_csv(csv_file_path)

app = Flask(__name__)

@app.route('/products', methods=['GET'])
def search():
    search_params = {
        'modelo': request.args.get('modelo', '').lower(),
        'fabricante': request.args.get('fabricante', '').lower(),
        'marca': request.args.get('marca', '').lower(),
        'memoria': request.args.get('memoria', '').lower(),
        'stock': request.args.get('stock', '').lower()
    }
    
    # Parámetros de paginación
    page = int(request.args.get('page', 1))
    per_page = int(request.args.get('per_page', 10))

    def memory_compare(product_memory, search_memory):
        if not search_memory:
            return True
        product_value = int(''.join(filter(str.isdigit, product_memory)))
        search_value = int(''.join(filter(str.isdigit, search_memory)))
        return product_value <= search_value

    search_result = [
        product.to_dict() for product in products
        if all(
            (attr != 'memoria' and search_term in str(getattr(product, attr)).lower()) or
            (attr == 'memoria' and memory_compare(getattr(product, attr), search_term))
            for attr, search_term in search_params.items()
            if search_term  # Solo considera los parámetros no vacíos
        )
    ]

    # Calcular índices de paginación
    total_products = len(search_result)
    total_pages = (total_products + per_page - 1) // per_page
    start = (page - 1) * per_page
    end = start + per_page

    # Productos paginados
    paginated_search_result = search_result[start:end]

    response = {
        "data": paginated_search_result,
        "pagination": {
            "total_items": total_products,
            "total_pages": total_pages,
            "current_page": page,
            "items_per_page": per_page
        }
    }

    return jsonify(response)

# Ruta para cambiar el stock de productos, se espera un JSON con un array de objetos con id y stock
@app.route('/changeStock', methods=['POST'])
def change_stock():
    data = request.get_json()
    
    if not isinstance(data, list):
        return jsonify({'error': 'Se espera un array de objetos'}), 400

    results = []
    for item in data:
        product_id = item.get('id')
        new_stock = item.get('stock')

        if product_id is None or new_stock is None:
            results.append({'error': f'Objeto inválido: {item}'})
            continue

        product = next((p for p in products if p.id == product_id), None)
        if product:
            old_stock = product.stock
            product.stock = new_stock
            results.append({
                'id': product_id,
                'modelo': product.modelo,
                'old_stock': old_stock,
                'new_stock': new_stock
            })
        else:
            results.append({'error': f'Producto con ID {product_id} no existe.'})

    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)
