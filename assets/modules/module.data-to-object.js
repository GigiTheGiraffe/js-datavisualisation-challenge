import { tableCrime, tableHomicide } from "./module.data-from-tables.js";
function convertArrayToObject(array) {
    const object = {};
    let currentName;
    for (const element of array) {
        // Vérifie si l'élément est un nom de pays ( si NaN on le sait). On remplace les , par des . pour formater les floats correctement. On nie les : pour ne pas les ajouter
        if (isNaN(parseFloat(element.replace(',', '.')))&& element !== ":") {
            currentName = element;
            object[currentName] = []; // Initialise un tableau vide pour le pays courant en ajoutant le nom de pays comme key
        } else {
            if (element !== ":") // On nie les : pour ne pas les ajouter
            // Convertit l'élément en nombre à virgule flottante et l'ajoute aux données du pays courant
            object[currentName].push(parseFloat(element.replace(',', '.')));
        }
    }
    return object;
}

const dataHomicide = convertArrayToObject(tableHomicide);
const dataCrime = convertArrayToObject(tableCrime);
export {dataCrime, dataHomicide}