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
csv_file_path = r'D:\extra\gpus.csv' #caambia esto

# Cargar los productos desde el CSV
products = load_products_from_csv(csv_file_path)

app = Flask(__name__)

# Ruta para obtener productos con paginación y estructura de datos
@app.route('/products', methods=['GET'])
def get_products():
    # Parámetros de paginación
    page = int(request.args.get('page', 1))
    per_page = int(request.args.get('per_page', 10))

    # Calcular índices de paginación
    start = (page - 1) * per_page
    end = start + per_page

    # Productos paginados
    paginated_products = products[start:end]
    
    # Simulación de metadatos de paginación
    total_products = len(products)
    total_pages = (total_products + per_page - 1) // per_page

    response = {
        "data": [product.to_dict() for product in paginated_products],
        "pagination": {
            "total_items": total_products,
            "total_pages": total_pages,
            "current_page": page,
            "items_per_page": per_page
        }
    }

    return jsonify(response)

# Ruta para buscar productos según múltiples parámetros específicos
@app.route('/products/search', methods=['GET'])
def search():
    search_params = {
        'modelo': request.args.get('modelo', '').lower(),
        'fabricante': request.args.get('fabricante', '').lower(),
        'marca': request.args.get('marca', '').lower(),
        'memoria': request.args.get('memoria', '').lower(),
        'stock': request.args.get('stock', '').lower()
    }
    
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
    return jsonify(search_result)

# Ruta para vender un producto, se espera un JSON con product_id y quantity
@app.route('/products/sell', methods=['POST'])
def sell_product():
    data = request.get_json()
    product_id = data.get('product_id')
    quantity = data.get('quantity')

    for product in products:
        if product.id == product_id:
            if quantity <= product.stock:
                product.stock -= quantity
                return jsonify({
                    'message': f"Se vendieron {quantity} unidades de {product.modelo}. Stock actualizado: {product.stock}"
                })
            else:
                return jsonify({
                    'error': f"No se puede vender {quantity} unidades. Solo quedan {product.stock} unidades en stock."
                }), 400
    return jsonify({'error': f'Producto con ID {product_id} no existe.'}), 404

if __name__ == '__main__':
    app.run(debug=True)
