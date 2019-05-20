
var script = document.createElement('script');
    script.src = chrome.extension.getURL("functions.js");
    (document.documentElement).appendChild(script);     //Inyecto el archivo con mis funciones para dar uso al script de uso

var x = document.getElementsByClassName("aditem-buttons");  //variable cuenta
//Bucle al cargar web poner botones para anadir a la lista
for(i=0;i<x.length;i++){
    x[i].innerHTML +=  "<a class='simple-button' onclick='clickeado("+i+")'><i class='fas fa-plus-square'></i></i> <span>Añademe <span></span></span></a>";
}
var eliminar = document.getElementsByClassName("aditem");
  eliminar[0].innerHTML = "Hello World!";
