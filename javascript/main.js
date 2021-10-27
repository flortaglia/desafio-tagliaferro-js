// let edad = Number(prompt("Ingrese su edad: ")) ;
// let fechaNacimiento = 2021 - edad;
// let salida = "El año de tu nacimiento es: " + fechaNacimiento;
// alert (salida);
let operation = prompt("Elige un a operación a realizar: sumar, restar o multiplicar");
operation=operation.toLowerCase();

let firstnumber = Number(prompt("Ingresa el primer número")) ;
let secondnumber = Number(prompt("Ingresa el segundo número")) ;

// const validoperation == (operation=="sumar" || operation == "restar" || operation == "multiplicar")

/* Estructura IF básica */
if (operation == "sumar") {
	console.log("El resultado de la suma es:" + (firstnumber + secondnumber));
} else if (operation == "restar") {
	console.log("El resultado de la resta es:" + (firstnumber - secondnumber));
} else if (operation == "multiplicar"){
    console.log("El resultado de la multiplicación es:" + (firstnumber * secondnumber));
} else {
	console.log("Operación incorrecta");
}