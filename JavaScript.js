const operator = prompt("Enter Operator (+, -, * or / ): ");
const number1 = parseFloat(prompt("Enter First Number: "));
const number2 = parseFloat(prompt("Enter Second Number: "));

let result;

if (operator == "+"){
	result = number1 + number2;
}

else if (operator == "-"){
	result = number1 - number2;
}

else if (operator == "*") {
	result = number1 * number2;
}

else {
	result = number1 / number2;
}


alert(`${number1} ${operator} ${number2} = ${result}`);