/* BOUCLES - PRÉPA 3 : FizzBuzz
Ecrivez un programme qui affiche tous les nombres entre 1 et 100 avec les exceptions suivantes :
- Il affiche "Fizz" à la place du nombre si celui-ci est divisible par 3 ;
- Il affiche "Buzz" à la place du nombre si celui-ci est divisible par 5 et non par 3 ;
- Il affiche "FizzBuzz" à la place du nombre si celui-ci est divisible à la fois par 3 et par 5.
*/

/* RAPPELS - AIDES :
- Vous aurez besoin de deux structures de contrôle pour réaliser cet exercice : les tests et les boucles.
- Vous devrez également utiliser l'opérateur modulo %, qui renvoie le reste de la division d'un entier par un autre.
- TIP : Cet exercice est un test d'embauche classique qui permet de sélectionner des candidats qualifiés.
  Donnez votre meilleur effort pour le réussir !
*/
// Écrivez le code JavaScript pour résoudre cet exercice en affichant les nombres de 1 à 100 selon les règles spécifiées.

/*
for (let i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log('Fizz')
    } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}*/




/*****************************
 * BOUCLES ET ITÉRATIONS
 * BOUCLE = STRUCTURE DE CONTRÔLE N° 2 = MOYEN DE RÉPÉTER DES INSTRUCTIONS
 */

/* 6.1. Boucle FOR
  Syntaxe :
    for (initialisation; condition; étape) {
        // instructions exécutées tant que la condition est vérifiée
    }
  Ingrédients :
    - initialisation : on initialise un compteur pour dire OÙ ON COMMENCE
    - condition : on écrit une condition sur le compteur pour dire QUAND ON S'ARRÊTE
    - étape : on incrémente le compteur pour dire COMMENT ON AVANCE dans la boucle
*//* EXEMPLE 5 : Boucler à l'envers
- Affichez dans la console : "3, 2, 1, partez !"
*/

for (let i = 3; i > 0; i-=1) {
    console.log(i)
}

console.log("3, 2, 1, partez !")







/*****************************
 * 6. BOUCLES ET ITÉRATIONS
 * BOUCLE = STRUCTURE DE CONTRÔLE N° 2 = MOYEN DE RÉPÉTER DES INSTRUCTIONS
 */

/*
EXEMPLE 3 :
- Affichez les nombres pairs entre 0 et 20
*/

// 1. Initialisez une variable nommée 'nombre' à 0 pour représenter les nombres que vous allez afficher.

// 2. Utilisez une boucle 'while' pour répéter les instructions suivantes tant que 'nombre' est inférieur ou égal à 20 :
//    - Affichez 'nombre' dans la console si 'nombre' est un nombre pair.
//    - Incrémentez 'nombre' pour passer au nombre suivant.


let i = 0;
 
while (i <=20) {
    console.log(`${i} est un nombre positif `)
    i+=2;
}











