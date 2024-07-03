import { dataCrime } from "./module.data-to-object.js";
import { chartCrime } from "./module.add-container.js";
function createCrimeChart() {
    const Chart = toastui.Chart;
    const el = chartCrime;
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

    Chart.barChart({ el, data, options });
}
export { createCrimeChart }