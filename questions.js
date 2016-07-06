/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
function tailleString(texte){
	return texte.length;
}
function remplaceCar(texte,avant,apres){
 	return texte.replace(avant,apres);

}
function concatString(texte1, texte2){
	return texte1 + texte2;
}

function afficherCar(texte){
	 return texte.charAt(4); 
}
function afficherNCar(texte){
	return texte.substring(0,9);
}
function majusculeString(texte){
	return texte.toUpperCase();
}
function SupprEspaceString(texte){
	return texte.trim();
}