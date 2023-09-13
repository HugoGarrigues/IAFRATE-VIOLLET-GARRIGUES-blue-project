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

    const avancement = 12; 
    const gold = 10; 
    const inventory = []; 
    const nbrEvents = 0
    const joueur = new Joueur(pseudo, avancement, gold, inventory, nbrEvents);

    // Stockage des données du joueur dans la session
    req.session.joueur = {
        pseudo: joueur.pseudo,
        avancement: joueur.avancement,
        gold: joueur.gold,
        inventory: joueur.inventory,
        nbrEvents: joueur.nbrEvents,
    };

    if (joueur.estPseudoValide()) {
        // Si le pseudo est valide, redirige vers la page du jeu
        res.redirect('/game');
    } else {
        res.redirect('/login?error=invalid-pseudo');
    }
});



router.get('/game', (req, res) => {
    if(req.session.joueur) {
        res.render(path.join(__dirname, '..', '..', 'frontend', 'template', 'game.ejs'), {
            joueur: req.session.joueur
        });
    } else {
        // Si l'utilisateur n'a pas de session, redirigez-le vers la page de connexion
        res.redirect('/login');
    }
});


module.exports = router;
