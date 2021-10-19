const nombre = "Pam";
const edad = 35;

const uniendoConMas = "hola soy " + nombre + " y tengo " + edad + " años.";

console.log(uniendoConMas);

const uniendoConBackTicks = `hola soy ${nombre} y tengo ${edad} años`;
console.log(uniendoConBackTicks);

//no siempre en la vida van a necesitar backticks... no se compliquen
const simple = "programacion";
console.log("hola, yo enseño " + simple);

//concatenar con método:
const parte1 = "hola soy Pam ";
const parte2 = "y tengo 35 años";

const uniendo = parte1.concat(parte2);
console.log(uniendo);
