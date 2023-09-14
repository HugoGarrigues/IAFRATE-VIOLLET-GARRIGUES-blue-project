const Items = require('./items');

const boussole = new Items('Boussole du Capitaine Jack','Permet au joueur de gagner de un peu d alignement',15,[{type:'alignement',value:10}]);
const longuevue = new Items('Longue Vue','Permet au joueur de gagner de un peu d or',15,[{type:'gold',value:10}]);
const epee = new Items('Epee','Permet de gagner de l alignement et de l or',15,[{type:'alignement',value:5},{type:'gold',value:5}]);
const fusil = new Items('Fusil','Permet de gagner beaucoup d or',15,[]);
const sniper = new Items('Sniper','Permet de gagner beaucoup d alignement ',15,[]);
const pistolet = new Items('Tromblon','Permet de passer un évenement ',20,[]);


module.exports = [boussole,longuevue,epee,fusil,sniper,pistolet];
const defaultItems = [boussole,longuevue,epee,fusil,sniper,pistolet];