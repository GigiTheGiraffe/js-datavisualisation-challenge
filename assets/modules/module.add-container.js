function createContainer(id) {
    const section = document.createElement("section");
    section.setAttribute("id", id);
    section.style.width = "100%";
    section.style.height = "auto";
    return section;
}
/*Fonction pour insérer un conteneur dans un élément spécifié à une position donnée.
element : l'élément parent dans lequel le conteneur sera placé.
container: le conteneur à insérer dans l'élément parent.
place : l'élément avant lequel le conteneur sera inséré. 
Si place est null, le conteneur sera ajouté à la fin de l'élément parent.
*/
function placeContainer(element, container, place) {
element.insertBefore(container, place);
}
//créer le container sections de chartHomicide et les const du DOM pour le placer
const chartCrime = createContainer("chartCrime");
const PlaceChartCrime = document.getElementById("table1");
//créer le container sections de chartHomicide et les const du DOM pour le placer
const chartHomicide = createContainer("chartHomicide");
const PlaceChartHomicide = document.getElementById("table2");
//créer le container sections de liveChart et les const du DOM pour le placer
const bodyContent = document.getElementById("bodyContent");
const liveChart = createContainer("liveChart");
const placeLiveAndCrimeChart = document.getElementById("mw-content-text");
//Placer le container sections de liveChart avant le h1
placeContainer(bodyContent, liveChart, placeLiveAndCrimeChart);
//Placer le container sections de chartCrime avant la table de crime
placeContainer(placeLiveAndCrimeChart, chartCrime, PlaceChartCrime);
//Placer le container sections de chartHomicide avant la table de homicide
placeContainer(placeLiveAndCrimeChart, chartHomicide, PlaceChartHomicide);
export { liveChart };