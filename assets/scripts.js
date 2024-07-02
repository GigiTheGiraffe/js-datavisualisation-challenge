import { dataPoints, fetchData, updateData } from "./modules/module.update-data.js";
import { createContainer, placeContainer } from "./modules/module.add-container.js";
//créer le container section de liveChart et les const du DOM pour le placer
const bodyContent = document.getElementById("bodyContent");
const liveChart = createContainer("liveChart");
const chartCrime = createContainer("chartCrime");
const placeLiveChart = document.getElementById("mw-content-text");
//créer le container section de chart2 et les const du DOM pour le placer
const graph2 = document.querySelector("h3");
//const graph3 = document. ;

//fetch les données du site
fetchData();
//Update ces données toutes les secondes
updateData();
//créer le container section de liveChart et le place avant le h1
placeContainer(bodyContent, liveChart, placeLiveChart);

