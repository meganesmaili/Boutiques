/**
 * Création d'une carte de produit
 * 
 * @param Object product
 * @return String
 */
 const cardProduct = (product) => 
 
 {
  return `<div class="col-3 mb-5">
      <img src="${product.image}" alt="Photo du produit">
      <p class="mt-2 mb-0 fw-bold">${product.title}</p>
      <p>${product.price} €</p>
      <a href="product.php?id=${product.id}" class="btn btn-primary">
          Voir le produit
      </a>
  </div>`;
}


/**
 * Récupération du paramètre de la requête
 * Utilisation : const valeur = queryParam('nom_du_paramètre');
 * 
 * @param String param
 * @return String
 */
 const queryParam = (param) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}