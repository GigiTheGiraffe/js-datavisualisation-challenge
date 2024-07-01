function createContainer(id) {
    const section = document.createElement("section");
    section.setAttribute("id", id);
    return section;
}
/*Fonction pour insérer un conteneur dans un élément spécifié à une position donnée.
element : l'élément parent dans lequel le conteneur sera placé.
container: le conteneur à insérer dans l'élément parent.
place : l'élément avant lequel le conteneur sera inséré. 
Si place est null, le conteneur sera ajouté à la fin de l'élément parent.
*/
function placeContainer(element, container, place) {
element.insertBefore(container, place);
}
export {createContainer, placeContainer};