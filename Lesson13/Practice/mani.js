let ob = { "username": "Duc", "age": 19, "address": "hanoi"}
const stringifyJSON = JSON.stringify(ob)
let p = document.getElementById('hehe')
p.innerHTML = stringifyJSON
console.log(typeof(stringifyJSON));
