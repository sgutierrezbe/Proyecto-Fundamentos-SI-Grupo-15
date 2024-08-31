import random as ran

with open("BD/producto.txt", "w") as prod:
    for i in range(3,82):
        stock = ran.randrange(0,10)
        precio = ran.randrange(250,500)
        text = f"{i} {precio} {stock}\n" 
        prod.write(text)
