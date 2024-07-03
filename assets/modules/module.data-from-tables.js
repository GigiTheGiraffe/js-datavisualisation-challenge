//Fonction qui prend l'id d'une table et renvoie les données dans la table
function selectTd(idTable) {
    const data = [];
    const table = document.getElementById(idTable);
    const rows = table.getElementsByTagName("tr");
    const cells = rows[2].getElementsByTagName("td");
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        for (let j = 0; j < cells.length; j++) {
            data.push(cells[j].innerText);
        }
    }
    return data;
}
const tableCrime = selectTd("table1");
const tableHomicide = selectTd("table2");
export { tableCrime, tableHomicide };