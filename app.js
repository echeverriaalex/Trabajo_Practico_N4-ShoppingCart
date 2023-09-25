

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
addProduct(createProduct("Motorola g52", "Smartphone 8bg 128gb 6 pulgadas", 2400, 4))


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

