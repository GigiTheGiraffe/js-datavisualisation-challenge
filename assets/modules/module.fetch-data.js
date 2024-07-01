let dataPoints = [];
function fetchData() {
    fetch("https://canvasjs.com/services/data/datapoints.php" , {
        cache: "no-store" // Indique au navigateur de ne pas utiliser le cache pour avoir accès aux données aléatoires
    })
        .then(response => response.json())
        .then(data => {
            // Ajoute les valeurs dans dataPoints pour chaque valeur
            data.forEach(value => {
                dataPoints.push({
                     x: parseInt(value[0]), y: parseInt(value[1]) 
                    });
            });
        });
}
function updateChart() {
    fetch("https://canvasjs.com/services/data/datapoints.php" , {
        cache: "no-store" // Indique au navigateur de ne pas utiliser le cache pour avoir accès aux données aléatoires
    })
        .then(response => response.json())
        .then(data => {
            dataPoints.length = 0;
            data.forEach(value => {
            // Ajouter le nouvel élément à la fin du tableau dataPoints
            dataPoints.push({
                x: parseInt(value[0]), y: parseInt(value[1]) 
            });
        });
    });
    setTimeout(function(){updateChart()}, 1000); // Mis à jour toutes les secondes
}

// Appel fetchData() pour initialiser les données une seule fois au démarrage
export { dataPoints, fetchData, updateChart };