import { dataPoints, fetchData, updateData } from "./modules/module.update-data.js";
import { createContainer, placeContainer } from "./modules/module.add-container.js";
import { selectTd } from "./modules/module.data-from-tables.js";
//créer le container canvas de liveChart et les const du DOM pour le placer
const bodyContent = document.getElementById("bodyContent");
const liveChart = createContainer("liveChart");
const placeLiveAndCrimeChart = document.getElementById("mw-content-text");
//créer le container canvas de chartHomicide et les const du DOM pour le placer
const chartCrime = createContainer("chartCrime");
const PlaceChartCrime = document.getElementById("table1");
//créer le container canvas de chartHomicide et les const du DOM pour le placer
const chartHomicide = createContainer("chartHomicide");
const PlaceChartHomicide = document.getElementById("table2");
//Prends les td de la table homicide et ceux de la table crimes
const dataCrimeTable = selectTd("table1")
const dataHomicideTable = selectTd("table2")
//fetch les données du site
fetchData();
//Update ces données toutes les secondes
updateData();
//Placer le container canvas de liveChart avant le h1
placeContainer(bodyContent, liveChart, placeLiveAndCrimeChart);
//Placer le container canvas de chartCrime avant la table de crime
placeContainer(placeLiveAndCrimeChart, chartCrime, PlaceChartCrime);
//Placer le container canvas de chartHomicide avant la table de homicide
placeContainer(placeLiveAndCrimeChart, chartHomicide, PlaceChartHomicide);
//Création d'une array pour prendre toutes les données de la table crime
for (const td of dataCrimeTable) {
  console.log(td.textContent);
}
for (const td of dataHomicideTable) {
  console.log(td.textContent);
}