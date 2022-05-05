/**
 * Product
 */

/**
 * Affichage des détails d'un produit
 */

// Récupération de la valeur du paramètre d'URL "id"
const idProduct = queryParam('id');

fetch(`https://fakestoreapi.com/products/${idProduct}`)
    .then(res => res.json())
    .then(product => {
        const row = document.querySelector('#Products');

        const details = `<div class="col-4">
            <img src="${product.image}" alt="Photo du produit" class="w-100">
        </div>
        <div class="col-8">
            <h1 class="fw-bold fs-1">${product.title}</h1>
            <p>${product.description}</p>
            <p class="fw-bold fs-2">${product.price} €</p>
            <p>
                Catégorie : 
                <a href="category.php?name=${product.category}">
                    ${product.category}
                </a>
            </p>
        </div>`;

        row.innerHTML = details;
    })
 .catch(error => alert(error));
    