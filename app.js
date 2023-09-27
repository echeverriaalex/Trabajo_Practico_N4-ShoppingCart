

let productsArray = []

let createProduct = (title, description, price, id) =>{
    return product = {
        title: title,
        description: description,
        price: price,
        id: id
    }
}

let addProduct = (product) => {
    productsArray.push(product);
}

let removeProduct = (product) =>{
    productsArray.forEach(product=>{
        if(product.name = product){
            productsArray.pop()
        }
    })    
}



function showProducts(productsArray){
    let productsList = document.getElementById("products-list");

    productsArray.forEach(product =>{
        let article = document.createElement("article")
        
        let title = document.createElement("h3")
        title.innerHTML = product.title

        let description = document.createElement("p")
        description.innerHTML = product.description

        let price = document.createElement("h3")
        price.innerHTML = product.price

        let button = document.createElement("button")
        //button.setAttribute("value", "Add cart")
        button.innerHTML = "Add"

        article.append(title)
        article.append(description)
        article.append(price)
        article.append(button)

        productsList.append(article)
    })
}

addProduct(createProduct("Monitor Samsung 27", "Monitor gamer 144 hz", 3000, 1))
addProduct(createProduct("Notebook Asus", "Notebook gamer i7 9800k 144 hz", 7000, 2))
addProduct(createProduct("Auriculares Hyper", "inalambricos con bluetooth", 1000, 3))
addProduct(createProduct("Motorola EDGE", "Smartphone 8bg 128gb 6 pulgadas", 5400, 4))
addProduct(createProduct("Motorola g52", "Smartphone 8bg 128gb 6 pulgadas", 2400, 5))
addProduct(createProduct("Mouse Hyper", "Mouse gamer inalambrico rojo", 400, 6))
addProduct(createProduct("Iphone 11", "Smartphone 10bg 128gb 7 pulgadas", 5400, 7))
addProduct(createProduct("Smart Tv Samsung", "55 pulgadas 8gb", 8400, 8))
addProduct(createProduct("Apple mac", "All in one 8bg 2tb 27 pulgadas", 42400, 9))
addProduct(createProduct("Xiaome P40", "Smartphone 8bg 128gb 8 pulgadas", 7800, 10))
addProduct(createProduct("Xbox ONE", "consola 8bg 8tb slim", 10400, 11))
addProduct(createProduct("PlayStation 5", "consola 32bg 1tb slim", 7600, 12))
addProduct(createProduct("PlayStation 4", "consola 8bg 500gb", 40000, 13))
addProduct(createProduct("PlayStation 3", "consola 250gb slim", 22400, 14))
addProduct(createProduct("PlayStation 2", "consola slim", 14000, 15))
addProduct(createProduct("PlayStation 1", "consola orginal", 400, 16))
addProduct(createProduct("Gabinete Sentey", "gamer led", 2900, 17))
addProduct(createProduct("RTX 2060", "6GB OC", 37300, 18))
addProduct(createProduct("Lampara led", "3 tonos", 400, 19))
addProduct(createProduct("i5 5600", "3.5ghz", 700, 20))
addProduct(createProduct("Tablet Noglex", "8bg 128gb 6 pulgadas", 9400, 21))


console.log(productsArray);

showProducts(productsArray)

let cart = []

cart.push(createProduct("Monitor Samsung 27", "Monitor gamer 144 hz", 3000, 1))
cart.push(createProduct("Notebook Asus", "Notebook gamer i7 9800k 144 hz", 7000, 2))

function showProductsCart(productsArray){
    let productsCart = document.getElementById("products-cart");

    productsArray.forEach(product =>{
        let section = document.createElement("section")
        section.setAttribute("class", "item-cart")
        
        let title = document.createElement("strong")
        title.innerHTML = product.title

        let price = document.createElement("h3")
        price.innerHTML = product.price

        /*
        let description = document.createElement("p")
        description.innerHTML = product.description

        

        let button = document.createElement("button")
        //button.setAttribute("value", "Add cart")
        button.innerHTML = "Add"

        */

        section.append(title)
        section.append(price)

        productsCart.append(section)
    })
}

//products-cart

showProductsCart(cart)

