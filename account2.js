// ==================FOR SEARCH BUTTON======================
let Orders = document.querySelector('.orders')
let personalData = document.querySelector('.personaldata')
let Address = document.querySelector('.address')
let Messages = document.querySelector('.messages')
Orders.classList.toggle('active');

document.querySelector('#orders').onclick = () =>{
    Orders.classList.toggle('active');
    personalData.classList.remove('active');
    Address.classList.remove('active');
    Messages.classList.remove('active');
}

document.querySelector('#personaldata').onclick = () =>{
    Orders.classList.remove('active');
    personalData.classList.toggle('active');
    Address.classList.remove('active');
    Messages.classList.remove('active');
}

document.querySelector('#address').onclick = () =>{
    Orders.classList.remove('active');
    personalData.classList.remove('active');
    Address.classList.toggle('active');
    Messages.classList.remove('active');
}

document.querySelector('#messages').onclick = () =>{
    Orders.classList.remove('active');
    personalData.classList.remove('active');
    Address.classList.remove('active');
    Messages.classList.toggle('active');
}
