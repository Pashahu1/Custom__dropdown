'use strict';

const dropdown = document.querySelector('.dropdown');
const trigger = dropdown.querySelector('.dropdown__trigger');
const content = dropdown.querySelector('.dropdown__content');

// const initialHeight = content.clientHeight; - вираховує усю висоту до я кого розгорнеться
// content.style.height = '0';  - встановлює стилі висоти на 0

dropdown.addEventListener('contextmenu', (event) => {
  event.preventDefault();

  // if(dropdown.classList.contains('dropdown--active')) {
  //   // content.style.height = '0'; значення якщо не активне
  //   dropdown.classList.remove('dropdown--active');
  // } else {
  //   // content.style.height = `${initialHeight}px`; -виставляє значення висоти до якого розвернеться в пікселях
  //   dropdown.classList.add('dropdown--active');
  // }

  dropdown.classList.toggle('dropdown--active');
})

// подія click - для лівої кнопки мишки
// подія contextmenu - для правої кнопки мишки

// event - обєкт парамметер функції,подія що відбулася
// event.preventDefault(); - метод вимикає дефолтні значення відкриття подробиць сайту для цієї події в данному випадку для нашого випадаючого меню

// метод toggle - корисне скорочення

// if(dropdown.classList.contains('dropdown--active')) {
//   dropdown.classList.remove('dropdown--active');
// } else {
//   dropdown.classList.add('dropdown--active')
// }

// замісць цього можна застосвати такий скорочений вид він допомагає перемикати клас елемента

// dropdown.classList.toggle('dropdown--active');