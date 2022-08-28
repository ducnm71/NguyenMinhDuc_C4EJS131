// DOM Element
//find element ny id
let firstchildElm = document.getElementById('firstchild');
// console.log('firstchildElm:', firstchildElm);

// let childElm = document.getElementsByClassName('child');
// console.log('childElm:', childElm);

// let pelm = document.getElementsByTagName('p');
// console.log(pelm);

//DOM edit elemet value (attribute, text,..)
// firstchildElm.innerHTML = 'Zero';


//edit attribute
// firstchildElm.style = 'color: green';
//edit style
// firstchildElm.style.color = 'violet';

//DOM create, remove element
const todoList = ['Homework', 'Shopping', 'Playing']; //API
let ul = document.createElement('ul');
for (let i = 0; i < todoList.length; i++) {
    let li = document.createElement('li'); 
    li.innerHTML = todoList[i];

    ul.appendChild(li);
}

document.body.appendChild(ul);


