let products = [
    {
        src:'https://fora.kz/images/content/products/631161/apple-iphone-14-128gb-starlight_63202fa5f1602.jpg',
        title: 'IPhone 14', 
        description: 'IPhone 14 128Gb black' , 
        price: 100000,  
        isInStock: false
    },
    {
        src:'https://a-cdn.lakestone.ru/image/cache/catalog/Faber%20Black/IMG_7276-600x600.jpg',
        title: 'Сумка', 
        description: 'Сумка black' , 
        price: 10000 ,  
        isInStock: true
    },
    {
        src:'https://extreme-look.ru/upload/iblock/14b/f9uj5zo5ktvzhbqlrd061ektm6r5e34w/ff943c05-bf24-11e9-82e6-305a3a7bbf1c_2c2e4804-2104-11ec-835a-305a3a7bbf1c.jpg',
        title: 'Платье', 
        description: 'Платье black M' , 
        price: 23000 ,  
        isInStock: false
    }
];



function createProductCard(product, index) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    const imgElement = document.createElement('img');
    imgElement.src = product.src;

    const titleElement = document.createElement('h3');
    titleElement.textContent = product.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = product.description;

    const priceElement = document.createElement('p');
    priceElement.textContent = `Price: ${product.price} тг`;

    //отображения статуса isInStock
    const stockStatusElement = document.createElement('p');
    stockStatusElement.textContent = `In Stock: ${product.isInStock ? 'Yes' : 'No'}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        products.splice(index, 1);
        updateLocalStorage();
        initShop();
    });

    cardElement.appendChild(imgElement);
    cardElement.appendChild(titleElement);
    cardElement.appendChild(descriptionElement);
    cardElement.appendChild(priceElement);
    cardElement.appendChild(stockStatusElement);
    cardElement.appendChild(deleteButton);

    return cardElement;
}

const shopElement = document.getElementById('shop');

function initShop() {
    shopElement.innerHTML = '';

    products.forEach((product, index) => {
        const cardElement = createProductCard(product, index);
        shopElement.appendChild(cardElement);
    });
}

function updateLocalStorage() {
    localStorage.setItem('products', JSON.stringify(products));
}

document.addEventListener('DOMContentLoaded', () => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
        products = JSON.parse(storedProducts);
    }

    initShop();
});

