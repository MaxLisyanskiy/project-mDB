
"use strict";

document.addEventListener('DOMContentLoaded', () => {

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


    const promoList = document.querySelector('.promo__interactive-list'),
        formAdd = document.querySelector('.add'),
        formValue = formAdd.querySelector('.adding__input'),
        checkbox = formAdd.querySelector('input[type=checkbox]');


    const changedFirstList = (promo, mainArr) => {
        promo.innerHTML = "";
        mainArr.sort();

        mainArr.forEach((films, item) => {
            promo.innerHTML += `
            <li class="promo__interactive-item"> ${item + 1}: ${films.substr(0,10) + '...'} 
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
    
                changedFirstList(promo, mainArr);
            });
        });
    };

    formAdd.addEventListener('submit', (e) => {
        e.preventDefault();

        if (formValue.value) {
            movieDB.movies.push(formValue.value);
        }

        changedFirstList(promoList, movieDB.movies);

        if(checkbox.checked){
            console.log('Добавляем любимый фильм');
            checkbox.checked = false;
        } 

        e.target.reset();
    });

    changedFirstList(promoList, movieDB.movies);
});
