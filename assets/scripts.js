import { dataPoints, fetchData, updateChart } from "./modules/module.fetch-data.js";
const graph1 = document.getElementById("bodyContent");
const graph2 = document.querySelector("h3");
//const graph3 = document. ;
fetchData();
updateChart();