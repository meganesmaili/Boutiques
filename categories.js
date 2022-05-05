/**
 * Category
 */

/**
 * Affichage des articles selon la catégorie
 */

// Récupération de la valeur du paramètre d'URL "name"
const categoryName = queryParam('name');

const content =document.querySelector('.category-name');
content.innerText = categoryName;

fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
    .then(res => res.json())
    .then(products => {
        // Cacher le loader
        const loader = document.querySelector('.spinner-article');
        loader.classList.add('d-none');

        // Récupération de la ligne qui contiendra les articles
        const row = document.querySelector('#listProducts');

        // Boucler sur les produits reçus
        products.forEach(product => {
            let card = cardProduct(product);
            row.innerHTML += card;
        });
    })
 .catch(error => alert(error));
    