import { createLiveChart, updateChart } from "./modules/module.live-chart.js";
import { selectTd } from "./modules/module.data-from-tables.js";
//import { chart } from "./modules/module.create-charts.js";
createLiveChart();
updateChart();
//Création d'une array pour prendre toutes les données de la table crime
/*for (const td of dataCrimeTable) {
  console.log(td.textContent);
}
for (const td of dataHomicideTable) {
  console.log(td.textContent);
}*/