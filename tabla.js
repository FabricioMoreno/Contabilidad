var btn = document.getElementById("mostrar")
/*btn.addEventListener("click",mostrar);
function mostrar(){
    var tabla = document.createElement("table");
        var tblBody = document.createElement("tbody");
        var unir = document.getElementById("resultado");
        unir.appendChild(tabla);
        //Crear fila
        for(var i=0; i<3; i++){
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
                var textocelda = document.createTextNode(i+"-"+j);
                celda.appendChild(textocelda);
                fila.appendChild(celda);
                }
                tabla.appendChild(fila);
            }
            tabla.appendChild(fila);
        }

}*/