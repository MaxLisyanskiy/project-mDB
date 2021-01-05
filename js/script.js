/* Задания на урок:

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


"use strict";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

document.querySelector('.promo__adv').remove();
document.querySelector('.promo__genre').textContent = "Драма";
document.querySelector('.promo__bg').style.backgroundImage="url('img/bg.jpg')";


let promoList = document.querySelector('.promo__interactive-list'),
    formAdd = document.querySelector('.add'),
    formValue = formAdd.querySelector('.adding__input'),
    // item = document.querySelectorAll('.promo__interactive-item'),
    itemDelete = document.querySelector('.delete');


    promoList.innerHTML = "";

    movieDB.movies.sort();

    movieDB.movies.forEach((films, item) => {
        promoList.innerHTML += `
        <li class="promo__interactive-item"> ${item + 1}: ${films}
            <div class="delete"></div>
        </li>
        `;
    });

    formAdd.addEventListener('submit', (e) => {
        e.preventDefault();

        movieDB.movies.push(formValue.value);

        promoList.innerHTML = "";

        movieDB.movies.sort();

        movieDB.movies.forEach((films, item) => {
            promoList.innerHTML += `
            <li class="promo__interactive-item"> ${item + 1}: ${films}
                <div class="delete"></div>
            </li>
            `;
        });

        formValue.value = "";
    });

    itemDelete.addEventListener('click', (e) => {
        console.log(e.target);
    });