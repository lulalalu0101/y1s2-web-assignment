let products = null;

fetch('product.json')
    .then(res => res.json())
    .then(data => {
        products = data;
        addDataToHTML();
    });

function addDataToHTML() {
    // remove data default from HTML
    console.log(products);
    let listProductHTML = document.querySelector('.productList');
    // add new data
    if(products != null) {
        products.forEach(a => {
            let newProduct = document.createElement('a');
            newProduct.href = 'detail.html?id=' + a.id;
            newProduct.classList.add('item');
            newProduct.innerHTML = 
            `<img src="/${a.image}" alt="">
            <h2>${a.name}</h2>
            <div class="price">RM ${a.price}.00</div>`;
            listProductHTML.appendChild(newProduct);
        });
    }
}