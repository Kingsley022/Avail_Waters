
// ==================FOR SEARCH BUTTON======================
let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navBar.classList.remove('active');
    loginForm.classList.remove('active');
}

// ==================FOR LOGIN======================
let loginForm = document.querySelector('.login-form')

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    navBar.classList.remove('active');
}


// ==================FOR menu btn======================
let navBar= document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navBar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}


// ==================SLIDER BEGINS======================
const myslide = document.querySelectorAll('.myslider'),
    dot = document.querySelectorAll('.dot');

let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 8000);
function autoslide(){
    counter += 1;
    slidefun(counter);
}
function plusSlides(n){
    counter += n;
    slidefun(counter);
    resetTimer();
}
function currentSlide(n){
    counter = n;
    slidefun(counter);
    resetTimer();
}
function resetTimer(){
    clearInterval(timer);
    timer = setInterval(autoslide, 8000);
}

function slidefun(n){
    let i;
    for (i = 0; i<myslide.length; i++){
        myslide[i].style.display = "none";
    }
    for (i = 0;i<dot.length;i++){
        dot[i].classList.remove('active');
    }
    if(n > myslide.length){
        counter = 1;
    }
    if(n < 1){
        counter = myslide.length;
    }
    myslide[counter -1].style.display = "block";
    dot[counter -1].classList.add('active'); 
}
