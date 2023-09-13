const Items = require('./items');

const boussole = new Items('Boussole du Capitaine Jack','Permet au joueur de gagner de l alignement',100,[{type:'alignement',value:10}]);
const longuevue = new Items('Longue Vue','Permet au joueur de gagner de l or',100,[{type:'gold',value:10}]);
const epee = new Items('Epee','Permet de gagner de l alignement et de l or',100,[{type:'alignement',value:5},{type:'gold',value:5}]);
const fusil = new Items('Fusil','Permet d eviter la banque route',100,[]);
const sniper = new Items('Sniper','Ajoute +1 d alignement par bonne action',100,[]);
const pistolet = new Items('Tromblon','Permet de passer un évenement ',100,[]);


module.exports = [boussole,longuevue,epee,fusil,sniper,pistolet];
const defaultItems = [boussole,longuevue,epee,fusil,sniper,pistolet];