// Script spécifique pour la page de contact
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nom = document.getElementById('nom').value;
            const email = document.getElementById('email').value;
            const sujet = document.getElementById('sujet').value;
            const message = document.getElementById('message').value;
            
            // Validation simple
            if (nom && email && sujet && message) {
                alert(`Merci ${nom}! Votre message a été envoyé avec succès.`);
                form.reset();
            } else {
                alert('Veuillez remplir tous les champs du formulaire.');
            }
        });
    }
});
