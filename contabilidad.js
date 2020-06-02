(function(){
    var padre = document.getElementById("padre");
    var cuota = document.getElementById("cuota");
    var resultado = document.getElementById("resultado")
    var prestamo = document.getElementById("prestamo");
    var nPagos = document.getElementById("npagos");
    var interes = document.getElementById("interes");
    var btn = document.getElementById("submit");
    var prestamoant,nPagosant,interesant,intentos=0;
    function comprobarDatos(){
            var pad = document.getElementById("padre");
            var cuo = document.getElementById("cuota");
            var result = document.getElementById("resultado")
            pad.removeChild(cuo);
            padre.removeChild(result);
        
        var entrada = document.getElementsByClassName("ver");
        console.log(entrada);
            for(var i = 0; i<entrada.length; i++){
                if(entrada[i].value == ""){
                    prestamoant = "";
                    nPagosant = "";
                    interesant = "";
                    entrada[i].setAttribute("placeholder","Falta Dato")
                }
            }
        crear();
        
    }
    function eliminar(tablaBorrar,cuotaBorrar){
        var padre = tablaBorrar.parentNode;
        padre.removeChild(tablaBorrar);
        padre.removeChild(cuotaBorrar);
        
    }
    function crear(){
        var resultadoNew = document.createElement("div");
        var cuoNew = document.createElement("div");
        var padre = document.getElementById("padre");
        resultadoNew.setAttribute("id","resultado");
        cuoNew.setAttribute("id","cuota");
        padre.appendChild(cuoNew);
        padre.appendChild(resultadoNew);
    }
    function matriz(p,np,it,cuo){
        var tabla = document.createElement("table");
        var tblBody = document.createElement("tbody");
        var unir = document.getElementById("resultado");
        unir.appendChild(tabla);
        
        //Crear fila
        for(var i=0; i<=np; i++){
            var pResultado = p;
            var iResultado;
            var amortizacionResultado;
            var saldoFinal;
            if (i!=0){
                console.log(p);
                iResultado = (pResultado*it).toFixed(2);
                 amortizacionResultado = (cuo - iResultado).toFixed(2);
                 saldoFinal = (p - amortizacionResultado).toFixed(2);
                p = saldoFinal;
            }
            var fila= document.createElement("tr");
            for(var j=0; j<6; j++){
                if (i==0)
                {
                    for(var z=0; z<1; z++){
                        var titulo = ["N de Pago","Saldo Inicial","Interes","Amortizacion","Cuota","Saldo final"]
                        var celda = document.createElement("td");
                        var textocelda = document.createTextNode(titulo[j]);
                        celda.appendChild(textocelda);
                        fila.appendChild(celda);
                    }
                }
                else{
                    var celda = document.createElement("td");
                    var textocelda;
                    switch(j){
                        case 0 :
                            textocelda = document.createTextNode(i);
                            break;
                        case 1 :
                             textocelda = document.createTextNode(pResultado);
                             break;
                        case 2 :
                            textocelda = document.createTextNode(iResultado);
                                break;
                        case 3 :
                            textocelda = document.createTextNode(amortizacionResultado);
                            break;
                        case 4 :
                            textocelda = document.createTextNode(cuo);
                            break;
                        case 5:
                            textocelda = document.createTextNode(saldoFinal);
                            break;
                    }
                    celda.appendChild(textocelda);
                    fila.appendChild(celda);
                }
            }
            tabla.appendChild(fila);
        }
    }
    function cuotaResultado(a){
        var ver = document.createElement("p");
        var cuot = document.getElementById("cuota");
        var respuesta = document.createTextNode("Valor de la cuota: "+a);
        cuot.appendChild(ver.appendChild(respuesta));
        
    }
    btn.addEventListener("click",analizar);
    function analizar(){
        if(prestamo.value == "" | nPagos.value == "" | interes.value == ""){
            comprobarDatos();
        }
        else if (prestamo.value != prestamoant | nPagos.value != nPagosant | interes.value != interesant){
            if(intentos!=0){
                var tab = document.getElementById("resultado");
                var cuot = document.getElementById("cuota");
                eliminar(tab,cuot);
                crear();
            }
            var p = Number(prestamo.value);
            var np = Number(nPagos.value);
            var i = Number(interes.value);
            var f = Math.pow((1+i),np);
            var a = i*(f);
            var b = (f)-1;
            var ab = a/b;
            var respuesta = Number((p*(ab)).toFixed(2));
            console.log(typeof respuesta);
            cuotaResultado(respuesta);
            matriz(p,np,i,respuesta);
            prestamoant = p;
            nPagosant = np;
            interesant = i;
            intentos++;

        }
    }

})();