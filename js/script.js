let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}
document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () =>{
    searchForm.classList.remove('active');
}
window.onscroll=()=>{
    navbar.classList.remove('active');
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};
window.onload=()=>{
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};
const form = document.querySelector('.contact-form');
const sendButton = document.getElementById('send-button');
const confirmationIcon = document.getElementById('confirmation-icon');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

       
        try {
           
            sendButton.style.display = 'none';
            confirmationIcon.classList.remove('hidden');
        } catch (error) {
            console.error(error);
           
        }
    });

