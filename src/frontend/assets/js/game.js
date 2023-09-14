let evenements = [];

fetch('evenements.json')
  .then(response => response.json())
  .then(data => {
    evenements = data.evenements;
    loadQuestionById(1); 
  });


let currentId = 1;

function loadQuestionById(id) {
  const evenement = evenements.find(event => event.id === id);
  if (evenement) {
    document.getElementById('question-h1').textContent = evenement.question;
    document.getElementById('rep-1').textContent = evenement.choix1;
    document.getElementById('rep-2').textContent = evenement.choix2;
  } else {
    console.log('Fin du jeu !');
  }
}
window.addEventListener('load', () => {
  loadQuestionById(currentId);
});

document.getElementById('rep-1').addEventListener('click', () => {
  currentId++;
  if (currentId > 10) {
    window.location.href = '/fin';
  } else {
    loadQuestionById(currentId);
  }
});

document.getElementById('rep-2').addEventListener('click', () => {
  currentId++;
  if (currentId > 10) {
    window.location.href = '/fin';
  } else {
    loadQuestionById(currentId);
  }
});
