// Script spécifique pour la page des produits
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('all-products');
    
    if (container) {
        container.innerHTML = '';
        produits.forEach(produit => {
            const card = creerCarteProduIt(produit);
            container.appendChild(card);
        });
    }
});
