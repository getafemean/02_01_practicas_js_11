// Selección de elementos del DOM

let mainTitle = document.getElementById('main-title');
console.log(mainTitle);

let buttons = document.getElementsByTagName('button');
console.log(buttons);

let instructionsParagraph = document.getElementsByClassName('instructions');
console.log(instructionsParagraph);

let dinamicLink = document.querySelector('.dinamic-link');
console.log(dinamicLink);

let jumboItems = document.querySelectorAll('.jumbo li');
console.log(jumboItems);

// Manipulación de elementos en el DOM

mainTitle.innerHTML = 'Título cambiado';

buttons[2].disabled = true;

instructionsParagraph[0].style.color = 'violet';

dinamicLink.setAttribute('href','http://google.com');

let options = ['Windows','MacOs','Distros Linux'];

jumboItems.forEach((elem, i) => {
    elem.innerHTML = options[i];
})

// Creación de elementos en el DOM

let item = document.createElement('li');
item.innerHTML = 'Android';

let jumboList = document.querySelector('.jumbo');
jumboList.appendChild(item);

// Eventos en el DOM

let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');
overlay.style.display = 'none';
modal.style.display = 'none';

function toggleModal() {
    if(modal.style.display === 'none'){
        modal.style.display = 'flex';
        overlay.style.display = 'block';
    } else {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }
}

let input = document.querySelector('input');

input.addEventListener('input', () => {
    buttons[2].disabled = false;
})
