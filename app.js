let productsArray = []
let cart = []

// Create an object product
let createProduct = (image, title, description, price, id) =>{
    return product = {
        image: image,
        title: title,
        description: description,
        price: price,
        id: id
    }
}

// add product to system, register a new producto
let addProduct = (product) => {
    productsArray.push(product);
}

/* this function to delete a product is pending
let removeProduct = (product) =>{
    productsArray.forEach(product=>{
        if(product.name = product){
            productsArray.pop()
        }
    })    
}
*/

// create an article to add to DOM with product's data 
function createProductDOM(product){

    let div = document.createElement("div")
    div.setAttribute("class", "card")
    div.style.width = "18rem"

    let image = document.createElement("img")
    image.setAttribute("src", product.image)
    image.setAttribute("class", "card-img-top")
    div.append(image)

    let div2 = document.createElement("div")
    div2.setAttribute("class", "card-body")
    div.append(div2)

    let h5 = document.createElement("h5")
    h5.setAttribute("class", "card-title")
    h5.innerHTML = product.title
    div2.append(h5)

    let p = document.createElement("p")
    p.setAttribute("class", "card-text")
    p.innerHTML = product.description
    div2.append(p)

    let price = document.createElement("h3")
    price.innerHTML = "$ " + product.price
    div2.append(price)

    let button = document.createElement("button")
    button.setAttribute("class", "btn btn-primary")
    button.innerHTML = "Add"
    div2.append(button)


    /* // esto es boostrap
    <div class="card" style="width: 18rem;">
        <img alt="" src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    */

    /* // esto era lo que habia hecho que funcionaba

    let article = document.createElement("article")

    let image = document.createElement("img")
    image.setAttribute("src", product.image)

    let title = document.createElement("h3")
    title.innerHTML = product.title

    let description = document.createElement("p")
    description.innerHTML = product.description

    let price = document.createElement("h3")
    price.innerHTML = product.price

    let button = document.createElement("button")
    //button.setAttribute("value", "Add cart")
    button.innerHTML = "Add"
    
    article.append(image)
    article.append(title)
    article.append(description)
    article.append(price)
    article.append(button)
    */

    button.addEventListener("click", ()=> {
        console.log("agrego al carrito");
        let productsCart = document.getElementById("products-cart");
        productsCart.innerHTML = ""
        addItemToCart(product)
        showProductsCart()
    })

    return div
}

// show all products registered 
function showProducts(){
    let productsList = document.getElementById("products-list");
    productsArray.forEach(product =>{       
        let article = createProductDOM(product)
        productsList.append(article)
    })
}

