const hamburger = document.querySelector('.hamber');
const closeUp = document.querySelector('.close');
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const header = document.querySelector('.header');

hamburger.addEventListener('click', dropDown);
closeUp.addEventListener('click', closeMenu);

/*function*/
function dropDown(e){
    e.preventDefault();
    menu.style.display = 'block'
    hamburger.style.display = 'none'
    closeUp.style.display = 'block'
}

function closeMenu(e){
    e.preventDefault();
    menu.style.display = 'none'
    hamburger.style.display = 'block'
    closeUp.style.display = 'none'

}

/*button*/
const button = document.querySelector('.see')
button.addEventListener('click', handleClick)

/*function*/
function handleClick(e){
    e.preventDefault()
    alert('You shall be redirected to the See All Page.')
}