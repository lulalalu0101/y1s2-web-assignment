let products = null;

fetch('product.json')
    .then(res => res.json())
    .then(data => {
        products = data;
        showDetail();
    });

function showDetail() {

    let detail = document.querySelector('.detail');
    let productList = document.querySelector('.productList');
    let productId =  new URLSearchParams(window.location.search).get('id');
    let thisProduct = products.filter(value => value.id == productId)[0];
    console.log(productId);

    if(!thisProduct) {
        window.location.href = "/";
    }

    detail.querySelector('.image img').src = thisProduct.image;
    detail.querySelector('.name').innerText = thisProduct.name;
    detail.querySelector('.price').innerText = "RM" + thisProduct.price + ".00";
    detail.querySelector('.description').innerText = thisProduct.description;

    
    (products.filter(value => value.id != productId)).slice(0,3).forEach(a => {
        let newProduct = document.createElement('a');
        newProduct.href = 'detail.html?id=' + a.id;
        newProduct.classList.add('item');
        newProduct.innerHTML = `
            <img src="${a.image}">
            <h2>${a.name}</h2>
            <div class="price">RM ${a.price}.00</div>
        `;
        productList.appendChild(newProduct);
    })
}

function backProduct() {
    window.location.href = "product.html";
}

