#se importa la libreria pandas
import pandas as pd
#se crea la clase producto con los datos del cvs
class Product:
    def __init__(self, id, modelo, fabricante, marca, memoria, stock):
        self.id = int(id)
        self.modelo = modelo
        self.fabricante = fabricante
        self.marca = marca
        self.memoria = memoria
        self.stock = int(stock)
    
    def __repr__(self):
        return f"Product(id={self.id}, modelo='{self.modelo}', fabricante='{self.fabricante}', marca='{self.marca}', memoria='{self.memoria}', stock={self.stock})"

#funcion que agarra el csv y lo convierte en una lista de instancias
def read_products_from_csv(filename):
    df = pd.read_csv(filename)
    products = [Product(row['id'], row['modelo'], row['fabricante'], row['marca'], row['memoria'], row['stock']) for index, row in df.iterrows()]
    return products
# se crea la dtb
filename = 'gpus.csv'
products = read_products_from_csv(filename)

#funcion para imprimir las database ordenadas
def print_database(products):
    for product in products:
        print(product)

#funcion que permite organizar los productos por id, nombre, modelo, memoria, fabricante o stock
def sort_products(products, key):
    return sorted(products, key=lambda x: getattr(x, key))

#funcioon que permite buscar segun cualquier termino de busqueda, nombre, modelo, memora etc
def search_products(products, search_term):
    search_term = search_term.lower()
    return [
        product for product in products
        if search_term in product.modelo.lower() or
           search_term in product.fabricante.lower() or
           search_term in product.marca.lower() or
           search_term in product.memoria.lower() or
           search_term in str(product.stock).lower()
    ]
# funcion para vender un producto reduciendo su stock, por un valor menor al stock actual
def sell_product(products, product_id, quantity):
    for product in products:
        if product.id == product_id:
            if quantity <= product.stock:
                product.stock -= quantity
                print(f"se vendieron {quantity} unidades de {product.modelo}. stock actualizado: {product.stock}")
            else:
                print(f"Error: no se puede vener {quantity} unidades. Solo quedan {product.stock} unidades en stock.")
            return
    print(f"Error: producto con ID {product_id} no existe.")

# Imprime todo el database
print("Database:")
print_database(products)

#ejemplo de busqueda en el database por terminos
search_term = '6GB'
search_result = search_products(products, search_term)
print(f"Resultados de busqueda para'{search_term}':")
print_database(search_result)

#ejemplo de venta
product_id_to_sell = 18
quantity_to_sell = 5

sell_product(products, product_id_to_sell, quantity_to_sell)