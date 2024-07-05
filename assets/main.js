import { createLiveChart, updateChart } from "./modules/module.live-chart.js";
import { createCrimeChart } from "./modules/module.chart-crime.js";
import { createHomicideChart } from "./modules/module.chart-homicide.js";
createLiveChart();
setTimeout(function () { updateChart() }, 1000);
createHomicideChart();
createCrimeChart();
