const express = require('express');
const path = require('path');
const Joueur = require('../models/joueurs.js'); // Assurez-vous que le chemin est correct
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..','..', 'frontend','template','login.html'));
});


router.post('/submit-pseudo', (req, res) => {
    const pseudo = req.body.pseudo;
    const selectedItem = req.body["radio-item"];
    const navigationAnswer = req.body.navigation;
    const deathFearAnswer = req.body.mort;
    const alcoholPreference = req.body.alcool;

    // Vérification si un objet est sélectionné
    if (!selectedItem) {
        return res.redirect('/login?error=missing-item');
    }

    // Vérification des questions
    if (!navigationAnswer || !deathFearAnswer || !alcoholPreference) {
        return res.redirect('/login?error=missing-question-answer');
    }

    // Vous pouvez continuer avec le traitement des autres propriétés ici ...
    const hp = 100; // exemple
    const gold = 10; // exemple
    const inventory = []; // exemple

    const joueur = new Joueur(pseudo, hp, gold, inventory);

    if (joueur.estPseudoValide()) {
        // Si le pseudo est valide, faites ce que vous voulez (l'enregistrer dans une DB, etc.)
        res.redirect('/game');
    } else {
        res.redirect('/login?error=invalid-pseudo');
    }
});


router.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname, '..','..', 'frontend','template','game.html'));
});

module.exports = router;
