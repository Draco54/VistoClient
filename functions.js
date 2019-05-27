function clickeado(ide){
    var html = document.getElementsByClassName('aditem-detail')[ide].innerHTML; //Variable donde va todo el item del anuncio
    var almacen=[];                                                             //Variable almacen temporal para storage
    

    //Procedimiento para coger el enlace seleccionado    
    const regex = /"([^"]*)"|'([^']*)'/g,
    texto = html;
    var   grupo,
    resultado = [];

    while ((grupo = regex.exec(texto)) !== null) {
    //si coincide con comillas dobles, el contenido estará en el
    //   grupo[1], con el grupo[2] undefined, y viceversa
    resultado.push(grupo[1] || grupo[2]);
    }

    //resultado es un array con todas las coincidencias
    // mostramos los valores separados con saltos de línea


    var unido=resultado.join('\n');   //Dado que no tenia un metodo para cogerlo directamente, lo separo por comillas, doy un salto de linea
    var enlace = unido.split('\n')[0];  //ya que mediante esto siempre esta el enlace en la primera linea y me ahorro jugar con splits y condicionales


 

//Procedimiento para almacenar y comprobar repetidos
    var estado=0;
    for ( var i = 0, len = localStorage.length; i < len; ++i ) {
        if (localStorage.getItem( localStorage.key(i) )==enlace){
            estado=1;
        }else{
            almacen.push(localStorage.getItem( localStorage.key( i ) ));
        }
    }
    if (estado==0){                                     //Si el estado es 0 se almacena, si no, se ignora
        localStorage.setItem(almacen.length, enlace);
    }
}





