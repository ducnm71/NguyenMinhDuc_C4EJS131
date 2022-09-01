// const but = document.getElementById('but')
// function showClicked () {
//     alert('Clicked')
// }
// function changeText () {
//     const p = document.getElementById('textp')
//     p.innerHTML = 'T changed this text'
//     p.style.color = 'pink' 
// }
// but.addEventListener('click', changeText)
// but.addEventListener('click', () => {
//         console.log('Another');
//     }
// )
const nope = document.getElementById('nope')
const button = document.getElementById('change-my-life')
const paragraph = document.getElementById('status')
const username = document.getElementById('username')
const pass = document.getElementById('pass')
const note = document.getElementById('notice')
const sub = document.getElementById('sub')
const par = document.getElementsByClassName('container')

console.log(pass.value.length);
function init1 () {
    paragraph.innerHTML = 'I am rich after studying at MindX'
}
function init2 () {
    nope.style.backgroundColor = 'red'
    nope.style.color = 'white'
}
function init3 () {
    nope.style.backgroundColor = ''
    nope.style.color = ''
}
function init4 () {
    alert('Are you sure not to change your life?')
    nope.innerHTML = 'I am sorry'
}
function f2 () {
    window.location.reload()
}

function f1 () {
    note.style.color = 'red'
    if (pass.value.length < 8) {
        
        if (username.value === '') {
            note.textContent = 'Username must not be empty. Password has at least 8 characters'
        }
        else {
            note.textContent = 'Password has at least 8 characters'
        }
    }
    else if (username.value === '') {
        
        note.textContent = 'Username must not be empty'
    }
    else {
        sub.addEventListener('click', f2)
    }
}

button.addEventListener('click', init1)
nope.addEventListener('mousemove', init2)
nope.addEventListener('mouseout', init3)
nope.addEventListener('click', init4)
sub.addEventListener('click', f1)

