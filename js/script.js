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
    movieList = document.querySelector('.promo__interactive-list');

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