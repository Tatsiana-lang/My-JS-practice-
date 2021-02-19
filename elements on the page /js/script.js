

'use strict';

 const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img');
const poster = document.querySelector('.promo__bg');
const title = poster.querySelector('.promo__title');
const MovieList = document.querySelector('.promo__interactive-list');


// adv.forEach(item =>{
//     item.remove();
// });

adv.forEach(function (item){
    item.remove();
});

title.textContent = 'МАЛЕНЬКИЕ ДЕВОЧКИ';

poster.style.backgroundImage = 'url("/img/content_1.jpg")';

MovieList.innerHTML = ""; 

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
       MovieList.innerHTML = MovieList.innerHTML + `
       <li class="promo__interactive-item"> ${i+1} ${film} 
           <div class="delete"></div>
       </li>
       `;
});

// a = a + 1;
// a +=1;