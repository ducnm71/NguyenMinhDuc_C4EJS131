//bai 1
let but = document.createElement('button')
but.innerHTML = 'CHANGE COLOR'
but.id = 'button'
but.style.color = 'blue'
but.style.fontSize = '50px'
but.style.fontFamily = 'Arial, Helvetica, sans-serif'
but.style.backgroundColor = 'skyblue'
but.style.width = '500px'
but.style.height = '100px'
but.style.borderRadius = '50px'
let butDad = document.createElement('div')
butDad.style.display = 'flex'
butDad.style.justifyContent = 'center'
butDad.style.height = '980px'
butDad.style.alignItems = 'center'

butDad.appendChild(but)
document.body.appendChild(butDad)


const listColor = [ 'red', 'blue', 'green', 'yellow', 'black', 'white', 'orange', 'violet', 'pink', 'purple', 'brown', 'grey']
let index = 0;
function change() {
    
    document.body.style.backgroundColor = listColor[index]
    if (index >= listColor.length - 1) {
        index = 0;
    }
    else {
        index = index + 1
    }
    return false

 
}
but.onclick = change


//bai 2
// let btn = document.createElement('button')
// btn.id = 'btn'
// let i = 0
// btn.innerHTML = `${i}`
// btn.style.width = '96px'
// btn.style.height = '48px'
// btn.style.fontSize = '24px'
// document.body.appendChild(btn)

// function increase () {
//     btn.innerHTML = `${i+1}`
//     i = i + 1

// }

// btn.onclick = increase


