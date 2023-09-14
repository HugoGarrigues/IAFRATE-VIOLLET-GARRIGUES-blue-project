let evenements = [];

fetch('evenements.json')
  .then(response => response.json())
  .then(data => {
    evenements = data.evenements;
    loadQuestionById(1); // Charger la première question
  });




let currentId = 1;

function loadQuestionById(id) {
  const evenement = evenements.find(event => event.id === id);
  if (evenement) {
    document.getElementById('question-h1').textContent = evenement.question;
    document.getElementById('rep-1').textContent = evenement.choix1;
    document.getElementById('rep-2').textContent = evenement.choix2;
    // Afficher le bouton "Continuer"
  } else {
    // Cas d'erreur: ID non trouvé
    console.error(`Aucun événement trouvé pour l'ID ${id}`);
  }
}

// Charge la première question lors du chargement de la page
window.addEventListener('load', () => {
  loadQuestionById(currentId);
});

// Lorsque l'utilisateur clique sur "Continuer", passez à la question suivante
document.getElementById('rep-1').addEventListener('click', () => {
    currentId++;
    loadQuestionById(currentId);
  });

  document.getElementById('rep-2').addEventListener('click', () => {
    currentId++;
    loadQuestionById(currentId);
  });