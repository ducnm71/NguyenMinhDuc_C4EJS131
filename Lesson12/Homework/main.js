let list = document.querySelector('.book-list ul')
//delete
list.addEventListener('click', (e) => {
    if (e.target.className === 'delete') {
        let li = e.target.parentNode
        li.remove()
        swal("Deleted", "You deleted the book successfully!", "success");
        
    }
    search()
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
/* đoạn dưới này em định làm là khi nhập tên sách vào xong 
r ấn tìm thì cái phần sách đó sẽ có vòng xanh bao quanh 
nma lúc ấn tìm thì nó chỉ ra mỗi cái đầu tiên thôi ạ
phải làm như nào tiếp ạ?*/
let finds = document.querySelector("#finds button")
let suggestList = document.getElementsByClassName('book')
let searchbook = document.querySelector('#searchbook')
searchbook = suggestList
let li = document.querySelectorAll('li')
let span = document.querySelectorAll('.book')

for(let i=0; i<suggestList.length;i++) {
    if ( span[i].textContent === searchbook[i].textContent) {
        finds.addEventListener('click', () => {
            li[i].className = 'result'
        })
    }
    break
}
console.log(li); 



// console.log(suggestList);

// finds.addEventListener('change', function() {
//     // console.log(find.value);
//     suggestList.find(item => item == finds.value)
//     console.log( suggestList.find(item => item === finds.value))
// })
