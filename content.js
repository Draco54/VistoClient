
var almacen;
var ides=[];
var almacenados=[];
var creaNum;
var temporal;
var script = document.createElement('script');
    script.src = chrome.extension.getURL("functions.js");
    (document.documentElement).appendChild(script);     //Inyecto el archivo con mis funciones para dar uso al script de uso

var cuenta = document.getElementsByClassName("aditem-buttons");  //variable cuenta
var eliminar = document.getElementsByClassName("aditem"); //Variable con los elementos


//Bucle al cargar web poner botones para anadir a la lista
for(i=0;i<cuenta.length;i++){
    cuenta[i].innerHTML +=  "<a class='simple-button' onclick='clickeado("+i+")'><i class='fas fa-plus-square'></i></i> <span>Añademe <span></span></span></a>";
    temporal=document.getElementsByClassName('aditem-footer')[i].id;  //Cojo cada uno de los ides
    temporal=temporal.slice(2, 11); //Troceo para quitar las letra inicial
    temporal=temporal+'.htm'; //Añado htm para que coincida con los del localstorage
    ides.push(temporal);  //Almaceno en un array
    
}
console.log(ides);

// Procedimiento para obtener de localstorage en el mismo formato que antes 
for (x=0; x<=localStorage.length-1; x++)  {  
  var pp=localStorage.getItem(localStorage.key(x)); 
  var rere = pp.length;
    var e=rere-13;
    var a = pp.slice(e, rere);
    almacenados.push(a);
    
}




//Obtencion de enlace actual y comprobacion de pagina actual
var URLactual = window.location.href;
var ff = URLactual.length;
var gg=ff-1;
var res = URLactual.slice(gg, ff);
var isnum = /^\d+$/.test(res);
if(isnum==true){
res++;
 creaNum = URLactual.slice(0, -1);
creaNum=creaNum+res;
}else{
  creaNum=URLactual+'&pagina=2';
}


var port = chrome.extension.connect({
  name: "Sample Communication"
});
port.postMessage(creaNum);
port.onMessage.addListener(function(msg) {
  console.log(msg);
  console.log(msg.getElementsByClassName('aditem-footer')[2].id);
  almacen=msg;
});
console.log(msg);


