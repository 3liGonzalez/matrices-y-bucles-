/*Suma de resistencias en serie
 

Calcule la suma de todas las resistencias conectadas en serie.
Ejemplos:
- `sumResitance([-1,5,6,3])` debería devolver `"15 ohmios"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` debería devolver ``23,5 ohmios''. (14 + 3,5 + 6 = 23,5)
- `sumResitance([8,15,100])` debería devolver ``123 ohmios''. (8 + 15 + 100 = 123)

Nota: Este enfoque utiliza el valor absoluto de cada resistencia para garantizar que todos los valores sean positivos.*/
function sumResistance ([-1,5,6,3]) { 
    console.log(sumResitance([-1,5,6,3]));
}
 function sumResistance ([14,3.5,6]) {
    console.log(sumResitance([14,3.5,6]));
 }
function sumResistance ([8,15,100]) {
    console.log(sumResistance([8,15,100]));
}
/*Número dividido en mitades
 Dado un número, devuelve el número dividido en sus mitades en una matriz.
 Ejemplos:
- `numDiv(4)` debería devolver `[2, 2]` .
- `numDiv(10)` debería devolver `[5, 5]` . */
function numDiv (8) {
const mitad = 8/ 2; 
return [ 4, 4]; 
}
function numDiv (6) {
    const mitad = 6/ 2; 
    return [ 3, 3]; 
    }

 


Sociedad secreta
 

Encuentra el nombre de una sociedad secreta según la primera letra del nombre de cada miembro.
 

Ejemplos:
- `secretName(["Esperanza", "Franco", "Nia"])` debería devolver `'EFN'` .
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` debería devolver `'CJMPRR'` .
- `secretName(['Harry', 'Ron', 'Hermione'])` debería devolver `'HHR'` .
 

Estado en línea
 

Muestra el estado en línea de una lista de usuarios.
 

Ejemplo:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` debería devolver `'mockIng99, J0eyPunch y 1 más en línea'` .
 

Matriz de múltiplos
 

Cree una función que tome dos parámetros (número, longitud) y devuelva una matriz de longitud que contenga múltiplos del número.
 

Ejemplos:
- `arrayMultiplos(2, 10)` debería devolver `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]` .
- `arrayMultiplos(17, 6)` debería devolver `[17, 34, 51, 68, 85, 102]` .
 

Dominio positivo en Array
 

Escribe una función para determinar si una matriz es positivamente dominante.
Una matriz es positivamente dominante cuando la mayoría de sus elementos son positivos.
 

Ejemplo:
- `positiveDom([-1, -3, -5, 4, 6767])` debería devolver `falso` .
 

Promedio antípoda
 

Dada una matriz, devuelva una matriz más corta siguiendo estos pasos:
- Divida la matriz en dos partes iguales*. Si no es igual, elimine el elemento del medio para obtener dos matrices iguales.
- Sumar cada número de la primera parte con los números inversos de la segunda parte.
- Divide cada número de la matriz resultante entre 2.
 

Ejemplo:
- Para la matriz `[1,2,3,5,22,6]` , el resultado debe ser `[3.5, 12, 4]` .