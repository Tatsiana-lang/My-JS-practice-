'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');  
const circles = document.getElementsByClassName('circle');    
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

// console.dir(box); 
// box.style.backgroundColor = 'blue'; 
// box.style.width = '500px'; 

box.style.cssText = 'backgroud-color: blue; width: 500px';



btns[2].style.borderRadius = '300%';
btns[2].style.width = '400px';
btns[2].style.backgroundColor = 'green';


circles[1].style.backgroundColor = 'black';

// for(let i = 0; i < hearts.length; i++){
    // hearts[i].style.backgroundColor = 'orange';
// };

hearts.forEach(item =>{
    item.style.backgroundColor = 'orange';
});

const div = document.createElement('div'); 
div.classList.add('black'); 

document.body.append(div); /

// ('.wrapper').append(div); //
// wrapper.prepend(div);
// wrapper.appendChild(div); //


// hearts[1].before(div); 
// hearts[1].after(div); 

// wrapper.insertBefore(div, hearts[1]); 


// circles[0].remove(); 

// wrapper.removeChild(hearts[1]);

// hearts[1].replaceWith(circles[0]); 
// wrapper.replaceChild(circles[0], hearts[1]);

div.innerHTML = "<h1>Hello Tatii!</h1>";     



// div.textContent = "Hello!"; 

div.insertAdjacentHTML('afterend', "<h2>Hello2!!</h2>"); 
