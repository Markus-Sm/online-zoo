'use strict';

/* mobile navigation */

const modalWindow = document.querySelector('.modal__window');
const closeModalWindow = document.querySelector('.close__modal__window')
const burger = document.querySelector('.burger')

const openModal = function(){
    modalWindow.classList.remove('hidden')
}

const closeModal = function(){
    modalWindow.classList.add('hidden')
}

burger.addEventListener('click', openModal);
closeModalWindow.addEventListener('click', closeModal)

/* pets carousel */

var sliderMain = document.getElementById('slider-main');
var item = sliderMain.getElementsByClassName('pet__card');

var sliderMain_2 = document.getElementById('slider-main-2');
var item_2 = sliderMain_2.getElementsByClassName('pet__card-2');

let arrowLeft = document.querySelector('.left');
let arrowRight = document.querySelector('.right');

function next(){
    sliderMain.append(item[0]);
    sliderMain_2.append(item_2[0]);
}

function prev(){
    sliderMain.prepend(item[item.length-1]);
    sliderMain_2.prepend(item_2[item_2.length-1]);
}

arrowLeft.addEventListener("click", prev)
arrowRight.addEventListener("click", next)

/* testimonials range slider */

const sliderRange = document.querySelector('.slider-progress');

const cards__wrapper = document.querySelector('.square__wrap_6');
const cards__item = cards__wrapper.getElementsByClassName('square__testimonials')

sliderRange.oninput = function(){

    for(let i = 0; i<= this.value; i++){
        cards__wrapper.append(cards__item[0]);
    }
}
