let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.product');
let listCartHTML = document.querySelector('.listCart');
let iconCartSpan = document.querySelector('.icon-cart span');

let carts = [];
let listProduct = [];

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

if (listProductHTML != null) {
    listProductHTML.addEventListener('click', (event) => {
        let positionClick = event.target;
        if(positionClick.classList.contains('addCart')) {
            let product_id = new URLSearchParams(window.location.search).get('id');
            addToCart(product_id);
        }
    })
}

const addToCart = (product_id) => { 
    let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
    let id = 0;
    id = parseInt(product_id);
    let productDetail = listProduct.find(val => val.id === id);
    if (carts.length <= 0) {
        carts = [{
            product_id: product_id,
            quantity: 1,
            price: productDetail.price
        }]
    } else if(positionThisProductInCart < 0) {
        carts.push({
            product_id: product_id,
            quantity: 1,
            price: productDetail.price
        });
    } else {
        carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity + 1;
    }
    calculate();
    addCarttoMemory();
    addCarttoHTML();
}

const addCarttoMemory = () => {
    localStorage.setItem('cart', JSON.stringify(carts));
}

const addCarttoHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if(carts.length > 0){
        carts.forEach(cart => {
            totalQuantity = totalQuantity + cart.quantity;
            let newCart = document.createElement('div');
            newCart.classList.add('item');
            newCart.dataset.id = cart.product_id;
            let positionProduct = listProduct.findIndex((value) => value.id == cart.product_id);
            let info = listProduct[positionProduct];
            newCart.innerHTML = 
            `
            <div class="image">
                    <img src="${info.image}" alt="">
                </div>
                <div class="name">
                    ${info.name}
                </div>
                <div class="totalPrice">
                    ${info.price * cart.quantity}
                </div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span>${cart.quantity}</span>
                    <span class="plus">></span>
                </div>
            `;
            listCartHTML.appendChild(newCart);
        })
    }
    iconCartSpan.innerHTML = totalQuantity;
}

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')) {
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if (positionClick.classList.contains('plus')) {
            type = 'plus';
        }
        changeQuantity(product_id, type);
    }
})

const changeQuantity = (product_id, type) => {
    let positionItemInCart = carts.findIndex((value) => value.product_id == product_id);
    if (positionItemInCart >= 0) {
        switch (type) {
            case 'plus':
                carts[positionItemInCart].quantity = carts[positionItemInCart].quantity + 1;
                break;

            default:
                let valueChange = carts[positionItemInCart].quantity - 1;
                if (valueChange > 0) {
                    carts[positionItemInCart].quantity = valueChange;
                } else {
                    carts.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    calculate();
    addCarttoMemory();
    addCarttoHTML();
}

function calculate() {
    let totalPrice = 0;
    carts.forEach((obj, i) => {
        totalPrice += obj.price * obj.quantity;
    })
    console.log(totalPrice);
    return totalPrice;
}

const initApp = () => {
    fetch('product.json')
    .then(res => res.json())
    .then(data => {
        listProduct = data;
        addCarttoHTML();

        // get cart form memory
        if (localStorage.getItem('cart')) {
            carts = JSON.parse(localStorage.getItem('cart'));
            addCarttoHTML();
        }
    })
}

initApp();

function checkOut() {
    console.log(carts);
    if (carts.length <= 0) {
        alert("Your cart is empty now, nothing to checkout.");
    } else {
        window.open (
            "https://sb-api.revenuemonster.my/demo/payment/online?amount=" + (calculate() * 100), '_blank'
        );
    }
}
