//Ejercicio 1
function colores(){    
    let colors = ["verd", " vermell", " groc", " blau", " negre", " blanc"];
    
    //Devuelve si todos los colores son menores que el color marrón
    let totsMenorsMarron = colors.every(menorsMarro);
    document.write("- Todos los colores son menores que el marrón: " + totsMenorsMarron + "<br>");

    //Filtra los colores que son menor que elcolor marrón
    let menorsMarron = colors.filter( menorsMarro);
    document.write("- Los colores que son menores que el color marrón: " + menorsMarron + "<br>");

    //Devuelve los dos últimos elementos de la array
    let ultimos2 = colors.slice(-2);
    document.write("- Los dos últimos: " + ultimos2 + "<br>");
    
    //Añade el color turquesa en la array
    colors.push(" turquesa");
    document.write("- Nueva array después de añadir un nuevo color: ", colors + "<br>");
    
    //Eliminar el color verde
    colors.shift();
    document.write("- Array después de eliminar el color verde: " + colors + "<br>");    
}

function menorsMarro(color){
    return color < "marro";
}

//Ejercicio 2
function metodosArray(){
    let edades = [4, 12, 19, 20, 55, 44, 2, 97, 23, 77, 87];

    //at --> Returns an indexed element of an array
    document.write("La array principal: " + edades + "<br>");
    document.write("Método usado: at(), parametro : 4  <br>");
    let resultadoAt = edades.at(4);
    document.write("El resultado del metodo: " + resultadoAt + "<br>");
    document.write("------------------------------------------------- <br>");

    // concat() --> Joins arrays and returns an array with the joined arrays
    document.write("La array principal: " + edades + "<br>");
    let edadesExtended = [40,50,60];
    document.write("Método usado: concat(), array a concatenar: " + edadesExtended + "<br>");
    let resultadoConcat = edades.concat(edadesExtended);    
    document.write("El resultado del metodo: " + resultadoConcat + "<br>");
    document.write("------------------------------------------------- <br>");

    // constructor --> Returns the function that created the Array object's prototype   
    document.write("La array principal: " + edades + "<br>"); 
    document.write("Método usado: constructor() <br>");
    let resultadoConstructor = new Array(edades);
    document.writeln("El resultado del metodo: " + resultadoConstructor + "<br>");
    document.write("------------------------------------------------- <br>");

    // copyWithin() --> Copies array elements within the array, to and from specified positions
    document.write("La array principal: " + edades + "<br>"); 
    document.write("Método usado: copyWithin() <br>");
        // copia al indice 1 todos los elementos a partir del indice 3 hasta final
    let resultadoCopy = edades.copyWithin(1,3);
    document.writeln("El resultado del metodo: " + resultadoCopy + "<br>");
    document.write("------------------------------------------------- <br>");
    
    // entries() --> Returns a key/value pair Array Iteration Object
    document.write("La array principal: " + edades + "<br>");
    document.write("Método usado: entries(), devuelve la pareja de key/value <br>");
    let resultadosEntries = edades.entries();
    for(let resultado of resultadosEntries){
        document.write( resultado + "<br>");
    }
    document.write("------------------------------------------------- <br>");

    // every() --> Checks if every element in an array pass a test
    document.write("La array principal: " + edades + "<br>");
    document.write("Método usado: every() <br>");
    let mayor18 = edades.every(edad => edad > 18)
    document.write("Todos son mayor que 18: " + mayor18 + "<br>");
    document.write("------------------------------------------------- <br>");

    // fill() --> Fill the elements in an array with a static value
    document.write("La array principal: " + edades + "<br>");
    document.write("Método usado: fill(), añade 0s a partir de la posición 3 hasta 7 <br>");
    let resultadoFill = edades.fill(0, 3, 7);
    document.write("El resultado del método: " + resultadoFill + "<br>");
    document.write("------------------------------------------------- <br>");
    
    // filter() --> Creates a new array with every element in an array that pass a test
    document.write("La array principal: " + edades + "<br>");
    document.write("Método usado: filter(), filtra la edad que sea igual que 55 <br>");
    let resultadoFilter = edades.filter(edad => edad === 55);
    document.write("El resultado del método: " + resultadoFilter + "<br>");
    document.write("------------------------------------------------- <br>");

    // find() --> Returns the value of the first element in an array that pass a test
    document.write("La array principal: " + edades + "<br>");
    document.write("Método usado: find(), busca el primer elemento que sea menor que 18 <br>");
    let resultadoFind = edades.find(edad => edad < 18);
    document.write("El resultado del método: " + resultadoFind + "<br>");
    document.write("------------------------------------------------- <br>");

    // findIndex() --> Returns the index of the first element in an array that pass a test
    document.write("La array principal: " + edades + "<br>");
    document.write("Método usado: findIndex(), retorna el primer elemento que sea menor que el 18 <br>");
    let resultadoFindIndex = edades.findIndex(function(element){
        return element < 18;    })
    document.write("El resultado del método: " + resultadoFindIndex + "<br>");
    document.write("------------------------------------------------- <br>");

    // flat() --> Concatenates sub-array elements
    let subArray = [22,33,11, [45,55], 18];
    document.write("La array principal: " + subArray + "<br>");    
    document.write("Método usado: flat() " + "<br>");
    let resultadoFlat = subArray.flat();
    document.write("El resultado del método: " + resultadoFlat + "<br>");
    document.write("------------------------------------------------- <br>");

    // flatMap() --> Maps all array elements and creates a new flat array
    document.write("La array principal: " + edades + "<br>");
    document.write("Método usado: flatMap(), mapea la array y suma 1 a cada elemeto de la array <br>");
        // a cada elemento le sumamos 1
    let resultadoFlatMap = edades.flatMap((edad) => edad + 1);
    document.write("El resultado del método: " + resultadoFlatMap + "<br>");
    document.write("------------------------------------------------- <br>");

    // forEach() --> Calls a function for each array element
    document.write("La array principal: " + edades + "<br>");
    document.write("Método usado: forEach() <br>");
    document.write("Los elementos de la array son: <br>");
    edades.forEach(function(edad) {
    document.write(edad + " " + "<br>");
    });
    document.write("------------------------------------------------- <br>");


    // from() --> Creates an array from an object
    document.write("Método usado: from(), el parametro: harpreet" + "<br>");
    let resultadoFrom = Array.from("harpreet");
    document.write("El nuevo array a partir de un string: " + resultadoFrom + "<br>");
    document.write("------------------------------------------------- <br>");

    // includes() --> Check if an array contains the specified element
    document.write("La array: " + edades + "<br>");
    document.write("Método usado: includes(), indica si la array incluye el elemento 18 <br>");
    let resultadoIncludes = edades.includes(18);
    document.write("El resultado del método: " + resultadoIncludes + "<br>");
    document.write("------------------------------------------------- <br>");
    
    // indexOf() --> Search the array for an element and returns its position
    document.write("La array: " + edades + "<br>");
    document.write("Método usado: indexOf(), retorna el indice del elemento 55 <br>");
    let resultadoIndexOf = edades.indexOf(55);
    document.write("El resultado del método: " + resultadoIndexOf + "<br>");
    document.write("------------------------------------------------- <br>");
    
    // isArray() --> Checks whether an object is an array
    document.write("La array: " + edades + "<br>");
    document.write("Método usado: isArray() <br>");
    let resultadoIsArray = Array.isArray(edades);
    document.write("El resultado del método: " + resultadoIsArray + "<br>");
    document.write("------------------------------------------------- <br>");
    
    // join() --> Joins all elements of an array into a string
    document.write("La array: " + edades + "<br>");
    document.write("Método usado: join(), concatena los elementos de la array en un String separado por | <br>");
    let resultadoJoin = edades.join( " | " );
    document.write("El resultado del método: " + resultadoJoin + "<br>");
    document.write("------------------------------------------------- <br>");
    
    // keys() --> Returns a Array Iteration Object, containing the keys of the original array
    document.write("La array: " + edades + "<br>");
    document.write("Método usado: keys() <br>");
    let keys = Array.from(edades.keys());
    document.write("Todas las keys de la array: ");
    keys.forEach(function (key) {
    document.write(key + " ");
    });
    document.write(" <br> ------------------------------------------------- <br>");

    // lastIndexOf() -->Search the array for an element, starting at the end, and returns its position
    let numeros = [1,2,3,1,4,5,1,6];
    document.write("La array: " + numeros + "<br>");
    document.write("Método usado: lastIndexOf(), retorna en que posición está el útlimo 1 de la array <br>");
    let resultadoLastIndexOf = numeros.lastIndexOf(1);
    document.write("El resulatado del método: " + resultadoLastIndexOf + "<br>");
    document.write("------------------------------------------------- <br>");

    // length --> Sets or returns the number of elements in an array
    document.write("La array: " + numeros + "<br>");
    document.write("Método usado: length() <br>");
    document.write("El resulatado del método: " + numeros.length + "<br>");
    document.write("------------------------------------------------- <br>");
    
    // map() --> Creates a new array with the result of calling a function for each array element
    document.write("La array: " + numeros + "<br>");
    document.write("Método usado: map(), mapea todos los elementos de la array y los multiplica por un 2 <br>");
    let resulatadoMap = numeros.map(numero => numero * 2);
    document.write("El resultado del método: " + resulatadoMap );
    document.write(" <br> ------------------------------------------------- <br>");

    // pop() --> Removes the last element of an array, and returns that element
    document.write("Método usado: pop() <br>");
    document.write("La array antes de eliminar el último elemento: " + numeros + "<br>");
    numeros.pop()
    document.write("La array después de eliminar: " + numeros + "<br>");
    document.write("------------------------------------------------- <br>");
    
    // push() --> Adds new elements to the end of an array, and returns the new length
    document.write("Método usado: push() <br>");
    document.write("La array : " + numeros + "<br>");
    numeros.push(100)
    document.write("La array después de añadir un elemento: " + numeros + "<br>");
    document.write("------------------------------------------------- <br>");
    
    // reduce() --> Reduce the values of an array to a single value (going left-to-right)
    let mensaje = ["Mi", "Nombre", "es", "Harpeet"];

    document.write("Método usado: reduce(), convierte la array anterior en una sola array <br>");
    document.write("La array : " + mensaje + "<br>");
    let resultadoReduce = mensaje.reduce(function(acum, mensaje){
        return acum + " " + mensaje;
    })
    document.write("La resultado del método: " + resultadoReduce + "<br>");
    document.write("------------------------------------------------- <br>");
    
    // reduceRight() --> Reduce the values of an array to a single value (going right-to-left)
    document.write("Método usado: reduceRight() <br>");
    document.write("La array : " + mensaje + "<br>");
    let resultadoReduceRight = mensaje.reduce(function(acum, mensaje){
        return acum + " " + mensaje;
    })
    document.write("La resultado del método: " + resultadoReduceRight + "<br>");
    document.write("------------------------------------------------- <br>");
    
    // reverse() --> Reverses the order of the elements in an array
    document.write("Método usado: reverse() <br>");
    document.write("La array : " + mensaje + "<br>");
    document.write("La array en orden inverso: " + mensaje.reverse() + "<br>");
    document.write("------------------------------------------------- <br>");
    
    // shift() --> Removes the first element of an array, and returns that element
    document.write("Método usado: shift(), elimina el primer elemento de la array <br>");
    document.write("La array : " + mensaje + "<br>");
    mensaje.shift()
    document.write("La array después de eliminar el primer elemento: " + mensaje + "<br>");
    document.write("------------------------------------------------- <br>");

    // slice() --> Selects a part of an array, and returns the new array    
    document.write("Método usado: slice(), seleciona los elementos de la array de la posición 1 a 5 <br>");
    document.write("La array : " + numeros + "<br>");
    document.write("La nuevo array: " + numeros.slice(1,5) + "<br>");
    document.write("------------------------------------------------- <br>");

    // some() --> Checks if any of the elements in an array pass a test
    document.write("La array principal: " + edades  + "<br>");
    document.write("Método usado: some(), devuelve true si en la array existen elemetos que son menor que el 18  <br>");
    let resultadoSome = edades.some(function(edad){
        return edad < 18;    })
    document.write("El resultado del metodo: " + resultadoSome  + "<br>");
    document.write("------------------------------------------------- <br>");
    
    // sort() --> Sorts the elements of an array
    document.write("La array principal: " + edades  + "<br>");
    document.write("Método usado: sort() <br>");
    document.write("El resultado del metodo: " + edades.sort()  + "<br>");
    document.write("------------------------------------------------- <br>");
    
    // splice() --> Adds/Removes elements from an array
    document.write("La array principal: " + edades + "<br>");
    document.write("Método usado: splice(), se agrega a la posición 2, el elemento Har sin eleminar nada <br>");
    let resultadoSplice = edades.splice(2, 0, "Har");
    document.write("El resultado del método después de agregar elementos: " + edades + "<br>");
    document.write("Elementos eliminados por el splice: " + resultadoSplice + "<br>");
    document.write("------------------------------------------------- <br>");
    
    // toString() --> Converts an array to a string, and returns the result
    document.write("El array: " + edades + "<br>");
    document.write("Método usado: toString() <br>");
    document.write("El array pasado a String: " + edades.toString() + "<br>");
    document.write("------------------------------------------------- <br>");

    
    // unshift() --> Adds new elements to the beginning of an array, and returns the new length
    document.write("La array principal: " + edades  + "<br>");
    document.write(`Método usado: unshift(), se añade el elemento "Edad:" al principio<br>`);
    let resultadoUnshift = edades.unshift(" Edad: ");
    document.write("El resultado del metodo después de agregar elemento: " + edades  + "<br>");
    document.write("New Length: " + resultadoUnshift  + "<br>");
    document.write("------------------------------------------------- <br>");
    
    // valueOf() --> Returns the primitive value of an array
    document.write("La array principal: " + edades  + "<br>");
    document.write("Método usado: valueOf() <br>");
    let resultadoValueOf = edades.valueOf();
    document.write("El resultado del metodo después de agregar elementos: " + resultadoValueOf + "<br>");
}