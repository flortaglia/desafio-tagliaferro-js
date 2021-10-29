// let edad = Number(prompt("Ingrese su edad: ")) ;
// let fechaNacimiento = 2021 - edad;
// let salida = "El año de tu nacimiento es: " + fechaNacimiento;
// alert (salida);


// let operation = prompt("Elige un a operación a realizar: sumar, restar o multiplicar");
// operation=operation.toLowerCase();

// let firstnumber = Number(prompt("Ingresa el primer número")) ;
// let secondnumber = Number(prompt("Ingresa el segundo número")) ;



// /* Estructura IF básica */
// if (operation == "sumar") {
// 	console.log("El resultado de la suma es:" + (firstnumber + secondnumber));
// } else if (operation == "restar") {
// 	console.log("El resultado de la resta es:" + (firstnumber - secondnumber));
// } else if (operation == "multiplicar"){
//     console.log("El resultado de la multiplicación es:" + (firstnumber * secondnumber));
// } else {
// 	console.log("Operación incorrecta");
// }
// var nota = 7;
// console.log("He realizado mi examen. Mi resultado es el siguiente:");

// // Operador ternario: (condición ? verdadero : falso)
// var calificacion = nota < 5 ? "suspendido" : "aprobado";

// console.log("Estoy", calificacion);

// Desafio 3

let list = prompt("Ingresa los productos de la lista de compras. Cuando termines escribi esc.");
list 	 = list.toLowerCase();
let shoppingList = '';
while (list != 'esc') {
    shoppingList += list +"\n";
	list 		  = prompt("Ingresa los productos de la lista de compras");
	list 		  = list.toLowerCase();
}
alert(shoppingList);

