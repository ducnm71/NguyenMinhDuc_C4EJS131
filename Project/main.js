let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}

// Headers

let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY >0)
});


function validateForm() {
    let x = document.forms["MyWeb"]["fullname"].value;
    if (x == "") {
        alert("Full Name must be fill out");
        return false;
    } 
}

function validateForm() {
    let x = document.forms["MyWeb"]["username"].value;
    if (x == "") {
        alert("Username must be fill out");
        return false;
    } 
}

function validateForm() {
    let x = document.forms["MyWeb"]["email"].value;
    if (x == "") {
        alert("Email must be fill out");
        return false;
    } 
}

function validateForm() {
    let x = document.forms["MyWeb"]["phone"].value;
    if (x == "") {
        alert("Phone must be fill out");
        return false;
    } 
}


function validateForm() {
    let x = document.forms["MyWeb"]["password"].value;
    if (x == "") {
        alert("Password must be fill out");
        return false;
    } 
}
function validateForm() {
    let x = document.forms["MyWeb"]["confirm"].value;
    if (x == "") {
        alert("Confirm password must be fill out");
        return false;
    } 
}


var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
        },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,
        },
        991: {
        slidesPerView: 3,
        },
    },
    });


    //localStorage
    let regisbtn = document.getElementById("form")
    regisbtn.addEventListener('submit', function (e) {
        e.preventDefault();
        let infor = {
            "fullname": regisbtn.fullname.value,
            "username": regisbtn.username.value,
            "email": regisbtn.email.value,
            "phone": regisbtn.phone.value,
            "password": regisbtn.password.value,
            "confirmpass": regisbtn.confirmpass.value,
            "gender": regisbtn.gender.value
        }
    
        
        window.localStorage.setItem("infor", JSON.stringify(infor))
    })
    
    let loginbtn = document.getElementById("login-form")
    loginbtn.addEventListener('submit', function (e) {
        e.preventDefault()
        let in4 = {
            "name": loginbtn.name.value,
            "pass": loginbtn.psw.value,
            "note": loginbtn.note.value
        }
    
        window.localStorage.setItem("in4", JSON.stringify(in4))
    })
    