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