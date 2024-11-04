/* BOUCLES - PRÉPA 4 : Le Devin
N.B. Cet exercice est à faire après avoir vu les fonctions
Ecrivez un programme qui va deviner le nombre auquel vous avez pensé (voir livre p.99 et 100)
- Demandez à l'utilisateur d'entrer un nombre entier entre 1 et 10 auquel il pense
	et annoncez-lui que vous allez essayer de le deviner.
	Le message pourrait être : "Pensez très fort à un nombre entier entre 1 et 10
	et entrez-le ici (je ne regarde pas, c'est promis !), je vais essayer de le deviner…"
- Affichez "Ce n'est pas …" tant que vous n'avez pas trouvé le nombre auquel il pensait
	et puis "J'ai trouvé ! Vous pensiez à …" lorsque vous avez trouvé.
*/

/* AIDES :
- Vous allez avoir besoin de la fonction Math.random() :
	cette fonction vous donne un nombre aléatoire entre 0 et 1 ;
- Vous allez avoir besoin aussi de la fonction Math.floor() :
	cette fonction vous donne l'arrondi vers le bas d'un nombre décimal :
	par exemple Math.floor(10.8) = 10 (la fonction tronque, ne garde que la partie entière)
- Pour une meilleure compréhension, prenez le temps de consulter la documentation pour savoir comment utiliser
	ces fonctions, y compris leurs paramètres et les valeurs qu'elles retournent.
*/
// Écrivez le code JavaScript pour résoudre cet exercice en essayant de deviner le nombre auquel l'utilisateur pense.

/*const numberUser = parseInt(prompt("Nombre !"));
/!*let i = 1;*!/

if (numberUser) {
    if (numberUser > 1 && numberUser < 11) {
        for (let i = 1; i <= 10; i++) {
            if (numberUser === i) {
                console.log(`J'ai trouvé ! Vous pensiez à ${i}`);
                break;
            } else {
                console.log(`Ce n‘est pas ${i}`);
            }
        }
    } else {
        console.log("Le nombre doit être entre 1 et 10")
    }
} else {
    console.log("Veiller entrer un nombre !")
}

// command + shift + enter =if () {
// } else {
// }
// faire ça en 1 clic*/
/*
function sayHello(firstName, lastName) {
    return `Bonjour ${firstName} ${lastName}`;
}//	- Les fonctions se termine par une accolade.

sayHello ('Daniel', 'Schreurs');*/

function isBixxestile(year) {
    if (year%4===0&&year%100!==0) {
        return true;
    }
     if (year%400===0) {
        return true;
    }
    return false
}

const year=parseInt(prompt("cezcs"))
console.log('isBixxestile : '+ isBixxestile(year));
isBixxestile(year);






 //l'ordre est très important, ne pas mettre lastName, et puis firstName garder l'ordre de départ, l'ordre de la déclaration de la fonction doit être la même que l'appel de la fonction, l'ordre des paramétre est important. Une fonction retourne toujours quelque chsoe et dans le pire des cas ça retourne undiffined, on doit donc mettre un return pour avoir, le returnn provoque la fermeture de la fonction. Si on met un console.log en dessous ben il ne le lit pas car la fonction est fini. Le Return permet de pouvoir enlever les else

function forceUserToEnterAInterger () {
    let userInput = false
    while (!userInput) {
        userInput =  parseInt(Promptt("Entrer un nombre entier));
    }
    return userInput;
}

console.log (forceUserToEnterAInterger())