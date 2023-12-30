function productLink() {
    window.location.href = "product.html";
}

function aboutLink() {
    window.location.href = "about.html";
}

let products = null;

fetch('product.json')
    .then(res => res.json())
    .then(data => {
        products = data;
        addDataToHTML();
    })

function addDataToHTML() {
    // remove data default from HTML
    console.log(products);
    let listProductHTML = document.querySelector('.productList');
    // add new data
    if(products != null) {
        products.slice(0,3).forEach(a => {
            let newProduct = document.createElement('a');
            newProduct.href = 'detail.html?id=' + a.id;
            newProduct.classList.add('item');
            newProduct.innerHTML = 
            `<img src="/${a.image}" alt="">
            <h2>${a.name}</h2>
            <div class="price">RM${a.price}</div>`;
            listProductHTML.appendChild(newProduct);
        });
    }
}