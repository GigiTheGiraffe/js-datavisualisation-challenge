import { dataHomicide } from "./module.data-to-object.js";
import { chartHomicide } from "./module.add-container.js";
function createHomicideChart() {
    let axeY = []; //Servira aux catégories
    let data2007 = []; //2007 a 2009
    let data2010 = []; //2010 a 2012
    for (let country in dataHomicide) {
        axeY.push(country); //Ajout du nom des pays sur l'axe des Y
        data2007.push(dataHomicide[country][0]); //Ajout des données pour 2007-2009
        data2010.push(dataHomicide[country][1]); //Ajout des données pour 2010-2012
    }
    const Chart = toastui.Chart;
    const el = chartHomicide;
    const data = {
        categories: axeY,
        series: [
            {
                name: '2007 to 2009',
                data: data2007,
            },
            {
                name: '2010 to 2012',
                data: data2010,
            },
        ],
    };
    const options = {
        chart: { width: 'auto', height: 1000 },
        xAxis: {
            title: 'Prison population, average per year, 2007-09 and 2010-12 (per 100,000 inhabitants).', // Titre de l'axe des X
        },
        yAxis: {
            title: 'Country', //Titre de l'axe des Y
        },
        series: {
            stack: true,
            dataLabels: { visible: true }
          },
          theme: {
            series: {
              dataLabels: {
                fontFamily: 'arial',
                lineWidth: 0.5,
                stackTotal: {
                  fontFamily: 'times new roman',
                  fontWeight: 15,
                  color: 'white',
                  textBubble: {
                    visible: true,
                    paddingY: 6,
                    borderWidth: 2,
                    borderColor: '#FFB840',
                    borderRadius: 10,
                    backgroundColor: '#00A9FF',
                  }
                }
              }
            }
          },
    };

    Chart.barChart({ el, data, options });
}
export { createHomicideChart }