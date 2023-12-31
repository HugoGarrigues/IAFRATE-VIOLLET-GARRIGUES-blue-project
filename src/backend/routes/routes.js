const express = require('express');
const path = require('path');
const Joueur = require('../models/joueurs.js');
const router = express.Router();

let a = 0;
let g = 0;

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

    if (selectedItem === "1" ){
        a = a + 5;
    } else if (selectedItem === "2") {
        g = g + 5;
    } else if (selectedItem === "3") {
        a = a + 2;
        g = g + 2;
    }

    if (navigationAnswer === "1" && deathFearAnswer === "2" && alcoholPreference === "1") {
        a = a + 3;
        g = g + 3;
    }



    const avancement = 10 + a; 
    const gold = 10 + g; 
    const inventory = []; 

    const joueur = new Joueur(pseudo, avancement, gold, inventory);
    

    req.session.joueur = {
        pseudo: joueur.pseudo,
        avancement: joueur.avancement,
        gold: joueur.gold,
        inventory: joueur.inventory
    };

    if (joueur.estPseudoValide()) {
        joueur.formatePseudo();
        res.redirect('/game');
    } else {
        res.redirect('/login?error=invalid-pseudo');
    }
});



const defaultItems = require('../models/defaultItems');

router.get('/game', (req, res) => {
    if(req.session.joueur) {
        res.render(path.join(__dirname, '..', '..', 'frontend', 'template', 'game.ejs'), {
            joueur: req.session.joueur,
            items: defaultItems,
        });
    } else {
        res.redirect('/login');
    }
});


module.exports = router;
