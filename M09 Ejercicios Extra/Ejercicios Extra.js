/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:=
   var clave = Object.keys(objeto);
   var arrayOfArray = [];
   
   clave.forEach(x=>{
   var dato = [];
   dato.push(x); 
   dato.push(objeto[x]);
   arrayOfArray.push(dato);
   })
   
   
   return (arrayOfArray); 
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let objeto = {};

   string.split('').sort().forEach(x=>{
   if (objeto.hasOwnProperty(x)){
   objeto[x] +=1
   } else {
   objeto[x] = 1
   }
   })
return objeto;
}
function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var string2 = [];
   var may = [];
   var min = [];
   string.split('').forEach(x=>{
   if (x===x.toUpperCase())
   may.push(x);
   else 
   min.push(x);
   })
   string2.push(may.join(''));
   string2.push(min.join(''));
   string = string2.join('');
   return string;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
var frase2 = [];
frase.split(' ').forEach(x=>{
let palabra = []
x.split('').map(y=>{
palabra.unshift(y);
})
frase2.push(palabra.join(''));
})
return frase2.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
var capicua1 = [];
numero.toString().split('').forEach(x=>{
capicua1.unshift(x)
})
if(numero==capicua1.join('')){
return 'Es capicua'
} else 
return 'No es capicua'

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
var string2 = [];

string.split('').forEach(x=>{
if(!(x==="a"||x==="b"||x==="c")){
string2.push(x);
}
})
string = string2.join('');
return string;
}


function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort(function(x,y){
      console.log(y)
return x.length-y.length;
})

return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var union_arrays = [];

array1.forEach(x=>{
array2.forEach(y=>{
if(x===y){
union_arrays.push(x);
}
})
})

return union_arrays;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
