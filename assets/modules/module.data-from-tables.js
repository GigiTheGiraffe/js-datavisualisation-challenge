//Fonction qui prend l'id d'une table et renvoie les données dans la table
function selectTd(idTable) {
const table = document.getElementById(idTable);
const rows = table.getElementsByTagName("tr");
const data = [];
for (let i = 1; i < rows.length; i++) {
const td = rows[i]. getElementsByTagName("td");
for (let numbers of td) {
    data.push(numbers.innerText);
}
}
return data;
}
export { selectTd }