//Bai 1
// function checkAge(age) {
//     if (age >= 18) {
//         console.log('Accept!');
//         return true;
//     }
//     else {
//         return confirm('Did parents allow you?');
//     }

// }
// let age = parseInt(prompt('Enter your age'));
// checkAge(age);

//Bai 2
// function min(a,b) {
//     if (a < b) {
//         return a;
//     }
//     else {
//         return b;
//     }
// }
// let a = parseFloat(prompt('Enter number a'))
// let b = parseFloat(prompt('Enter number b'))
// console.log(`Min is ${min(a,b)}`);

//Bai 3
// const ask = (question, yes, no) => {
//     if (confirm(question)) {
//         yes();
//     }
//     else {
//         no();
//     }
// }
  
// ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
// );


//Bai 4
function login(question) {
    if (question == 'Admin') {
        let password = prompt('Enter your password');
        check(password);
    }
    else if (question == '' || question == 'Esc') {
        alert('Canceled!');
    }
    else {
        alert('I do not know you!');
    }
}

function check(password) {
    if (password == 'mindx') {
        alert('You are welcome!');
    }
    else {
        alert('Wrong password!');
    }
}

let question = prompt('Enter your username');
login(question);