const utilisateur = require("./information");

var cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Hello I'm ${utilisateur.nom} from ${utilisateur.campus} campus!`,
    e: "oO",
    T: "U ",
  })
);
