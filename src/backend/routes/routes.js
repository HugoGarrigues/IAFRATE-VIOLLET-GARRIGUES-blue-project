const express = require('express');
const path = require('path');
const Joueur = require('../models/joueurs.js');
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

    if (!selectedItem) {
        return res.redirect('/login?error=missing-item');
    }

    if (!navigationAnswer || !deathFearAnswer || !alcoholPreference) {
        return res.redirect('/login?error=missing-question-answer');
    }

    const avancement = 10; 
    const gold = 10; 
    const inventory = []; 

    const joueur = new Joueur(pseudo, avancement, gold, inventory);

    req.session.joueur = {
        pseudo: joueur.pseudo,
        avancement: joueur.avancement,
        gold: joueur.gold,
        inventory: joueur.inventory
    };

    if (joueur.estPseudoValide()) {
        res.redirect('/game');
    } else {
        res.redirect('/login?error=invalid-pseudo');
    }
});



const defaultEvenements = require('../models/defaultEvenements');
const defaultItems = require('../models/defaultItems');

router.get('/game', (req, res) => {
    if(req.session.joueur) {
        res.render(path.join(__dirname, '..', '..', 'frontend', 'template', 'game.ejs'), {
            joueur: req.session.joueur,
            evenements: defaultEvenements,
            items: defaultItems,
        });
    } else {
        res.redirect('/login');
    }
});

router.get('/profil', (req, res) => {
    if(req.session.joueur) {
        res.render(path.join(__dirname, '..', '..', 'frontend', 'template', 'profil.ejs'), {
            joueur: req.session.joueur
        });
    } else {
        res.redirect('/login');
    }
});

router.get('/fin', (req, res) => {
    if(req.session.joueur) {
        res.render(path.join(__dirname, '..', '..', 'frontend', 'template', 'fin.ejs'), {
            joueur: req.session.joueur
        });
    } else {
        res.redirect('/login');
    }
});

module.exports = router;