// Comparativa de ides 
for (x=0; x<=almacenados.length; x++) { 
  for (z=0; z<=ides.length; z++)  {  
      if (almacenados[x]==ides[z]){
        eliminar[z].innerHTML = "<div class='aditem-header'><div class='x3'>OFERTA</div><div class='x6 display-desktop' style='font-size:8px'><a class='highlighted-title' href='/creditos/auto-renueva.php'>DESTACADO</a></div><div class='x5'>r300603254</div></div><div class='aditem-detail-image-container'><div class='aditem-detail'><a href='/alquiler-de-apartamentos-en-navacepeda-de-tormes-avila/vut-el-balcon-del-almanzor-en-gredos-300603254.htm' target='_blank' class='aditem-detail-title'>VUT-EL BALCÓN DEL ALMANZOR EN GREDOS</a>        <div class='display-desktop list-location-link'><a href='/alquiler-de-apartamentos-en-navacepeda-de-tormes-avila/'><svg class='icon16' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' style='width: 16px; height: 16px;'><path d='M9.889 4c0 .4-.3.7-.7.7h-6.7c-.3 0-.6-.3-.6-.7 0-.4.3-.7.7-.7h6.6c.4 0 .7.3.7.7zm0 4c0 .4-.3.7-.7.7h-6.7c-.3 0-.6-.3-.6-.7 0-.4.3-.7.7-.7h6.6c.4 0 .7.3.7.7zm-7.3 3.3h6.6c.4 0 .7.3.7.7 0 .4-.3.7-.7.7h-6.7c-.4 0-.7-.3-.7-.7.1-.4.4-.7.8-.7zm11.1-7.8v.9c0 .4-.3.7-.7.7h-.9c-.4 0-.7-.3-.7-.7v-.9c0-.4.3-.7.7-.7h.9c.4 0 .7.3.7.7zm-1.1 7.2c.7 0 1.3.6 1.3 1.3s-.6 1.3-1.3 1.3-1.3-.6-1.3-1.3.5-1.3 1.3-1.3zm.3-3.9l1 1.8c.1.2 0 .3-.1.4h-2.1c-.2 0-.3-.1-.3-.3v-.1l1-1.8c.1-.1.2-.1.4-.1 0 .1.1.1.1.1z' fill='#30832f'></path></svg>Alquiler de apartamentos en Navacepeda De Tormes</a></div><div class='list-location-region'><svg class='icon16' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' style='width: 16px; height: 16px;'><path d='M8 7.5c.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7 0-.6-.4-1-1-1-.3 0-.5.1-.7.3-.2.2-.3.4-.3.7 0 .6.4 1 1 1zM6.4 4.9c.4-.4 1-.7 1.6-.7 1.3 0 2.3 1 2.3 2.3 0 .6-.2 1.2-.7 1.6s-1 .7-1.6.7c-1.3 0-2.3-1-2.3-2.3 0-.6.2-1.2.7-1.6zM2.7 6.5c0-2.9 2.4-5.3 5.3-5.3s5.3 2.4 5.3 5.3c0 2.4-1.5 5.2-4.3 8.5l-.1.1c-.6.6-1.4.5-1.9-.1-2.9-3.3-4.3-6.1-4.3-8.5zm1.3 0c0 2 1.3 4.6 4 7.7 2.7-3.1 4-5.7 4-7.7 0-2.2-1.8-4-4-4s-4 1.8-4 4z' fill='#171c1f'></path></svg>avila</div><div class='tx'>PICATEL 8, BL 5,  BAJO.  Número de turismo:  at-av-153julio y agosto 400 €/semanaapartamento de dos dormitorios,  baño completo,  cocina,  salón-comedor y terraza.  el dormitorio principal tiene una superficie de 18 m2,  con cama de matrimonio y diván.  el dormitorio secundario con una superficie de 10 m2,  consta de tres camas.  el baño es completo con una superficie de 5 m2.  el salón-comedor tiene una superficie útil de 20 m2 y la cocina independiente de 11 m2.  el apartamento tiene todas<span class='readMoreHidden' id='readMoreTx-300603254'>las piezas exteriores y consta de terraza de 12 m2 y zonas comunes de la propia urbanización,  que tiene piscina,  zona infantil y zona verde. Garaje. Amueblado. Terraza. Calefacción. Piscina. Jardín. CE: G</span><span id='readMoreLink-300603254' onclick='toggleExtraDescription(this.id)' class='readMoreLink'> ... Leer más</span></div><br><div class='x11'><div class='adlist-tagsbox-inlineblockline'><div class='vembox person-type-mobile'><a href='javascript:cpr(2)'><div class='pillDiv pillSellerTypePriv '>Particular</div></a></div><div class='vefbox'><a href='/alquiler-de-apartamentos-en-navacepeda-de-tormes-avila/vut-el-balcon-del-almanzor-en-gredos-300603254.htm#fotos' target='_blank'><div class='pillDiv vef'>ver fotos</div></a></div>    <div><a class='pillDiv vem' href='javascript:om(300603254)'><span>ver mapa</span></a>    </div><div class='inmo-attributes'><div class='m2 tag-mobile'>75m<span class='supind'>2</span></div><div class='dor tag-mobile'>2 dorm.</div><div class='ban tag-mobile'>1 baños</div>                        </div></div></div></div><div id='f300603254' class='aditem-image'><a href='javascript:var urlFotos_300603254 = [];urlFotos_300603254['0'] = 'https://imgredirect.milanuncios.com/fg/3006/03/300603254_1.jpg?VersionId=17yn5lZOtNPfwxdjkg3MIuHI_fKq969e';urlFotos_300603254['1'] = 'https://imgredirect.milanuncios.com/fg/3006/03/300603254_2.jpg?VersionId=6ubzfIxOcO3XmqY8Z8YMpezxJ7pbt8.R';urlFotos_300603254['2'] = 'https://imgredirect.milanuncios.com/fg/3006/03/300603254_3.jpg?VersionId=U01ajSfJKWeYmrkDwwoXsBdpE9S.wT2B';urlFotos_300603254['3'] = 'https://imgredirect.milanuncios.com/fg/3006/03/300603254_4.jpg?VersionId=1zCYows3cA.HR5e503To8mQHuHj.V3T6';urlFotos_300603254['4'] = 'https://imgredirect.milanuncios.com/fg/3006/03/300603254_5.jpg?VersionId=BkULDp4k8jnwFPRWk1VFx5jIri4tPdEi';urlFotos_300603254['5'] = 'https://imgredirect.milanuncios.com/fg/3006/03/300603254_6.jpg?VersionId=W76WD1mJHGP504dAz1R1eH6ApG3uUpiw';urlFotos_300603254['6'] = 'https://imgredirect.milanuncios.com/fg/3006/03/300603254_7.jpg?VersionId=CcIBefqvOLD26DIoT.rfjT.3_l7oJcjj';urlFotos_300603254['7'] = 'https://imgredirect.milanuncios.com/fg/3006/03/300603254_8.jpg?VersionId=3RYP9CBaNJpS26tYW5JYncLH02s3yqzZ';ImageStore.addImages(300603254, urlFotos_300603254);openImageDialog('300603254',1,'12345678','https://static.milanuncios.com/20190521122242/','https://imgredirect.milanuncios.com/','urlFotos_300603254')'><img oncopy='return false' oncontextmenu='return false' onmousedown='return false' src='https://imgredirect.milanuncios.com/fp/3006/03/300603254_1.jpg?VersionId=e1SLKMcOtqUX1sCqhkcaq_KAd4BgSC3r' alt='VUT-EL BALCÓN DEL ALMANZOR EN GREDOS - foto' class='ef'><br><div class='mini-overlay-superior'>8 <span class='display-desktop'>fotos</span></div></a></div></div><div class='aditem-footer' id='ph300603254'><div class='aditem-buttons'><div class='contact_button'><a href='javascript:contactFromAdList(300603254, 0);' class='highlighted-button'><i class='display-desktop icon icon-white-envelope'></i><i class='display-desktop icon icon-white-phone'></i><span>Contactar</span></a></div><div><a href='javascript:ventana('compartir/?id=','300603254')' class='simple-button'><i class='icon icon-share'></i> <span>Compartir<span></span></span></a></div><div><a href='javascript:tmpof('300603254')' class='simple-button'><i id='fav300603254' class='icon i1 icon-favourite'></i> <span>Favorito</span></a></div><div><span onclick='location.href='/stats/stats-ampliadas.php?id=300603254'' class='simple-button'><i class='icon icon-stats'></i> <span>Estadísticas</span></span></div><div><a href='javascript:ox('300603254')' class='simple-button'><i class='icon icon-complaint'></i><span>Denunciar</span></a></div><a class='simple-button' onclick='clickeado(2)'><i class='fas fa-plus-square'></i> <span>Añademe <span></span></span></a></div></div>";
        console.log("estoy coincidiendo");
        console.log(almacenados[x]);
        console.log(ides[z]);
      }
  }
}

