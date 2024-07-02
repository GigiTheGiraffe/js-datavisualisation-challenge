import { fetchData, updateData } from "./modules/module.update-data.js";
import { selectTd } from "./modules/module.data-from-tables.js";
import { chart } from "./modules/module.create-charts.js";
fetchData();
updateData();
//Création d'une array pour prendre toutes les données de la table crime
/*for (const td of dataCrimeTable) {
  console.log(td.textContent);
}
for (const td of dataHomicideTable) {
  console.log(td.textContent);
}*/
/*const Chart = toastui.Chart;
const el = document.getElementById("liveChart");
const data = {
  categories: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [
    {
      name: 'Budget',
      data: [5000, 3000, 5000, 7000, 6000, 4000, 1000],
    },
    {
      name: 'Income',
      data: [8000, 4000, 7000, 2000, 6000, 3000, 5000],
    },
  ],
};
const options = {
  chart: { width: 700, height: 400 },
};

const chart = Chart.barChart({ el, data, options }); */