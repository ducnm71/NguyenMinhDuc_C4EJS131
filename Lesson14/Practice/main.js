
//bai1
const a = parseInt(prompt("Enter a: "));
const b = parseInt(prompt("Enter b: "));
let arr = [];
let result = [];
let c = a;
for(let i = 0; i <= (b-a); i++){
    arr.push(c);
    c++;
}

function checkPrime(arr) {
    if(arr < 2) return false;
      
    for (let k = 2; k < arr; k++){
        if(arr % k == 0){
            return false;
        }
    }
    return true;
}
arr.forEach(function (element) {
    const item = checkPrime(element);
    if (item) {
        result.push(element);
    }
});
console.log(`Numbers in range from ${a} to ${b}:`);
console.log(arr);
console.log(` Prime numbers in range from ${a} to ${b}:`);
console.log(result);

//bai2
function numberOneTriangle (x) {
    let str = ''
    for(let i = 1; i <= x; i++){
        for(let j = 1; j <= i; j++){
            str += '*'
        }
        str += '\n'
    }
    console.log(str);
}
numberOneTriangle(4);