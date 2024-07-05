import { dataCrime } from "./module.data-to-object.js";
import { chartCrime } from "./module.add-container.js";
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function createDataset(object) {
    const datasets = [];
    for (const [country, data] of Object.entries(object)) {
        let color = getRandomColor();
        if(country == "Belgium") {
            datasets.push({
                label: country,
                data: data,
                fill: false,
                backgroundColor: color,
                borderColor: color,
                tension: 0.1,
            });
        } else {
        datasets.push({
            label: country,
            data: data,
            fill: false,
            backgroundColor: color,
            borderColor: color,
            tension: 0.1,
            hidden: true
        });
    }
    }
    return datasets
}
function createCrimeChart() {
    let datasets = createDataset(dataCrime)
    const labels = ["2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012"];
    const data = {
      labels: labels,
      datasets: datasets,
    };
    const config = {
        type: 'line',
        data: data,
        options: {
            plugins: {
                legend: {
                    position : "bottom",
                    align: "start",
                }
            },
            scales: {
                y: {
                    type: 'logarithmic',
                    title: {
                        display: true,
                        text: 'Offences recorded by the police, 2002-12 (in thousands)'
                    },
                    min: 1,
                    max: 7000,
                    ticks: {
                        callback: function(value, index, values) {
                            if (value === 5000 || value === 1000 || value === 100 || value === 10 || value === 1) {
                                return value.toLocaleString();
                            }
                            return null;
                        }
                    }
                }
            },
            layout: {
                padding : 5
            }
        }
    };

    const ctx = chartCrime;
    new Chart(ctx, config);
};
export { createCrimeChart }