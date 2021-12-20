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

const
    promo = document.querySelector('.promo'),
    promoBg = promo.querySelector('.promo__bg'),
    promoGenre = promo.querySelector('.promo__genre'),
    imgPromo = promo.querySelectorAll('img'),
    movieList = promo.querySelector('.promo__interactive-list'),
    addingInput = promo.querySelector('.adding__input'),
    addingBtn = promo.querySelector('button');

imgPromo.forEach(item => {
    item.remove();
});

promoGenre.textContent = "драма";

promoBg.style.backgroundImage = "url('../img/bg.jpg')";

movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});

addingBtn.addEventListener('click', (event) => {
    event.preventDefault();
    movieDB.movies.push(addingInput.value);
    movieList.innerHTML += `
        <li class="promo__interactive-item">${movieDB.movies.length} ${addingInput.value}
            <div class="delete"></div>
        </li>
    `;
});

// movieDB.movies.forEach((item) => {
//     item.splice(21, item.length, '...');
// });