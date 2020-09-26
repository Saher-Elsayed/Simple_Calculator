const getError = (number1, number2, operator) => {
  if (operator === "/" && number2 === 0) {
    return "Error division by 0 is not possible";
  } else if (isNaN(number1) || isNaN(number2)) {
    return "Error attempted to do mathmatical operation without valid numbers";
  }
  return "";
};

const answer = ()=> {
  let number1 = parseFloat(document.getElementById("firstInput").value);
  let number2 = parseFloat(document.getElementById("secondInput").value);
  let answer = 0;
  let operator = document.getElementById("operation").value;
  let error = getError(number1, number2, operator);
  if (operator === "+") {
    answer = number1 + number2;
  } else if (operator === "-") {
    answer = number1 - number2;
  } else if (operator === "*") {
    answer = number1 * number2;
  } else if (operator === "/") {
    answer = number1 / number2;
  }
  let resultBuilder =
    error === "" ? `${number1} ${operator} ${number2} = ${answer}` : error;
  document.getElementById("answer").value = resultBuilder;
}
