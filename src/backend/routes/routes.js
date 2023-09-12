const express = require('express');
const path = require('path');
const Joueur = require('../models/joueurs.js'); // Assurez-vous que le chemin est correct
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend', 'index.html'));
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..','frontend','template','login.html'));
});


router.post('/submit-pseudo', (req, res) => {
    const pseudo = req.body.pseudo;
    // Vous pouvez initialiser les autres propriétés ici
    const hp = 100; // exemple
    const gold = 10; // exemple
    const inventory = []; // exemple

    const joueur = new Joueur(pseudo, hp, gold, inventory);

    if (joueur.estPseudoValide()) {
        // Si le pseudo est valide, redirigez vers la page principale du jeu ou une autre page.
        res.redirect('/game'); 
    } else {
        // Si le pseudo n'est pas valide, redirigez à nouveau vers la page de connexion avec un message d'erreur.
        // Pour la simplicité, vous pourriez simplement rediriger vers '/login' ici.
        // Pour une meilleure UX, vous pourriez envoyer un paramètre de requête pour informer l'utilisateur que le pseudo est invalide.
        res.redirect('/login?error=invalid-pseudo');
    }
});

module.exports = router;
