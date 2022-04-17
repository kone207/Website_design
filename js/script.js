let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('#login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelector('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}
menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', ()=>{
    searchBar.classList.toggle('active');
    searchBtn.classList.toggle('fa-times');
});
formBtn.addEventListener('click', ()=>{
    loginForm.classList.add('active');
});
formClose.addEventListener('click', ()=>{
    loginForm.classList.remove('active');
});
videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        document.querySelector('#video-slider').src = src;
    });
});
var swiper = new Swiper(".review-slider",{
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidePerView: 1,            
        },
        768: {
            slidePerView: 2,
        },
        1024: {
            slidePerView: 3,
        },
    },

});
var swiper = new Swiper(".brand-slider",{
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
            slidePerView: 1,            
        },
        768: {
            slidePerView: 2,
        },
        991: {
            slidePerView: 3,
        },
        1200: {
            slidePerView: 3,
        },
    },

});