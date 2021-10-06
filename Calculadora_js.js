        // Variables globales
        var NumeroInicial = 0;
        var Numerofinal = 0;
        var addTrue = false;
        var mulTrue = false;
        var restaTrue = false;
        var divisionTrue = false;
        var repeatSquare = false;
        var repeatCubo = false;
        var resultado = 0;


        // Función para validar input de un número
        function validar(){
            
            let num = document.getElementById("number");
            try {
                if(isNaN(num.value)) throw "Error al introducir los datos. Vuelva a intentarlo";
                num.value = Number(num.value);
            }
            catch(err) {
                alert("Introduce un número ");
            }
        }

        // Función para validar una lista de numeros separados por commas.
        function validarArray(){
            var inputValue = document.getElementById("number").value;
            
            var ArrayInput = inputValue.split(",");

            ArrayInput = Array.from(ArrayInput);
            try{
                if (ArrayInput.some(isNaN)) throw "Error al introducir los datos."
        
            }catch(err){
                alert("Introduce una lista de numero separados por commas. ")
            }
           }
       

        //Función añadir que fucniona el colaboracion con la función eq()
        function add(){
            validar();
            NumeroInicial = parseFloat(document.getElementById("number").value);
            addTrue = true;
            repeatSquare = false;
            //alert("Value of 'addTrue' outside the function " + addTrue)
        }


        // Función multiplicar, restar, dividir y elevar que funciona en colaboracion con la función eq()
        function mul(){
            validar();
            NumeroInicial = parseFloat(document.getElementById("number").value);
            mulTrue = true;
            repeatSquare = false;
        }
        

        function resta(){
            validar();
            NumeroInicial = parseFloat(document.getElementById("number").value);
            restaTrue = true;
        }

        function division(){
            validar();
            NumeroInicial = parseFloat(document.getElementById("number").value);
            divisionTrue = true;
        }

        function potencia(){
            validar();
            NumeroInicial = parseFloat(document.getElementById("number").value);
            PotenciaTrue = true;
        }

        // Función equals que funciona con las otras funciones anteriores
        function eq(){
            
            if (addTrue){
                validar();
                Numerofinal = parseFloat(document.getElementById("number").value);
                var result = Numerofinal + NumeroInicial;
                document.getElementById("answer").innerHTML = result;
                addTrue = false;
            } else if (mulTrue){
                validar();
                Numerofinal = parseFloat(document.getElementById("number").value);
                var result = NumeroInicial * Numerofinal;
                document.getElementById("answer").innerHTML = result;
                mulTrue = false; 
            } else if(restaTrue){
                validar();
                Numerofinal = parseFloat(document.getElementById("number").value);
                var result = NumeroInicial - Numerofinal;
                document.getElementById("answer").innerHTML = result;
                restaTrue = false;
            } else if(divisionTrue){
                validar();
                Numerofinal = parseFloat(document.getElementById("number").value);
                var result = NumeroInicial / Numerofinal;
                document.getElementById("answer").innerHTML = result;
                divisionTrue = false;

            } else if(PotenciaTrue){
                validar();
                Numerofinal = parseFloat(document.getElementById("number").value);
                var result = NumeroInicial ** Numerofinal;
                document.getElementById("answer").innerHTML = result;
                PotenciaTrue = false;
            }
            Numerofinal = parseFloat(document.getElementById("answer").value);
            repeatSquare = false;
        }    
    
        // Función que suma una lista de numeros --> 1,2,3,4 = 10
        function sumatorio(){

            validarArray();
            var sumatorioValue = 0;
            
            var inputValue = document.getElementById("number").value;
            
            var ArrayInput = inputValue.split(",");

            ArrayInput = Array.from(ArrayInput);

            ArrayInput = ArrayInput.map(function (x){
                return parseFloat(x,10);
            })


            sumatorioValue = ArrayInput.reduce((a,b) => a+b,0);
            document.getElementById("answer").innerHTML = sumatorioValue;
            repeatSquare = false;
        }

        //Función que pone en orden una lista de numero con formato 2,3,1,5 = 1,2,3,5
        function ordenar(){
            validarArray();
            var inputValue = document.getElementById("number").value;
            
            var ArrayInput = inputValue.split(",");

            ArrayInput = Array.from(ArrayInput);

            ArrayInput = ArrayInput.map(function (x){
                return parseFloat(x,10);
            })

            var result = ArrayInput.sort((a,b) => a-b);
            document.getElementById("answer").innerHTML = result;
            repeatSquare = false;
        }

        // Función para inverir el orden de una lista de numeros con Formato 1,2,3,4 = 4,3,2,1.
        function revertir(){
            validarArray();
            var inputValue = document.getElementById("number").value;
            
            var ArrayInput = inputValue.split(",");

            ArrayInput = Array.from(ArrayInput);

            ArrayInput = ArrayInput.map(function (x){
                return parseFloat(x,10);
            })

            var result = ArrayInput.reverse();
            document.getElementById("answer").innerHTML = result;
            repeatSquare = false;
        


        }

        // Función que elimina el ultimo elemento de una lista de numeros (Formato de entrada: 1,2,3,4
        // Borraría el 4)
        function quitar(){
            validarArray();

            var inputValue = document.getElementById("number").value;
            
            var ArrayInput = inputValue.split(",");

            ArrayInput = Array.from(ArrayInput);

            ArrayInput = ArrayInput.map(function (x){
                return parseFloat(x,10);
            })

            ArrayInput.pop();
            document.getElementById("answer").innerHTML = ArrayInput;
            repeatSquare = false;
        }

        // Función para Elevar al cuadrado un número X^2
        function square(){
        
            validar();
            if (repeatSquare == false){
                var num = parseFloat(document.getElementById("number").value);
                var result=num*num;
                NumeroInicial = num;

                if (result < 100){
                    document.getElementById("answer").innerHTML = result;
                    resultado = result;
                }else if (result>=100 && result <= 200){
                    resultado = result;
                    document.getElementById("total").innerHTML = result;
                    document.getElementById("answer").innerHTML = "Valor mayor a 100";
                }else{
                    document.getElementById("total").innerHTML = result;
                    document.getElementById("answer").innerHTML = "Valor mayor a 200";
                }
                
            
            }else if(repeatSquare == true){
            
            //var num = document.getElementById("answer").value;
            //alert(typeof num);
            var result= resultado*NumeroInicial;
            if (result < 100){
                document.getElementById("answer").innerHTML = result;
                resultado = result;
            }else if (result>=100 && result <= 200){
                resultado = result;
                document.getElementById("total").innerHTML = result;
                document.getElementById("answer").innerHTML = "Valor mayor a 100";
            }else{
                document.getElementById("total").innerHTML = result;
                document.getElementById("answer").innerHTML = "Valor mayor a 200";
            }
            }
            repeatSquare = true;
        }


        function cubo(){
        
            validar();
            if (repeatCubo == false){
                var num = parseFloat(document.getElementById("number").value);
                var result=num*num*num;
                NumeroInicial = num;

                if (result < 100){
                    document.getElementById("answer").innerHTML = result;
                    resultado = result;
                }else if (result>=100 && result <= 200){
                    resultado = result;
                    document.getElementById("total").innerHTML = result;
                    document.getElementById("answer").innerHTML = "Valor mayor a 100";
                }else{
                    document.getElementById("total").innerHTML = result;
                    document.getElementById("answer").innerHTML = "Valor mayor a 200";
                }
                repeatCubo = true;
            
            }else if(repeatCubo == true){
            
            //var num = document.getElementById("answer").value;
            //alert(typeof num);
            var result= resultado*NumeroInicial;
            if (result < 100){
                document.getElementById("answer").innerHTML = result;
                resultado = result;
            }else if (result>=100 && result <= 200){
                resultado = result;
                document.getElementById("total").innerHTML = result;
                document.getElementById("answer").innerHTML = "Valor mayor a 100";
            }else{
                document.getElementById("total").innerHTML = result;
                document.getElementById("answer").innerHTML = "Valor mayor a 200";
            }
            }
            
        }
    

        // Función para mostrar el valor absoluto de un número. 
        function mod(){
            validar();
            var num = parseFloat(document.getElementById("number").value);
            if(num >= 0){
                var result = num;
                document.getElementById("answer").innerHTML= result;
            }else{
                var result = num * -1;
                document.getElementById("answer").innerHTML = result;
            }
            repeatSquare = false;
        }

        // Función que realiza el factorial de un numero introducido. 
        function factorial(){
            validar();
            var total = 1;
            var num = parseFloat(document.getElementById("number").value)
            for (i = 1; i <= num; i++){
                total = total * i
            }
            document.getElementById("answer").innerHTML = total;
            repeatSquare = false;
        }