<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="style.css">
    <script src="fonctions.js" defer></script>
    <script src="categories.js" defer></script>
    
        <title>Boutiques.</title>
    </head>
    <body>
        <header class="colorBack">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col titlePosition">
                        <a href="#" title="Shop" class="titleColor">Boutique.</a>
                    </div>
                    <div class="spinner-category">
                    </div>
                <nav class="my-3 ">
                    <ul class="nav justify-content-center">
                            <li class="nav-item">
                            <a class="nav-link menuTextColor" aria-current="page" href="../pagesAccueil/index.php">Home</a>
                            </li>
                    </ul>
                </nav>
                </div>
            </div>
        </header>
        <main class="container pt-5">
            <h2 class="fs-4 mb-3">
                Catégorie : <span class="category-name">???</span>
            </h2>
            <!-- Chargement en cours... -->
            <div class="text-center spinner-article py-5">
                <div class="spinner-border text-warning" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            <!-- Error fetch() -->
            <div id="error" class="alert alert-danger d-none"></div>
            <!-- Listes des articles -->
            <div id="listProducts" class="row"></div>
        </main>
    </body>
</html>