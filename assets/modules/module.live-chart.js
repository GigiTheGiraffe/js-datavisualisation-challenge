import { liveChart } from "./module.add-container.js";
let dataPoints = [];
let chart;
function createLiveChart() {
    fetch("https://canvasjs.com/services/data/datapoints.php", {
        cache: "no-store" // Indique au navigateur de ne pas utiliser le cache pour avoir accès aux données aléatoires
    })
        .then(response => response.json())
        .then(value => {
            // Ajoute les valeurs dans dataPoints pour chaque valeur
            value.forEach(items => {
                dataPoints.push({
                    x: parseInt(items[0]),
                    y: parseInt(items[1])
                });
            });
            const Chart = toastui.Chart;
            const el = liveChart;
            const data = {
                categories: [],
                series: [
                    {
                        name: 'Valeur',
                        data: []
                    },
                ],
            };
            dataPoints.forEach(point => {
                data.categories.push(point.x); // Ajoute la valeur x comme catégorie
                data.series[0].data.push(point.y); // Ajoute la valeur y comme valeur
            });
            const options = {
                chart: {
                    width: 'auto', height: 500
                },
            };

            chart = Chart.lineChart({ el, data, options });
        });
}
let i = 9;
function updateChart() {
    fetch("https://canvasjs.com/services/data/datapoints.php", {
        cache: "no-store" // Indique au navigateur de ne pas utiliser le cache pour avoir accès aux données aléatoires
    })
        .then(response => response.json())
        .then(data => {
            dataPoints.length = 0;
            data.forEach(value => {
                // Ajouter le nouvel élément à la fin du tableau dataPoints
                dataPoints.push({
                    x: parseInt(value[0]), 
                    y: parseInt(value[1])
                });
            });
            let newData = [];
            dataPoints.forEach(point => {
                newData.push(point.y); // Ajoute la valeur x comme catégorie
            });
            chart.addData(newData, i);
            i++;
        });
    setTimeout(function () { updateChart() }, 1000); // Mis à jour toutes les secondes
}

// Appel fetchData() pour initialiser les données une seule fois au démarrage
export { dataPoints, createLiveChart, updateChart };