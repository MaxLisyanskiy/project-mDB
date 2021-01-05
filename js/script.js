/* Задания на урок:

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)


*/


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
    item = document.querySelectorAll('.promo__interactive-item'),
    itemDelete = document.querySelectorAll('.delete'),
    checkbox = formAdd.querySelector('input[type=checkbox]');


    promoList.innerHTML = "";

    movieDB.movies.sort();

    movieDB.movies.forEach((films, item) => {
        promoList.innerHTML += `
        <li class="promo__interactive-item"> ${item + 1}: ${films.substr(0,10) + '...'} 
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
            <li class="promo__interactive-item"> ${item + 1}: ${films.substr(0,10) + '...'} 
                <div class="delete"></div>
            </li>
            `;
        });

        if(checkbox.checked){
            console.log('Добавляем любимый фильм');
            checkbox.checked = false;
        } 

        formValue.value = "";

        console.dir(checkbox);

    });

    promoList.addEventListener('click', (e) => {
        console.log(e.target.parentNode);
        e.target.parentNode.remove();
    });
