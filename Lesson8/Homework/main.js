// máy tính cơ bản

// phép tinh
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// // nhập đầu vào 2 số
// let number1 = parseFloat(prompt('Enter the first number'));
// let number2 = parseFloat(prompt('Enter the second number'));

// let result;

// // using if...else if... else or switch
// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }

// // display the result
// console.log(`${number1} ${operator} ${number2} = ${result}`);




// chương trình tìm số nguyên tố

// nhập số cần nhập
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number == 1) {
    console.log(`${number} is not prime!`);
}

// check if number is greater than 1
else if (number > 1) {
    let count = 0;
    for (let i = 1; i < number + 1; i++) {
        if (number % i == 0) {
            count+=1;
        }
    }
    if (count == 2) {
        console.log(`${number} is prime!`);
    }
    else {
        console.log(`${number} is not prime!`);
    }

}


// check if number is less than 1
else {
    console.log('You entered the wrong condition!');
}
