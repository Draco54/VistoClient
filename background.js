var almacen;
chrome.extension.onConnect.addListener(function(port) {
    console.log("Connected .....");
    port.onMessage.addListener(function(msg) {
        
            // Creación de la petición HTTP
            var req = new XMLHttpRequest();
            // Petición HTTP GET síncrona hacia el archivo fotos.json del servidor
            req.open('get', msg, true);
            req.addEventListener('load', function() {
                // Muestra la respuesta recibida
                
                almacen=req.responseText;
                port.postMessage(almacen);
                console.log(almacen);
            })
            sin_salto = req.responseText.replace(/(\r\n|\n|\r)/gm,"");
            var var2="";
            
            console.log(sin_salto);
            // Envío de la petición
            req.send(null);
         console.log("message recieved" + msg);
         console.log(almacen);
       
    });
})

