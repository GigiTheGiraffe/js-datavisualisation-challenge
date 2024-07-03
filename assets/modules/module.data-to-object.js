import { tableCrime, tableHomicide } from "./module.data-from-tables.js";
function convertArrayToObject(array) {
    const object = {};
    let currentName;
    for (let i = 0; i < array.length; i++) {
        // Vérifie si l'élément est un nom de pays ( si NaN on le sait). On remplace les , par des . pour formater les floats correctement. On nie les : pour ne pas les ajouter
        if (isNaN(parseFloat(array[i].replace(',', '.')))&& array[i] !== ":") {
            currentName = array[i];
            object[currentName] = []; // Initialise un tableau vide pour le pays courant en ajoutant le nom de pays comme key
        } else {
            if (array[i] !== ":") // On nie les : pour ne pas les ajouter
            // Convertit l'élément en nombre à virgule flottante et l'ajoute aux données du pays courant
            object[currentName].push(parseFloat(array[i].replace(',', '.')));
        }
    }
    return object;
}

const dataHomicide = convertArrayToObject(tableHomicide);
const dataCrime = convertArrayToObject(tableCrime);
export {dataCrime, dataHomicide}