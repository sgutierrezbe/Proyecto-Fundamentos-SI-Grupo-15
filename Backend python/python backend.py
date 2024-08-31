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

# Lista de productos en memoria
products = [
    Product(1, "GTX 1060", "NVIDIA", "ASUS", "6GB", 10),
    Product(2, "RTX 3080", "NVIDIA", "MSI", "10GB", 5),
    Product(3, "RX 6800", "AMD", "Sapphire", "16GB", 8)
]

app = Flask(__name__)



# Ruta para obtener todos los productos en JSON
@app.route('/products', methods=['GET'])
def get_products():
    return jsonify([product.to_dict() for product in products])

# Ruta para buscar productos según un término de búsqueda
@app.route('/products/search', methods=['GET'])
def search():
    search_term = request.args.get('term', '').lower()
    search_result = [
        product.to_dict() for product in products
        if search_term in product.modelo.lower() or
           search_term in product.fabricante.lower() or
           search_term in product.marca.lower() or
           search_term in product.memoria.lower() or
           search_term in str(product.stock).lower()
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