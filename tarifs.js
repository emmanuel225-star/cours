let recette = 0;
let nombre = prompt("Combien de personnes ?");

for (let i = 1; i <= nombre; i++) {
  let age = prompt("Âge de la personne " + i);

  while (age < 0 || age > 20) {
    age = prompt("Âge invalide. Entrez un âge entre 0 et 20 ans.");
  }

  let prix = 3000;
  if (age < 16) {
    prix = 1500;
  }

  recette = recette + prix;
  console.log("Personne " + i + " : " + age + " ans, billet à " + prix + " FCFA");
}

console.log("Recette totale : " + recette + " FCFA");