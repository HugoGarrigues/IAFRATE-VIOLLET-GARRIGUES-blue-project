const Items = require('./items');

const boussole = new Items('Boussole du Capitaine Jack','Permet au joueur de gagner de l alignement',100,[{type:'alignement',value:10}]);
const pelle = new Items('Pelle','Permet au joueur de gagner de l or',100,[{type:'gold',value:10}]);
const epee = new Items('Epee','Permet au joueur de gagner de l alignement ainsi que de l or',100,[{type:'alignement',value:5},{type:'gold',value:5}]);


const defaultItems = [boussole,pelle,epee];