//Fonction qui prend l'id d'une table et renvoie les données dans la table
function selectTd(idTable) {
const table = document.getElementById(idTable);
const dataTable = table.getElementsByTagName("td");
return dataTable;
}
export { selectTd }