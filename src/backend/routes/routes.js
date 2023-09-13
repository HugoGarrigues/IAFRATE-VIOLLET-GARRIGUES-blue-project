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

    const hp = 100; // exemple
    const gold = 10; // exemple
    const inventory = []; // exemple

    const joueur = new Joueur(pseudo, hp, gold, inventory);

    // Stockage des données du joueur dans la session
    req.session.joueur = {
        pseudo: joueur.pseudo,
        hp: joueur.hp,
        gold: joueur.gold,
        inventory: joueur.inventory
    };

    if (joueur.estPseudoValide()) {
        // Si le pseudo est valide, redirige vers la page du jeu
        res.redirect('/game');
    } else {
        res.redirect('/login?error=invalid-pseudo');
    }
});



router.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname, '..','..', 'frontend','template','game.html'));
});

module.exports = router;
