import { createLiveChart, updateChart } from "./modules/module.live-chart.js";
import { dataCrime, dataHomicide } from "./modules/module.data-to-object.js";
//import { chart } from "./modules/module.create-charts.js";
createLiveChart();
setTimeout(function () { updateChart() }, 1000);
//Création d'une array pour prendre toutes les données de la table crime
/*for (const td of tableCrime) {
  console.log(td);
}
for (const td of tableHomicide) {
  console.log(td);
}*/