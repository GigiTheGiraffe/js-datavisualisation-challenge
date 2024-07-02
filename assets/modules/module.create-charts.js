import { liveChart } from "./module.add-container.js";
const Chart = toastui.Chart;
const el = liveChart;
const data = {
  categories: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [
    {
      name: 'Income',
      data: [8000, 4000, 7000, 2000, 6000, 3000, 5000],
    },
  ],
};
const options = {
  chart: { 
    width: 'auto', height: 500 },
};

const chart = Chart.barChart({ el, data, options });
export {chart};