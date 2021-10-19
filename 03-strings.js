//comillas de otro tipo pueden ponerse adentro en el string y usarse como caracteres
//la barra se pone antes de un caracter que tenga que ser especial. Se llaman caracteres de escape
let comillasSimples =
  "hola! \"estoy adentro de comillas\" 'igual podemos usar simples' ";
let comillasDobles =
  "hola! \" igual podemos usar dobles \" \n 'yo también estoy adentro de comillas!'";
let comillaInvertida = `soy un hola desde backtick`;

console.log(comillasSimples, comillasDobles, comillaInvertida);

//vamos a acceder a un caracter en particular!
let conMetodos = "hola mundo";

//empezamos a contar desde 0. Acá pedimos el caracter en la posición 3:
console.log("usando métodos: ", conMetodos.charAt(3));
//podemos hacerlo sin el método, y pasamos entre corchetes a cuál acceder:
console.log("accediendo directamente al caracter: ", conMetodos[6]);

//podríamos crear una variable nueva para guardar ese caracter que queremos:
let unaLetra = conMetodos.charAt(7);
console.log("una letra", unaLetra);
