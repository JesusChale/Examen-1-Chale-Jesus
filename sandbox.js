//Cree un arreglo con sus películas favoritas.
var arrayPeliculas = ["Iron Man", "SAW", "Chappie", "The Nightmare Before Christmas"];

function inicio() {
    //Agregue sus datos solicitados en los primeros 2 párrafos. (5 puntos)
    var p = document.getElementsByTagName("p");
    p[1].appendChild(document.createTextNode("Jesús Armando Chalé Ciau"));
    p[2].appendChild(document.createTextNode("17390323"));

    p[0].setAttribute("id", "title");

    //Agregue los elementos del arreglo de películas, a la lista de películas (10 puntos)
    var li = document.getElementsByTagName("li")[0];
    li.setAttribute("id", "firstLi");
    var ol = document.getElementById("firstLi").parentNode;
    for (var i = 0; i < arrayPeliculas.length; i++) {
        var newPeli = document.createElement("li");
        newPeli.appendChild(document.createTextNode(arrayPeliculas[i]));
        ol.appendChild(newPeli);
    }

    //Agregue sus personajes favoritos. ((10 puntos))
    var list = document.createElement("ol");
    document.body.insertBefore(list, p[4]);
    var newCharac1 = document.createElement("li");
    newCharac1.appendChild(document.createTextNode("Jack Skellington"));
    list.appendChild(newCharac1);
    var newCharac2 = document.createElement("li");
    newCharac2.appendChild(document.createTextNode("Spider-man"));
    list.appendChild(newCharac2);
}
window.onload = inicio;

//Agregue manualmente un formulario que permita agregar nombres de personajes favoritos, abajo del 3er párrafo. (10 puntos)
function addPerso() {
    var li = document.getElementsByTagName("li")[0];
    li.setAttribute("id", "firstLi");
    var list = document.getElementById("firstLi").parentNode;
    var valPers = document.getElementById("inputPersonajes").value;
    var newCharac = document.createElement("li");
    newCharac.appendChild(document.createTextNode(valPers));
    list.appendChild(newCharac);
}

//Agregue los elementos y scripts necesarios para que mediante el uso de controles, el usuario seleccione y elimine las películas que desee. (15 puntos)
function deletePeli() {
    var numPel = document.getElementById("inputPelicula").value;
    var inputPeli = document.getElementById("inputPelicula");
    var maxNum = inputPeli.getAttribute("max");
    var ol = document.getElementsByTagName("ol")[1];
    var liArray = ol.getElementsByTagName("li");
    if (liArray.length >= numPel) {
        var li = ol.getElementsByTagName("li")[numPel - 1];
        ol.removeChild(li);
        inputPeli.setAttribute("max", maxNum - 1);
        inputPeli.style.backgroundColor = "white";
    } else {
        inputPeli.style.backgroundColor = "rgb(248, 131, 131)";
    }

}