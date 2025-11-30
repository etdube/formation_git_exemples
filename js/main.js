// Données des produits
const produits = [
    {
        id: 1,
        nom: 'Laptop Pro',
        prix: 1299.99,
        description: 'Ordinateur portable haute performance'
    },
    {
        id: 2,
        nom: 'Souris Wireless',
        prix: 49.99,
        description: 'Souris sans fil ergonomique'
    },
    {
        id: 3,
        nom: 'Clavier Mécanique',
        prix: 149.99,
        description: 'Clavier mécanique RGB'
    },
    {
        id: 4,
        nom: 'Moniteur 4K',
        prix: 599.99,
        description: 'Moniteur Ultra HD 27"'
    },
    {
        id: 5,
        nom: 'Casque Audio',
        prix: 199.99,
        description: 'Casque sans fil avec réduction de bruit'
    },
    {
        id: 6,
        nom: 'Webcam HD',
        prix: 89.99,
        description: 'Caméra web 1080p'
    },
    {
        id: 7,
        nom: 'Disque Dur Externe',
        prix: 129.99,
        description: 'Disque dur portable 2TB'
    }
];

// Fonction pour afficher les produits
function afficherProduits() {
    const container = document.getElementById('featured-products');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    produits.forEach(produit => {
        const card = creerCarteProduIt(produit);
        container.appendChild(card);
    });
}

// Fonction pour créer une carte produit
function creerCarteProduIt(produit) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <div class="product-image">
            Produit #${produit.id}
        </div>
        <div class="product-info">
            <h3 class="product-name">${produit.nom}</h3>
            <p>${produit.description}</p>
            <div class="product-price">${produit.prix.toFixed(2)} €</div>
            <button class="product-button" onclick="ajouterAuPanier(${produit.id})">
                Ajouter au panier
            </button>
        </div>
    `;
    
    return card;
}

// Fonction pour ajouter au panier
function ajouterAuPanier(idProduit) {
    const produit = produits.find(p => p.id === idProduit);
    if (produit) {
        alert(`"${produit.nom}" a été ajouté au panier!`);
    }
}

// Initialiser l'application
document.addEventListener('DOMContentLoaded', function() {
    afficherProduits();
    initialiserEvenements();
});

// Fonction pour initialiser les événements
function initialiserEvenements() {
    console.log('Application chargée avec succès');
}