// "registering" new products
addProduct(createProduct("https://www.tradeinn.com/f/13816/138163315/samsung-monitor-c27r500-27-full-hd-led-curvo-60hz.jpg", "Monitor Samsung 27", "Monitor gamer 144 hz", 3000, 1))
addProduct(createProduct("https://http2.mlstatic.com/D_NQ_NP_908593-MLA49420869607_032022-O.webp","Notebook Asus", "Notebook gamer i7 9800k 144 hz", 7000, 2))
addProduct(createProduct("https://http2.mlstatic.com/D_NQ_NP_675916-MLA40762447172_022020-O.webp","Auriculares Hyper", "inalambricos con bluetooth", 1000, 3))
addProduct(createProduct("https://http2.mlstatic.com/D_NQ_NP_631521-MLA48039475493_102021-O.webp","Motorola EDGE", "Smartphone 8bg 128gb 6 pulgadas", 5400, 4))
addProduct(createProduct("https://http2.mlstatic.com/D_NQ_NP_730066-MLU71709925107_092023-O.webp","Motorola g52", "Smartphone 8bg 128gb 6 pulgadas", 2400, 5))
addProduct(createProduct("https://www.venex.com.ar/products_images/1547144217_big_hxmc004b.jpg", "Mouse Hyper", "Mouse gamer inalambrico rojo", 400, 6))
addProduct(createProduct("https://m.media-amazon.com/images/I/51XA-n2E0PL.jpg", "Iphone 11", "Smartphone 10bg 128gb 7 pulgadas", 5400, 7))
addProduct(createProduct("https://www.multipoint.com.ar/Image/0/750_750-Presentaci%C3%B3n1.png","Smart Tv Samsung", "55 pulgadas 8gb", 8400, 8))
addProduct(createProduct("https://photos5.appleinsider.com/gallery/24782-32794-27-inch-imac-5k-high-sierra-l.jpg","Apple mac", "All in one 8bg 2tb 27 pulgadas", 42400, 9))
addProduct(createProduct("https://cdn03.ciceksepeti.com/cicek/kcm23373088-1/XL/ikinci-el-huawei-p40-pro-256gb-mavi-12-ay-hb-bilisim-garantili-ikinci-el-kcm23373088-1-5e25ea763d52471fa38c78c4a412c163.jpg", "Xiaome P40", "Smartphone 8bg 128gb 8 pulgadas", 7800, 10))
addProduct(createProduct("https://m.media-amazon.com/images/I/61zjj2sgXML._SL1500_.jpg","Xbox ONE", "consola 8bg 8tb slim", 10400, 11))
addProduct(createProduct("https://buenosairesimport.com/3885-large_default/playstation-5.jpg","PlayStation 5", "consola 32bg 1tb slim", 7600, 12))
addProduct(createProduct("https://http2.mlstatic.com/D_Q_NP_798586-MLA40076060236_122019-O.webp", "PlayStation 4", "consola 8bg 500gb", 40000, 13))
addProduct(createProduct("https://http2.mlstatic.com/D_Q_NP_885053-MLA32706766859_102019-O.webp", "PlayStation 3", "consola 250gb slim", 22400, 14))
addProduct(createProduct("https://i5.walmartimages.com/seo/Restored-Sony-PlayStation-2-PS2-Slim-Console-Black-Matching-Controller-Power-and-Cables-Refurbished_dbaccc62-1405-45c3-a9e0-82eee8b1039d_1.ccbb04536b1daeab75e8248b0a1ac1e6.jpeg", "PlayStation 2", "consola slim", 14000, 15))
addProduct(createProduct("https://sm.ign.com/ign_es/screenshot/default/playstation-one-original_f2b2.jpg", "PlayStation 1", "consola orginal", 400, 16))
addProduct(createProduct("https://www.shiftdigital.com.ar/images/Sentey%20Gabinete%20P20%20RGB%20Acrilico%20PM20-SF%202.jpg", "Gabinete Sentey", "gamer led", 2900, 17))
addProduct(createProduct("https://http2.mlstatic.com/D_NQ_NP_982656-MLA44356783302_122020-O.webp", "RTX 2060", "6GB OC", 37300, 18))
addProduct(createProduct("https://acdn.mitiendanube.com/stores/001/718/448/products/1000x1000-lamprgb11-7c7f168c1b4a3aa44816602635729288-640-0.jpg", "Lampara led", "3 tonos", 400, 19))
addProduct(createProduct("https://m.media-amazon.com/images/I/61my+L5GsFL.jpg", "i5 5600", "3.5ghz", 700, 20))
addProduct(createProduct("https://http2.mlstatic.com/D_NQ_NP_649062-MLA42097391732_062020-O.webp", "Tablet Noblex", "8bg 128gb 6 pulgadas", 9400, 21))


console.log(productsArray);

showProducts()


/*
cart.push(createProduct("Monitor Samsung 27", "Monitor gamer 144 hz", 3000, 1))
cart.push(createProduct("Notebook Asus", "Notebook gamer i7 9800k 144 hz", 7000, 2))
*/

function createItemCart(product){
    let section = document.createElement("section")
    section.setAttribute("class", "item-cart")

    let image = document.createElement("img")
    image.setAttribute("src", product.image)
    image.setAttribute("class", "imag-cart")
    
    let title = document.createElement("strong")
    title.innerHTML = product.title

    let price = document.createElement("h3")
    price.innerHTML = "$ " + product.price

    /*
    let description = document.createElement("p")
    description.innerHTML = product.description

    let button = document.createElement("button")
    //button.setAttribute("value", "Add cart")
    button.innerHTML = "Add"
    */

    section.append(image)
    section.append(title)
    section.append(price)

    return section;
}

// add a product registered to cart shopping
function addItemToCart(product){
    cart.push(product)
}

function showProductsCart(){
    let productsCart = document.getElementById("products-cart");

    if(cart.length > 0){
        cart.forEach(product =>{        
            let item = createItemCart(product)
            productsCart.append(item)
        })
    }
    else{
        let message = document.createElement("h3")
        message.innerHTML = "Shopping cart is empty"
        productsCart.append(message)
    }
}

showProductsCart()
