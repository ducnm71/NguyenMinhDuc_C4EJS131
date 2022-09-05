let list = document.querySelector('.book-list ul')
//delete
list.addEventListener('click', (e) => {
    if (e.target.className === 'delete') {
        let li = e.target.parentNode
        li.remove()
        swal("Deleted", "You deleted the book successfully!", "success");
        
    }
    search()
    result()
})

//add
let add = document.querySelector('.add button')
add.addEventListener('click', (e) => {
    let li = document.createElement('li')
    let span = document.createElement('span')
    let button = document.createElement('button')
    let bookName = document.querySelector('#addbook').value
    span.className = 'book'
    button.className = 'delete'
    button.textContent = 'Delete'
    if (bookName === '') {
        swal("Error", "You must not leave the Book's name blank!", "error");

    }
    else {
        span.textContent = bookName
        li.appendChild(span)
        li.appendChild(button)
        list.appendChild(li)
        swal("Good job!", "You added the book successfully!", "success");

    }
    search()
    result()
    
})


//search
function search () {
let datalist = document.getElementById('search')
let suggestList = document.getElementsByClassName('book')
let str = ''

for(let i=0; i<suggestList.length;i++) {
    str += '<option value="'+suggestList[i].textContent+'" />';    
}

datalist.innerHTML = str


}
search()

function result () {
    let finds = document.querySelector("#finds button")
    let suggestList = document.getElementsByClassName('book')
    let li = document.querySelectorAll('li')
    let span = document.querySelectorAll('.book')
    
    finds.addEventListener('click', () => {
        let searchbook = document.querySelector('#searchbook')
        for(let i=0; i<suggestList.length;i++) {
            if ( span[i].textContent === searchbook.value) {
                li[i].className = 'result'
            }
            else {
                li[i].classList.remove('result')
            }
        }
        searchbook.value = ""
        
    })
}
result();
