fetch('https://fakestoreapi.com/products/categories')
 .then(res=>res.json())
 .then(categories=> {

    const loader = document.querySelector('.spinner-border');
    loader.classList.add('d-none');


    const navCat = document.querySelector('.navCat');

    categories.forEach(categorie => {
        const link = document.createElement('a');
        link.innerText = categorie;
        link.href =`categorie.php?name=${categorie}`;
        link.classList.add('nav-link', 'text-secondary');
 
         //Ajoute la categorie dans le menu
        navCat.appendChild(link);
 
    });
 
    
})



const createTable = (datas) => {

    const body = document.querySelector('body');
    let main = document.createElement('main');
    let row = document.createElement('div');
    row.classList.add('row');


    
    datas.forEach(object =>{

    let sizeCard = document.createElement('div');
    sizeCard.classList.add('col-lg-6', 'col-12');
    let card = document.createElement('div');
    card.classList.add('card');
    
        

    let image = document.createElement('img');
    image.classList.add('card-img-top','w-25')
    image.src = object.image
    image.alt = 'Photo du produit'
        
    let globalCard = document.createElement('div');
    globalCard.classList.add('card-body');
        
    let title = document.createElement('h5');
    title.innerText = object.title
    title.classList.add('card-title')

    let price = document.createElement('p');
    price.innerText = object.price
    price.classList.add('card-text')

    let description = document.createElement('p');
    description.innerText = object.description
    description.classList.add('card-text')

    let categories = document.createElement('a');
    categories.innerText = object.category
    categories.classList.add('btn', 'btn-primary')

        
    card.appendChild(image);  

    globalCard.appendChild(title);  

    globalCard.appendChild(description);

    globalCard.appendChild(price);
        
    globalCard.appendChild(categories);
        
    card.appendChild(globalCard);

    sizeCard.appendChild(card);

    row.appendChild(sizeCard);

        
    


    });
    
    main.appendChild(row);
    body.appendChild(main)
}


let allWearing = () => {

    fetch('https://fakestoreapi.com/products?limit=16')
        .then(response => response.json())
        .then(datas => {
    
            createTable(datas);
            
        })
        .catch(error => alert(error));
    
    }
    
    allWearing();

 